-- ==============================================================================
-- ITI Resource Hub - Safe Demonstration Seed Data
-- ==============================================================================

-- 1. SEED TRADES
INSERT INTO public.trades (id, name, slug, code, description, duration_years, icon, is_active)
VALUES
    ('a0000000-0000-0000-0000-000000000001', 'ICTSM (Information & Communication Technology System Maintenance)', 'ictsm', 'ICTSM-01', 'Specialized CTS trade covering computer hardware diagnostics, network infrastructure installation, operating systems administration, and fiber-optic communication systems.', 2, 'cpu', true),
    ('a0000000-0000-0000-0000-000000000002', 'Electrician', 'electrician', 'ELEC-02', 'Comprehensive electrical engineering fundamentals, domestic and industrial wiring, transformer maintenance, and AC/DC machine winding.', 2, 'zap', true),
    ('a0000000-0000-0000-0000-000000000003', 'Fitter', 'fitter', 'FIT-03', 'Precision metal fabrication, mechanical benchwork, lathe operations, milling, drilling, assembly, and industrial maintenance.', 2, 'wrench', true),
    ('a0000000-0000-0000-0000-000000000004', 'COPA (Computer Operator & Programming Assistant)', 'copa', 'COPA-04', 'Data processing, web design fundamentals, Python scripting, office productivity tools, database administration, and cyber security basics.', 1, 'terminal', true)
ON CONFLICT (slug) DO NOTHING;

-- 2. SEED SUBJECTS (Focused on ICTSM Year 1 & Year 2)
INSERT INTO public.subjects (id, trade_id, name, slug, code, training_year, semester, description, is_active)
VALUES
    -- ICTSM Year 1
    ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'Computer Hardware & Peripherals Maintenance', 'hardware-maintenance', 'ICTSM-TT-101', 1, 1, 'Architecture of modern microcomputers, motherboard chipsets, BIOS/UEFI configuration, power supply testing, and peripheral troubleshooting.', true),
    ('b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', 'Computer Networking Basics & Structured Cabling', 'networking-basics', 'ICTSM-TT-102', 1, 2, 'OSI 7-layer model, TCP/IP protocol suite, crimping RJ-45 patch cables, Cat6 termination, switch configurations, and IPv4 addressing.', true),
    ('b0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', 'Operating Systems Installation & Configuration', 'os-configuration', 'ICTSM-TT-103', 1, 1, 'Dual-boot setup (Windows 11 and Ubuntu LTS), disk partitioning, file system architecture, user permissions, and driver management.', true),
    
    -- ICTSM Year 2
    ('b0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000001', 'Network Routing, Switching & Wireless Infrastructure', 'routing-switching', 'ICTSM-TT-201', 2, 3, 'Static and dynamic routing (RIP, OSPF), VLAN segmentation, inter-VLAN routing, Access Point setup, and enterprise Wi-Fi security.', true),
    ('b0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000001', 'Fiber Optics Communication & Testing', 'fiber-optics', 'ICTSM-TT-202', 2, 4, 'Single-mode and multi-mode fiber theory, fusion splicing, mechanical connectorization, optical power meter verification, and OTDR fault location.', true),
    ('b0000000-0000-0000-0000-000000000006', 'a0000000-0000-0000-0000-000000000001', 'Server Administration & Cloud Virtualization', 'server-admin', 'ICTSM-TT-203', 2, 4, 'Active Directory Domain Services (AD DS), DNS, DHCP server roles, Hyper-V/KVM hypervisor deployment, and system backup strategies.', true),

    -- Electrician Subjects
    ('b0000000-0000-0000-0000-000000000007', 'a0000000-0000-0000-0000-000000000002', 'Basic Electrical Theory & Circuit Analysis', 'electrical-theory', 'ELEC-TT-101', 1, 1, 'Ohms Law, Kirchhoffs Laws, series/parallel circuit calculations, magnetics, and safety precautions.', true),
    
    -- COPA Subjects
    ('b0000000-0000-0000-0000-000000000008', 'a0000000-0000-0000-0000-000000000004', 'Database Management & SQL Programming', 'dbms-sql', 'COPA-TT-101', 1, 2, 'Relational database concepts, normalization, SQL queries, DDL/DML, and MySQL database administration.', true)
ON CONFLICT (trade_id, slug) DO NOTHING;

-- 3. SEED RESOURCES
INSERT INTO public.resources (
    id, title, slug, description, resource_type, language, status,
    source_name, author_name, difficulty_level, is_featured, sort_order, version_label,
    published_at
)
VALUES
    (
        'c0000000-0000-0000-0000-000000000001',
        'Lesson Plan 01: Motherboard Form Factors, Chipsets and POST Troubleshooting',
        'lp-motherboard-troubleshooting',
        'Comprehensive 4-step instructional lesson plan conforming to NIMI pattern for teaching motherboard architectures (ATX, Micro-ATX, Mini-ITX), chipset bus lines, and diagnosing POST beep codes with diagnostic cards.',
        'lesson-plan',
        'English',
        'published',
        'National Instructional Media Institute (NIMI) Framework',
        'Senior Technical Instructor, ICTSM',
        'intermediate',
        true,
        1,
        'v2.1',
        NOW() - INTERVAL '15 days'
    ),
    (
        'c0000000-0000-0000-0000-000000000002',
        'Demonstration Plan 02: Precision Fusion Splicing of Single-Mode Fiber Optic Cables',
        'dp-fusion-splicing-fiber-optics',
        'Step-by-step practical demonstration plan guiding instructors through stripping, cleaving, core alignment, arc fusion splicing, and heat-shrink protection sleeve installation with optical loss inspection.',
        'demonstration-plan',
        'English',
        'published',
        'Advanced Training Institute (ATI) Workshop Standards',
        'Telecom Practical Trainer',
        'advanced',
        true,
        2,
        'v1.4',
        NOW() - INTERVAL '12 days'
    ),
    (
        'c0000000-0000-0000-0000-000000000003',
        'Lab Manual: Structured UTP Network Cabling and Patch Panel Termination',
        'lab-manual-structured-cabling',
        'Laboratory exercise manual with job sheets for T568A and T568B straight-through and crossover patch leads, punch-down block termination on 24-port keystone panels, and wire-map continuity testing.',
        'lab-manual',
        'English',
        'published',
        'ITI Practical Training Syllabus',
        'Networking Lab In-Charge',
        'beginner',
        true,
        3,
        'v3.0',
        NOW() - INTERVAL '8 days'
    ),
    (
        'c0000000-0000-0000-0000-000000000004',
        'Subject Notes: TCP/IP Subnetting and CIDR Address Allocation Reference Guide',
        'notes-tcpip-subnetting-cidr',
        'Detailed notes on classful vs classless IP addressing, subnet masking calculations, calculating usable hosts, and variable-length subnet masking (VLSM) practice problems with step-by-step solutions.',
        'notes',
        'English',
        'published',
        'DGT Recommended Reference Material',
        'Subject Matter Specialist',
        'intermediate',
        false,
        4,
        'v1.0',
        NOW() - INTERVAL '6 days'
    ),
    (
        'c0000000-0000-0000-0000-000000000005',
        'Technical Diagram: Enterprise Network Architecture & VLAN Topology Diagram',
        'diagram-enterprise-network-topology',
        'High-resolution technical diagram illustrating three-tier hierarchical network design (Core, Distribution, Access layers), trunking links (802.1Q), and DMZ security perimeter boundaries.',
        'diagram',
        'English',
        'published',
        'Cisco Networking Academy Reference Format',
        'Network Systems Designer',
        'advanced',
        true,
        5,
        'v2.0',
        NOW() - INTERVAL '4 days'
    ),
    (
        'c0000000-0000-0000-0000-000000000006',
        'Lab Manual: Windows Server Active Directory & Group Policy Objects Configuration',
        'lab-manual-ad-gpo-configuration',
        'Practical job sheet for deploying Windows Server domain controller, creating Organizational Units (OUs), creating user accounts, and enforcing password complexity via Group Policy Objects.',
        'lab-manual',
        'English',
        'published',
        'Server Technologies Workshop',
        'Systems Administrator',
        'intermediate',
        false,
        6,
        'v1.2',
        NOW() - INTERVAL '2 days'
    )
ON CONFLICT (slug) DO NOTHING;

-- 4. ASSOCIATE RESOURCES WITH SUBJECTS
INSERT INTO public.resource_subjects (resource_id, subject_id)
VALUES
    ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001'),
    ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000005'),
    ('c0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000002'),
    ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002'),
    ('c0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000004'),
    ('c0000000-0000-0000-0000-000000000006', 'b0000000-0000-0000-0000-000000000006')
ON CONFLICT DO NOTHING;

-- 5. SEED RESOURCE FILES
INSERT INTO public.resource_files (
    id, resource_id, storage_path, original_filename, mime_type, file_size_bytes, is_primary, download_url
)
VALUES
    (
        'd0000000-0000-0000-0000-000000000001',
        'c0000000-0000-0000-0000-000000000001',
        'resources/ictsm/lp-motherboard-troubleshooting.pdf',
        'LP_ICTSM_01_Motherboard_Troubleshooting.pdf',
        'application/pdf',
        425000,
        true,
        '/sample-files/sample-lesson-plan.pdf'
    ),
    (
        'd0000000-0000-0000-0000-000000000002',
        'c0000000-0000-0000-0000-000000000001',
        'resources/ictsm/lp-motherboard-troubleshooting.docx',
        'LP_ICTSM_01_Motherboard_Troubleshooting.docx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        180000,
        false,
        '/sample-files/sample-lesson-plan.docx'
    ),
    (
        'd0000000-0000-0000-0000-000000000003',
        'c0000000-0000-0000-0000-000000000002',
        'resources/ictsm/dp-fusion-splicing.pdf',
        'DP_ICTSM_02_Fusion_Splicing_Procedure.pdf',
        'application/pdf',
        612000,
        true,
        '/sample-files/sample-demo-plan.pdf'
    ),
    (
        'd0000000-0000-0000-0000-000000000004',
        'c0000000-0000-0000-0000-000000000003',
        'resources/ictsm/lab-structured-cabling.pdf',
        'Lab_Manual_Structured_Cabling_Job_Sheet.pdf',
        'application/pdf',
        854000,
        true,
        '/sample-files/sample-lab-manual.pdf'
    ),
    (
        'd0000000-0000-0000-0000-000000000005',
        'c0000000-0000-0000-0000-000000000004',
        'resources/ictsm/notes-tcpip-subnetting.pdf',
        'ICTSM_Study_Notes_Subnetting_Guide.pdf',
        'application/pdf',
        340000,
        true,
        '/sample-files/sample-notes.pdf'
    ),
    (
        'd0000000-0000-0000-0000-000000000006',
        'c0000000-0000-0000-0000-000000000005',
        'resources/ictsm/diagram-network-topology.svg',
        'Network_Topology_Enterprise_Diagram.svg',
        'image/svg+xml',
        124000,
        true,
        '/sample-files/sample-diagram.svg'
    ),
    (
        'd0000000-0000-0000-0000-000000000007',
        'c0000000-0000-0000-0000-000000000006',
        'resources/ictsm/lab-windows-server-ad.pdf',
        'Lab_Manual_Windows_Server_AD_DS.pdf',
        'application/pdf',
        520000,
        true,
        '/sample-files/sample-lab-manual.pdf'
    )
ON CONFLICT DO NOTHING;

-- 6. SEED NOTICES
INSERT INTO public.notices (
    id, title, slug, body, category, source_name, status, published_at, expires_at, is_pinned
)
VALUES
    (
        'e0000000-0000-0000-0000-000000000001',
        'Updated CTS Curriculum Guidelines & Semester Pattern Guidelines for 2026-2027',
        'cts-curriculum-guidelines-2026',
        'All ITI Principals and Instructors are hereby notified of the updated CTS curriculum guidelines issued for the academic cycle 2026-2027. Emphasis has been augmented on Practical Hands-on Assessments, Dual System of Training (DST) industry partnerships, and updated digital lesson plans for ICTSM, Electrician, and Fitter trades.',
        'curriculum',
        'Directorate General of Training (DGT)',
        'published',
        NOW() - INTERVAL '3 days',
        NOW() + INTERVAL '90 days',
        true
    ),
    (
        'e0000000-0000-0000-0000-000000000002',
        'Submission of Sessional Marks & Practical Assessment Records for All India Trade Test (AITT)',
        'aitt-practical-records-submission',
        'Instructors are directed to compile and upload continuous assessment scores, Trade Practical job completion logs, and Engineering Drawing / Trade Theory attendance registers to the portal ahead of the upcoming AITT examinations.',
        'exam',
        'National Council for Vocational Education and Training (NCVET)',
        'published',
        NOW() - INTERVAL '7 days',
        NOW() + INTERVAL '21 days',
        false
    ),
    (
        'e0000000-0000-0000-0000-000000000003',
        'Annual Workshop Safety & Equipment Calibration Circular',
        'annual-workshop-safety-calibration',
        'Annual safety inspection guidelines for mechanical workshops, electrical test benches, and computer labs. All power supplies, earthing pits, and multimeters must be tested and certified prior to the mid-term examinations.',
        'circular',
        'State Directorate of Employment & Training',
        'published',
        NOW() - INTERVAL '20 days',
        NOW() + INTERVAL '40 days',
        false
    ),
    (
        'e0000000-0000-0000-0000-000000000004',
        'Archive Notice: Previous Year Trade Test Marksheet Verification Circular',
        'archive-marksheet-verification-2025',
        'Notice regarding the conclusion of verification window for 2024-2025 batch trade test marksheets. This circular is now archived for reference purposes.',
        'circular',
        'Examination Controller Division',
        'published',
        NOW() - INTERVAL '120 days',
        NOW() - INTERVAL '30 days',
        false
    )
ON CONFLICT (slug) DO NOTHING;
