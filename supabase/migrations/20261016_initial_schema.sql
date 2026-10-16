-- ==============================================================================
-- ITI Resource Hub - Initial Database Schema Migration
-- Designed for Supabase PostgreSQL with Row Level Security (RLS) & Full-Text Search
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TRADES TABLE
CREATE TABLE IF NOT EXISTS public.trades (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    duration_years INT NOT NULL DEFAULT 2,
    icon VARCHAR(100) DEFAULT 'book-open',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS public.subjects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trade_id UUID NOT NULL REFERENCES public.trades(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    code VARCHAR(50),
    training_year INT NOT NULL DEFAULT 1 CHECK (training_year IN (1, 2)),
    semester INT CHECK (semester BETWEEN 1 AND 4),
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_subject_trade_slug UNIQUE (trade_id, slug)
);

-- 3. RESOURCES TABLE
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'resource_type_enum') THEN
        CREATE TYPE resource_type_enum AS ENUM (
            'lesson-plan',
            'demonstration-plan',
            'lab-manual',
            'notes',
            'video',
            'diagram',
            'question-bank',
            'reference'
        );
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'resource_status_enum') THEN
        CREATE TYPE resource_status_enum AS ENUM ('draft', 'published', 'archived');
    END IF;
END$$;

CREATE TABLE IF NOT EXISTS public.resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(350) NOT NULL UNIQUE,
    description TEXT,
    resource_type resource_type_enum NOT NULL DEFAULT 'notes',
    language VARCHAR(50) NOT NULL DEFAULT 'English',
    status resource_status_enum NOT NULL DEFAULT 'published',
    source_name VARCHAR(255),
    source_url TEXT,
    author_name VARCHAR(255),
    difficulty_level VARCHAR(50) DEFAULT 'intermediate',
    is_featured BOOLEAN NOT NULL DEFAULT false,
    sort_order INT NOT NULL DEFAULT 0,
    version_label VARCHAR(50) DEFAULT 'v1.0',
    supersedes_resource_id UUID REFERENCES public.resources(id) ON DELETE SET NULL,
    view_count INT NOT NULL DEFAULT 0,
    download_count INT NOT NULL DEFAULT 0,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    published_at TIMESTAMPTZ,
    -- Full-text search vector column
    tsv TSVECTOR
);

-- 4. RESOURCE_FILES TABLE
CREATE TABLE IF NOT EXISTS public.resource_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resource_id UUID NOT NULL REFERENCES public.resources(id) ON DELETE CASCADE,
    storage_path TEXT NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    file_size_bytes BIGINT NOT NULL DEFAULT 0,
    checksum VARCHAR(128),
    is_primary BOOLEAN NOT NULL DEFAULT false,
    download_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. RESOURCE_SUBJECTS TABLE (Many-to-Many)
CREATE TABLE IF NOT EXISTS public.resource_subjects (
    resource_id UUID NOT NULL REFERENCES public.resources(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
    PRIMARY KEY (resource_id, subject_id)
);

-- 6. TAGS & RESOURCE_TAGS TABLES
CREATE TABLE IF NOT EXISTS public.tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS public.resource_tags (
    resource_id UUID NOT NULL REFERENCES public.resources(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (resource_id, tag_id)
);

-- 7. NOTICES TABLE
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'notice_status_enum') THEN
        CREATE TYPE notice_status_enum AS ENUM ('draft', 'published', 'archived');
    END IF;
END$$;

CREATE TABLE IF NOT EXISTS public.notices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(350) NOT NULL UNIQUE,
    body TEXT NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'circular',
    source_name VARCHAR(255),
    source_url TEXT,
    status notice_status_enum NOT NULL DEFAULT 'published',
    published_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    expires_at TIMESTAMPTZ,
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    attachment_url TEXT,
    attachment_name VARCHAR(255),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 8. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_trades_slug ON public.trades(slug);
CREATE INDEX IF NOT EXISTS idx_trades_is_active ON public.trades(is_active);

CREATE INDEX IF NOT EXISTS idx_subjects_trade_id ON public.subjects(trade_id);
CREATE INDEX IF NOT EXISTS idx_subjects_slug ON public.subjects(slug);
CREATE INDEX IF NOT EXISTS idx_subjects_year ON public.subjects(training_year);

CREATE INDEX IF NOT EXISTS idx_resources_status ON public.resources(status);
CREATE INDEX IF NOT EXISTS idx_resources_resource_type ON public.resources(resource_type);
CREATE INDEX IF NOT EXISTS idx_resources_is_featured ON public.resources(is_featured);
CREATE INDEX IF NOT EXISTS idx_resources_published_at ON public.resources(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_resources_slug ON public.resources(slug);

CREATE INDEX IF NOT EXISTS idx_resource_files_resource_id ON public.resource_files(resource_id);
CREATE INDEX IF NOT EXISTS idx_resource_subjects_subject_id ON public.resource_subjects(subject_id);
CREATE INDEX IF NOT EXISTS idx_resource_tags_tag_id ON public.resource_tags(tag_id);

CREATE INDEX IF NOT EXISTS idx_notices_status ON public.notices(status);
CREATE INDEX IF NOT EXISTS idx_notices_published_at ON public.notices(published_at DESC);

-- Full-text search GIN index on resources
CREATE INDEX IF NOT EXISTS idx_resources_tsv ON public.resources USING GIN (tsv);

-- Automatic TSVECTOR updater function and trigger
CREATE OR REPLACE FUNCTION public.resources_tsv_update() RETURNS trigger AS $$
BEGIN
  NEW.tsv :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.author_name, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.source_name, '')), 'D');
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_resources_tsv ON public.resources;
CREATE TRIGGER trigger_resources_tsv
BEFORE INSERT OR UPDATE ON public.resources
FOR EACH ROW EXECUTE FUNCTION public.resources_tsv_update();

-- Automatic updated_at timestamp trigger
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_trades_updated_at ON public.trades;
CREATE TRIGGER trigger_trades_updated_at BEFORE UPDATE ON public.trades FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trigger_subjects_updated_at ON public.subjects;
CREATE TRIGGER trigger_subjects_updated_at BEFORE UPDATE ON public.subjects FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trigger_resources_updated_at ON public.resources;
CREATE TRIGGER trigger_resources_updated_at BEFORE UPDATE ON public.resources FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trigger_notices_updated_at ON public.notices;
CREATE TRIGGER trigger_notices_updated_at BEFORE UPDATE ON public.notices FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ==============================================================================
-- 9. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.trades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resource_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resource_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resource_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;

-- Anonymous public read access:
CREATE POLICY "Public read active trades" ON public.trades
    FOR SELECT TO anon, authenticated
    USING (is_active = true);

CREATE POLICY "Public read active subjects" ON public.subjects
    FOR SELECT TO anon, authenticated
    USING (is_active = true);

CREATE POLICY "Public read published resources" ON public.resources
    FOR SELECT TO anon, authenticated
    USING (status = 'published');

CREATE POLICY "Public read files for published resources" ON public.resource_files
    FOR SELECT TO anon, authenticated
    USING (EXISTS (
        SELECT 1 FROM public.resources
        WHERE resources.id = resource_files.resource_id AND resources.status = 'published'
    ));

CREATE POLICY "Public read resource subjects" ON public.resource_subjects
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public read tags" ON public.tags
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public read resource tags" ON public.resource_tags
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public read published notices" ON public.notices
    FOR SELECT TO anon, authenticated
    USING (status = 'published');

-- Admin full access (authenticated users or service role):
CREATE POLICY "Admin manage trades" ON public.trades
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage subjects" ON public.subjects
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage resources" ON public.resources
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage resource files" ON public.resource_files
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage resource subjects" ON public.resource_subjects
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage tags" ON public.tags
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage resource tags" ON public.resource_tags
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);

CREATE POLICY "Admin manage notices" ON public.notices
    FOR ALL TO authenticated
    USING (true) WITH CHECK (true);
