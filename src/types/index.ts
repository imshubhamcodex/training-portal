export type ResourceType =
  | 'lesson-plan'
  | 'demonstration-plan'
  | 'lab-manual'
  | 'notes'
  | 'video'
  | 'diagram'
  | 'question-bank'
  | 'reference';

export type ResourceStatus = 'draft' | 'published' | 'archived';

export type NoticeStatus = 'draft' | 'published' | 'archived';

export interface Trade {
  id: string;
  name: string;
  slug: string;
  code: string;
  description: string;
  duration_years: number;
  icon: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Subject {
  id: string;
  trade_id: string;
  trade_slug?: string;
  trade_name?: string;
  name: string;
  slug: string;
  code: string;
  training_year: number; // 1 or 2
  semester?: number; // 1, 2, 3, 4
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ResourceFile {
  id: string;
  resource_id: string;
  storage_path: string;
  original_filename: string;
  mime_type: string;
  file_size_bytes: number;
  checksum?: string;
  is_primary: boolean;
  download_url: string;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  resource_type: ResourceType;
  trade_id: string;
  trade_slug: string;
  trade_name: string;
  subject_id: string;
  subject_slug: string;
  subject_name: string;
  training_year: number; // 1 or 2
  language: string; // 'English', 'Hindi', etc.
  status: ResourceStatus;
  source_name?: string;
  source_url?: string;
  author_name?: string;
  difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
  is_featured: boolean;
  sort_order: number;
  job_number?: string;
  version_label: string;
  supersedes_resource_id?: string;
  created_by?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  tags: string[];
  files: ResourceFile[];
  view_count?: number;
  download_count?: number;
  week_no?: number;
}

export interface Notice {
  id: string;
  title: string;
  slug: string;
  body: string;
  category: 'circular' | 'exam' | 'curriculum' | 'admission' | 'general';
  source_name?: string;
  source_url?: string;
  status: NoticeStatus;
  published_at: string;
  expires_at?: string;
  is_pinned?: boolean;
  attachment_url?: string;
  attachment_name?: string;
  created_by?: string;
  created_at: string;
  updated_at: string;
}

export interface ResourceCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  resource_type: ResourceType;
}

export interface SearchFilters {
  query?: string;
  trade?: string;
  subject?: string;
  resource_type?: string;
  year?: string;
  language?: string;
  format?: string;
  sort?: 'relevance' | 'newest' | 'alphabetical';
  page?: number;
  limit?: number;
}
