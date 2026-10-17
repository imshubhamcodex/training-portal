import type { Resource, SearchFilters } from '../../types';

export const RESOURCES_DATA: Resource[] = [
  {
    id: 'c0000000-0000-0000-0000-000000000001',
    title: 'Lesson Plan 01: Motherboard Form Factors, Chipsets and POST Diagnostics',
    slug: 'lp-motherboard-troubleshooting',
    description: 'Comprehensive 4-step instructional lesson plan conforming to NIMI pattern for teaching motherboard architectures (ATX, Micro-ATX, Mini-ITX), chipset bus lines, and diagnosing POST beep codes with diagnostic cards.',
    resource_type: 'lesson-plan',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000001',
    subject_slug: 'hardware-maintenance',
    subject_name: 'Computer Hardware & Peripherals Maintenance',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'National Instructional Media Institute (NIMI) Framework',
    source_url: 'https://nimi.gov.in',
    author_name: 'Senior Technical Instructor, ICTSM',
    difficulty_level: 'intermediate',
    is_featured: true,
    sort_order: 1,
    job_number: 'ICTSM-LP-01',
    version_label: 'v2.1',
    tags: ['Motherboard', 'POST Beep Codes', 'BIOS/UEFI', 'Hardware Diagnostics', 'ATX'],
    created_at: '2026-09-20T10:00:00Z',
    updated_at: '2026-10-01T14:30:00Z',
    published_at: '2026-10-01T14:30:00Z',
    view_count: 842,
    download_count: 318,
    week_no: 1,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000001',
        resource_id: 'c0000000-0000-0000-0000-000000000001',
        storage_path: 'resources/ictsm/lp-motherboard-troubleshooting.pdf',
        original_filename: 'LP_ICTSM_01_Motherboard_Troubleshooting.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 425000,
        is_primary: true,
        download_url: '/sample-files/sample-lesson-plan.pdf',
        created_at: '2026-10-01T14:30:00Z',
      },
      {
        id: 'd0000000-0000-0000-0000-000000000002',
        resource_id: 'c0000000-0000-0000-0000-000000000001',
        storage_path: 'resources/ictsm/lp-motherboard-troubleshooting.docx',
        original_filename: 'LP_ICTSM_01_Motherboard_Troubleshooting.docx',
        mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        file_size_bytes: 180000,
        is_primary: false,
        download_url: '/sample-files/sample-lesson-plan.docx',
        created_at: '2026-10-01T14:30:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000002',
    title: 'Demonstration Plan 02: Precision Fusion Splicing of Single-Mode Fiber Optic Cables',
    slug: 'dp-fusion-splicing-fiber-optics',
    description: 'Step-by-step practical demonstration plan guiding instructors through stripping, cleaving, core alignment, arc fusion splicing, and heat-shrink protection sleeve installation with optical loss inspection.',
    resource_type: 'demonstration-plan',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000005',
    subject_slug: 'fiber-optics',
    subject_name: 'Fiber Optics Communication & Testing',
    training_year: 2,
    language: 'English',
    status: 'published',
    source_name: 'Advanced Training Institute (ATI) Workshop Standards',
    author_name: 'Telecom Practical Trainer',
    difficulty_level: 'advanced',
    is_featured: true,
    sort_order: 2,
    job_number: 'ICTSM-DP-02',
    version_label: 'v1.4',
    tags: ['Fiber Optics', 'Fusion Splicing', 'OTDR', 'Cleaving', 'Telecom'],
    created_at: '2026-09-25T11:00:00Z',
    updated_at: '2026-10-04T09:15:00Z',
    published_at: '2026-10-04T09:15:00Z',
    view_count: 615,
    download_count: 247,
    week_no: 2,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000003',
        resource_id: 'c0000000-0000-0000-0000-000000000002',
        storage_path: 'resources/ictsm/dp-fusion-splicing.pdf',
        original_filename: 'DP_ICTSM_02_Fusion_Splicing_Procedure.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 612000,
        is_primary: true,
        download_url: '/sample-files/sample-demo-plan.pdf',
        created_at: '2026-10-04T09:15:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000003',
    title: 'Lab Manual: Structured UTP Network Cabling and Patch Panel Termination',
    slug: 'lab-manual-structured-cabling',
    description: 'Laboratory exercise manual with job sheets for T568A and T568B straight-through and crossover patch leads, punch-down block termination on 24-port keystone panels, and wire-map continuity testing.',
    resource_type: 'lab-manual',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000002',
    subject_slug: 'networking-basics',
    subject_name: 'Computer Networking Basics & Structured Cabling',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'ITI Practical Training Syllabus',
    author_name: 'Networking Lab In-Charge',
    difficulty_level: 'beginner',
    is_featured: true,
    sort_order: 3,
    job_number: 'ICTSM-LM-03',
    version_label: 'v3.0',
    tags: ['UTP Cable', 'Cat6', 'T568B', 'Patch Panel', 'Keystone Jack', 'Crimping'],
    created_at: '2026-09-28T08:30:00Z',
    updated_at: '2026-10-08T16:00:00Z',
    published_at: '2026-10-08T16:00:00Z',
    view_count: 1120,
    download_count: 532,
    week_no: 3,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000004',
        resource_id: 'c0000000-0000-0000-0000-000000000003',
        storage_path: 'resources/ictsm/lab-structured-cabling.pdf',
        original_filename: 'Lab_Manual_Structured_Cabling_Job_Sheet.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 854000,
        is_primary: true,
        download_url: '/sample-files/sample-lab-manual.pdf',
        created_at: '2026-10-08T16:00:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000004',
    title: 'Subject Notes: TCP/IP Subnetting and CIDR Address Allocation Reference Guide',
    slug: 'notes-tcpip-subnetting-cidr',
    description: 'Detailed notes on classful vs classless IP addressing, subnet masking calculations, calculating usable hosts, and variable-length subnet masking (VLSM) practice problems with step-by-step solutions.',
    resource_type: 'notes',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000002',
    subject_slug: 'networking-basics',
    subject_name: 'Computer Networking Basics & Structured Cabling',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'DGT Recommended Reference Material',
    author_name: 'Subject Matter Specialist',
    difficulty_level: 'intermediate',
    is_featured: false,
    sort_order: 4,
    job_number: 'ICTSM-SN-04',
    version_label: 'v1.0',
    tags: ['TCP/IP', 'Subnetting', 'CIDR', 'VLSM', 'IP Addressing'],
    created_at: '2026-10-01T12:00:00Z',
    updated_at: '2026-10-10T11:20:00Z',
    published_at: '2026-10-10T11:20:00Z',
    view_count: 730,
    download_count: 289,
    week_no: 3,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000005',
        resource_id: 'c0000000-0000-0000-0000-000000000004',
        storage_path: 'resources/ictsm/notes-tcpip-subnetting.pdf',
        original_filename: 'ICTSM_Study_Notes_Subnetting_Guide.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 340000,
        is_primary: true,
        download_url: '/sample-files/sample-notes.pdf',
        created_at: '2026-10-10T11:20:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000005',
    title: 'Technical Diagram: Enterprise Network Architecture & VLAN Topology Diagram',
    slug: 'diagram-enterprise-network-topology',
    description: 'High-resolution technical diagram illustrating three-tier hierarchical network design (Core, Distribution, Access layers), trunking links (802.1Q), and DMZ security perimeter boundaries.',
    resource_type: 'diagram',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000004',
    subject_slug: 'routing-switching',
    subject_name: 'Network Routing, Switching & Wireless Infrastructure',
    training_year: 2,
    language: 'English',
    status: 'published',
    source_name: 'Cisco Networking Academy Reference Format',
    author_name: 'Network Systems Designer',
    difficulty_level: 'advanced',
    is_featured: true,
    sort_order: 5,
    job_number: 'ICTSM-TD-05',
    version_label: 'v2.0',
    tags: ['Network Topology', 'VLAN', 'Core Switch', 'Router', 'Diagram'],
    created_at: '2026-10-05T14:00:00Z',
    updated_at: '2026-10-12T15:45:00Z',
    published_at: '2026-10-12T15:45:00Z',
    view_count: 980,
    download_count: 412,
    week_no: 4,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000006',
        resource_id: 'c0000000-0000-0000-0000-000000000005',
        storage_path: 'resources/ictsm/diagram-network-topology.svg',
        original_filename: 'Network_Topology_Enterprise_Diagram.svg',
        mime_type: 'image/svg+xml',
        file_size_bytes: 124000,
        is_primary: true,
        download_url: '/sample-files/sample-diagram.svg',
        created_at: '2026-10-12T15:45:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000006',
    title: 'Lab Manual: Windows Server Active Directory & Group Policy Objects Configuration',
    slug: 'lab-manual-ad-gpo-configuration',
    description: 'Practical job sheet for deploying Windows Server domain controller, creating Organizational Units (OUs), creating user accounts, and enforcing password complexity via Group Policy Objects.',
    resource_type: 'lab-manual',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000006',
    subject_slug: 'server-admin',
    subject_name: 'Server Administration & Cloud Virtualization',
    training_year: 2,
    language: 'English',
    status: 'published',
    source_name: 'Server Technologies Workshop',
    author_name: 'Systems Administrator',
    difficulty_level: 'intermediate',
    is_featured: false,
    sort_order: 6,
    job_number: 'ICTSM-LM-06',
    version_label: 'v1.2',
    tags: ['Windows Server', 'Active Directory', 'GPO', 'Domain Controller', 'SysAdmin'],
    created_at: '2026-10-08T09:00:00Z',
    updated_at: '2026-10-14T10:00:00Z',
    published_at: '2026-10-14T10:00:00Z',
    view_count: 512,
    download_count: 198,
    week_no: 2,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000007',
        resource_id: 'c0000000-0000-0000-0000-000000000006',
        storage_path: 'resources/ictsm/lab-windows-server-ad.pdf',
        original_filename: 'Lab_Manual_Windows_Server_AD_DS.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 520000,
        is_primary: true,
        download_url: '/sample-files/sample-lab-manual.pdf',
        created_at: '2026-10-14T10:00:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000007',
    title: 'Lesson Plan 03: Linux File Permissions, Sudo Access & Chmod Octal Notation',
    slug: 'lp-linux-file-permissions',
    description: 'Theory and practical lesson plan for teaching Linux POSIX permissions (read, write, execute), user/group ownership, chmod numeric/symbolic notation, and visudo configuration.',
    resource_type: 'lesson-plan',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000003',
    subject_slug: 'os-configuration',
    subject_name: 'Operating Systems Installation & Configuration',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'NIMI ICTSM Practical Guidelines',
    author_name: 'Linux System Instructor',
    difficulty_level: 'intermediate',
    is_featured: false,
    sort_order: 7,
    job_number: 'ICTSM-LP-07',
    version_label: 'v1.0',
    tags: ['Linux', 'Chmod', 'File Permissions', 'Ubuntu', 'CLI'],
    created_at: '2026-10-09T14:00:00Z',
    updated_at: '2026-10-15T09:00:00Z',
    published_at: '2026-10-15T09:00:00Z',
    view_count: 420,
    download_count: 165,
    week_no: 6,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000008',
        resource_id: 'c0000000-0000-0000-0000-000000000007',
        storage_path: 'resources/ictsm/lp-linux-permissions.pdf',
        original_filename: 'LP_ICTSM_Linux_Permissions.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 310000,
        is_primary: true,
        download_url: '/sample-files/sample-lesson-plan.pdf',
        created_at: '2026-10-15T09:00:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000008',
    title: 'Study Notes: Basic Electrical Safety, Earthing Resistance & Multimeter Measurements',
    slug: 'notes-electrical-safety-earthing',
    description: 'Essential electrical safety procedures for workshops, measuring ground earth resistance with a megger meter, and verifying supply voltages with digital multimeters.',
    resource_type: 'notes',
    trade_id: 'a0000000-0000-0000-0000-000000000002',
    trade_slug: 'electrician',
    trade_name: 'Electrician',
    subject_id: 'b0000000-0000-0000-0000-000000000007',
    subject_slug: 'electrical-theory',
    subject_name: 'Basic Electrical Theory & Circuit Analysis',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'Electrician Trade Theory Module',
    author_name: 'Chief Electrical Instructor',
    difficulty_level: 'beginner',
    is_featured: false,
    sort_order: 8,
    job_number: 'ELEC-SN-08',
    version_label: 'v1.1',
    tags: ['Safety', 'Earthing', 'Multimeter', 'Electrician', 'Megger'],
    created_at: '2026-10-02T10:00:00Z',
    updated_at: '2026-10-11T13:00:00Z',
    published_at: '2026-10-11T13:00:00Z',
    view_count: 580,
    download_count: 210,
    week_no: 5,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000009',
        resource_id: 'c0000000-0000-0000-0000-000000000008',
        storage_path: 'resources/electrician/notes-safety-earthing.pdf',
        original_filename: 'Electrician_Safety_and_Earthing_Notes.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 490000,
        is_primary: true,
        download_url: '/sample-files/sample-notes.pdf',
        created_at: '2026-10-11T13:00:00Z',
      },
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000009',
    title: 'Lab Manual: SQL Queries, Table Creation & Primary/Foreign Key Constraints',
    slug: 'lab-manual-sql-constraints',
    description: 'COPA practical exercise covering MySQL schema creation, defining PRIMARY KEY, FOREIGN KEY, NOT NULL, and executing JOIN queries across multiple relational tables.',
    resource_type: 'lab-manual',
    trade_id: 'a0000000-0000-0000-0000-000000000004',
    trade_slug: 'copa',
    trade_name: 'COPA',
    subject_id: 'b0000000-0000-0000-0000-000000000008',
    subject_slug: 'dbms-sql',
    subject_name: 'Database Management & SQL Programming',
    training_year: 1,
    language: 'English',
    status: 'published',
    source_name: 'COPA Practical Lab Guide',
    author_name: 'COPA Instructor',
    difficulty_level: 'intermediate',
    is_featured: false,
    sort_order: 9,
    job_number: 'COPA-LM-09',
    version_label: 'v2.0',
    tags: ['SQL', 'MySQL', 'Database', 'Foreign Key', 'COPA'],
    created_at: '2026-10-04T12:00:00Z',
    updated_at: '2026-10-13T11:00:00Z',
    published_at: '2026-10-13T11:00:00Z',
    view_count: 670,
    download_count: 295,
    week_no: 5,
    files: [
      {
        id: 'd0000000-0000-0000-0000-000000000010',
        resource_id: 'c0000000-0000-0000-0000-000000000009',
        storage_path: 'resources/copa/lab-manual-sql.pdf',
        original_filename: 'COPA_SQL_Lab_Manual_Exercise.pdf',
        mime_type: 'application/pdf',
        file_size_bytes: 380000,
        is_primary: true,
        download_url: '/sample-files/sample-lab-manual.pdf',
        created_at: '2026-10-13T11:00:00Z',
      },
    ],
  },
  // Draft Resource (for admin lifecycle testing)
  {
    id: 'c0000000-0000-0000-0000-000000000010',
    title: '[Draft] Demonstration Plan: Multi-meter Calibration and SMD Resistor Soldering',
    slug: 'draft-demo-plan-smd-soldering',
    description: 'Internal draft demonstration plan undergoing technical review before general publishing.',
    resource_type: 'demonstration-plan',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    subject_id: 'b0000000-0000-0000-0000-000000000001',
    subject_slug: 'hardware-maintenance',
    subject_name: 'Computer Hardware & Peripherals Maintenance',
    training_year: 1,
    language: 'English',
    status: 'draft',
    source_name: 'Draft Workshop Material',
    author_name: 'Associate Instructor',
    difficulty_level: 'intermediate',
    is_featured: false,
    sort_order: 10,
    version_label: 'v0.9-draft',
    tags: ['SMD', 'Soldering', 'Draft'],
    created_at: '2026-10-15T10:00:00Z',
    updated_at: '2026-10-15T10:00:00Z',
    files: [],
    week_no: 0,
  },
];

export function getAllResources(includeDrafts = false): Resource[] {
  if (includeDrafts) {
    return RESOURCES_DATA;
  }
  return RESOURCES_DATA.filter((r) => r.status === 'published');
}

export function getResourceBySlug(slug: string, includeDrafts = false): Resource | undefined {
  const resource = RESOURCES_DATA.find((r) => r.slug.toLowerCase() === slug.toLowerCase());
  if (!resource) return undefined;
  if (!includeDrafts && resource.status !== 'published') return undefined;
  return resource;
}

export function getResourceById(id: string, includeDrafts = false): Resource | undefined {
  const resource = RESOURCES_DATA.find((r) => r.id === id);
  if (!resource) return undefined;
  if (!includeDrafts && resource.status !== 'published') return undefined;
  return resource;
}

export function getFeaturedResources(): Resource[] {
  return RESOURCES_DATA.filter((r) => r.status === 'published' && r.is_featured);
}

export function getRecentResources(limit = 6): Resource[] {
  return RESOURCES_DATA.filter((r) => r.status === 'published')
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
    .slice(0, limit);
}

export function getRelatedResources(resourceId: string, limit = 3): Resource[] {
  const current = RESOURCES_DATA.find((r) => r.id === resourceId);
  if (!current) return [];

  return RESOURCES_DATA.filter((r) => {
    if (r.id === current.id || r.status !== 'published') return false;
    const sameTrade = r.trade_id === current.trade_id;
    const sameSubject = r.subject_id === current.subject_id;
    const sameType = r.resource_type === current.resource_type;
    const shareTags = r.tags.some((t) => current.tags.includes(t));
    return sameSubject || (sameTrade && (sameType || shareTags));
  }).slice(0, limit);
}

export function getResourcesByCategory(categorySlug: string): Resource[] {
  // Mapping category slug to resource_type
  const typeMap: Record<string, string[]> = {
    'lesson-plans': ['lesson-plan'],
    'demonstration-plans': ['demonstration-plan'],
    'lab-manuals': ['lab-manual'],
    'notes': ['notes', 'question-bank', 'reference'],
    'videos-images': ['video', 'diagram'],
  };

  const types = typeMap[categorySlug] || [categorySlug];
  return RESOURCES_DATA.filter((r) => r.status === 'published' && types.includes(r.resource_type));
}

export function getResourcesByTrade(tradeSlug: string): Resource[] {
  return RESOURCES_DATA.filter(
    (r) => r.status === 'published' && r.trade_slug.toLowerCase() === tradeSlug.toLowerCase()
  );
}

export function getResourcesBySubject(tradeSlug: string, subjectSlug: string): Resource[] {
  return RESOURCES_DATA.filter(
    (r) =>
      r.status === 'published' &&
      r.trade_slug.toLowerCase() === tradeSlug.toLowerCase() &&
      r.subject_slug.toLowerCase() === subjectSlug.toLowerCase()
  );
}

export function getTradeResourceCount(tradeId: string): number {
  return RESOURCES_DATA.filter((r) => r.trade_id === tradeId && r.status === 'published').length;
}

export function getSubjectResourceCount(subjectId: string): number {
  return RESOURCES_DATA.filter((r) => r.subject_id === subjectId && r.status === 'published').length;
}

export function searchResources(filters: SearchFilters = {}) {
  let list = RESOURCES_DATA.filter((r) => r.status === 'published');

  // 1. Text Query Search (title, description, tags, author, subject, trade)
  if (filters.query && filters.query.trim()) {
    const q = filters.query.toLowerCase().trim();
    const queryTokens = q.split(/\s+/).filter(Boolean);

    list = list.filter((r) => {
      const searchBlob = `${r.title} ${r.description} ${r.tags.join(' ')} ${r.author_name || ''} ${r.source_name || ''} ${r.subject_name} ${r.trade_name}`.toLowerCase();
      // Match if all or any tokens match
      return queryTokens.every((token) => searchBlob.includes(token));
    });
  }

  // 2. Filter by Trade
  if (filters.trade && filters.trade !== 'all') {
    list = list.filter((r) => r.trade_slug.toLowerCase() === filters.trade?.toLowerCase());
  }

  // 3. Filter by Subject
  if (filters.subject && filters.subject !== 'all') {
    list = list.filter((r) => r.subject_slug.toLowerCase() === filters.subject?.toLowerCase());
  }

  // 4. Filter by Resource Type
  if (filters.resource_type && filters.resource_type !== 'all') {
    list = list.filter((r) => r.resource_type === filters.resource_type);
  }

  // 5. Filter by Training Year
  if (filters.year && filters.year !== 'all') {
    const yearNum = parseInt(filters.year, 10);
    if (!isNaN(yearNum)) {
      list = list.filter((r) => r.training_year === yearNum);
    }
  }

  // 6. Filter by Language
  if (filters.language && filters.language !== 'all') {
    list = list.filter((r) => r.language.toLowerCase() === filters.language?.toLowerCase());
  }

  // 7. Filter by Format (PDF, DOCX, SVG, etc.)
  if (filters.format && filters.format !== 'all') {
    const fmt = filters.format.toLowerCase();
    list = list.filter((r) =>
      r.files.some((f) => {
        if (fmt === 'pdf') return f.mime_type.includes('pdf');
        if (fmt === 'docx') return f.mime_type.includes('word') || f.original_filename.endsWith('.docx');
        if (fmt === 'image' || fmt === 'svg') return f.mime_type.startsWith('image');
        return true;
      })
    );
  }

  // 8. Sorting
  const sort = filters.sort || 'relevance';
  if (sort === 'newest') {
    list.sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime());
  } else if (sort === 'alphabetical') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Relevance / featured first then newest
    list.sort((a, b) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime();
    });
  }

  const total = list.length;
  const page = Math.max(1, filters.page || 1);
  const limit = Math.max(1, filters.limit || 9);
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedItems = list.slice(startIndex, startIndex + limit);

  return {
    items: paginatedItems,
    total,
    page,
    limit,
    totalPages,
    hasMore: page < totalPages,
  };
}
