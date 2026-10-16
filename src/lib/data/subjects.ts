import type { Subject } from '../../types';

export const SUBJECTS_DATA: Subject[] = [
  // ICTSM Year 1
  {
    id: 'b0000000-0000-0000-0000-000000000001',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Computer Hardware & Peripherals Maintenance',
    slug: 'hardware-maintenance',
    code: 'ICTSM-TT-101',
    training_year: 1,
    semester: 1,
    description: 'Architecture of modern microcomputers, motherboard form factors, chipset bus lines, BIOS/UEFI configuration, SMPS testing, and peripheral troubleshooting.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'b0000000-0000-0000-0000-000000000002',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Computer Networking Basics & Structured Cabling',
    slug: 'networking-basics',
    code: 'ICTSM-TT-102',
    training_year: 1,
    semester: 2,
    description: 'OSI 7-layer reference model, TCP/IP protocol suite, crimping RJ-45 patch leads, Cat6 punch-down termination, unmanaged switch configurations, and IPv4 addressing.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'b0000000-0000-0000-0000-000000000003',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Operating Systems Installation & Configuration',
    slug: 'os-configuration',
    code: 'ICTSM-TT-103',
    training_year: 1,
    semester: 1,
    description: 'Dual-boot setup (Windows 11 and Ubuntu LTS), GPT/MBR disk partitioning, file system architectures (NTFS/EXT4), user access permissions, and driver management.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },

  // ICTSM Year 2
  {
    id: 'b0000000-0000-0000-0000-000000000004',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Network Routing, Switching & Wireless Infrastructure',
    slug: 'routing-switching',
    code: 'ICTSM-TT-201',
    training_year: 2,
    semester: 3,
    description: 'Static and dynamic routing (RIPv2, OSPF), 802.1Q VLAN segmentation, inter-VLAN routing on Layer-3 switches, enterprise wireless access points, and WPA3 security.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'b0000000-0000-0000-0000-000000000005',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Fiber Optics Communication & Testing',
    slug: 'fiber-optics',
    code: 'ICTSM-TT-202',
    training_year: 2,
    semester: 4,
    description: 'Single-mode and multi-mode optical fiber theory, core-alignment fusion arc splicing, mechanical connectorization, optical power meter attenuation testing, and OTDR trace reading.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 'b0000000-0000-0000-0000-000000000006',
    trade_id: 'a0000000-0000-0000-0000-000000000001',
    trade_slug: 'ictsm',
    trade_name: 'ICTSM',
    name: 'Server Administration & Cloud Virtualization',
    slug: 'server-admin',
    code: 'ICTSM-TT-203',
    training_year: 2,
    semester: 4,
    description: 'Windows Server Active Directory Domain Services (AD DS), DNS, DHCP server roles, Group Policy Objects, Linux web servers (Apache/Nginx), and virtualization hypervisors.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },

  // Electrician Subjects
  {
    id: 'b0000000-0000-0000-0000-000000000007',
    trade_id: 'a0000000-0000-0000-0000-000000000002',
    trade_slug: 'electrician',
    trade_name: 'Electrician',
    name: 'Basic Electrical Theory & Circuit Analysis',
    slug: 'electrical-theory',
    code: 'ELEC-TT-101',
    training_year: 1,
    semester: 1,
    description: "Ohm's Law, Kirchhoff's Laws, series/parallel circuit calculations, magnetism, capacitor banks, and electrical safety standards.",
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },

  // COPA Subjects
  {
    id: 'b0000000-0000-0000-0000-000000000008',
    trade_id: 'a0000000-0000-0000-0000-000000000004',
    trade_slug: 'copa',
    trade_name: 'COPA',
    name: 'Database Management & SQL Programming',
    slug: 'dbms-sql',
    code: 'COPA-TT-101',
    training_year: 1,
    semester: 2,
    description: 'Relational database concepts, entity-relationship diagrams, 1NF/2NF/3NF normalization, SQL DDL/DML commands, and MySQL management.',
    is_active: true,
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-10-15T00:00:00Z',
  },
];

export function getAllSubjects(): Subject[] {
  return SUBJECTS_DATA;
}

export function getSubjectsByTrade(tradeId: string): Subject[] {
  return SUBJECTS_DATA.filter((subject) => subject.trade_id === tradeId && subject.is_active);
}

export function getSubjectsByTradeSlug(tradeSlug: string): Subject[] {
  return SUBJECTS_DATA.filter(
    (subject) => subject.trade_slug?.toLowerCase() === tradeSlug.toLowerCase() && subject.is_active
  );
}

export function getSubjectBySlug(tradeSlug: string, subjectSlug: string): Subject | undefined {
  return SUBJECTS_DATA.find(
    (subject) =>
      subject.trade_slug?.toLowerCase() === tradeSlug.toLowerCase() &&
      subject.slug.toLowerCase() === subjectSlug.toLowerCase()
  );
}
