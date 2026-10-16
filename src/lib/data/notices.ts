import type { Notice } from '../../types';

export const NOTICES_DATA: Notice[] = [
  {
    id: 'e0000000-0000-0000-0000-000000000001',
    title: 'Updated CTS Curriculum Guidelines & Semester Pattern Guidelines for Academic Cycle',
    slug: 'cts-curriculum-guidelines-2026',
    body: `All ITI Principals, Vice-Principals, and Trade Instructors are hereby notified of the updated Craftsmen Training Scheme (CTS) curriculum guidelines.

Key Directives:
1. Increased emphasis on Trade Practical assessments with a minimum of 65% weightage.
2. Introduction of Dual System of Training (DST) modules with approved local industrial clusters.
3. Compulsory integration of digital teaching aids, lesson plans, and practical demonstration logs for ICTSM, Electrician, Fitter, and COPA trades.
4. Periodic safety calibration audits of laboratory and workshop equipment.

All institutions must align their monthly instructional schedules with these directives effective immediately.`,
    category: 'curriculum',
    source_name: 'Directorate General of Training (DGT)',
    source_url: 'https://dgt.gov.in',
    status: 'published',
    published_at: '2026-10-10T09:00:00Z',
    expires_at: '2027-01-10T23:59:59Z',
    is_pinned: true,
    attachment_name: 'DGT_CTS_Curriculum_Guidelines_Official.pdf',
    attachment_url: '/sample-files/sample-notes.pdf',
    created_at: '2026-10-10T09:00:00Z',
    updated_at: '2026-10-10T09:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000002',
    title: 'Submission of Sessional Marks & Practical Assessment Records for All India Trade Test (AITT)',
    slug: 'aitt-practical-records-submission',
    body: `Instructors in-charge are directed to compile and finalize continuous formative assessments and Trade Practical job logs ahead of the forthcoming All India Trade Test (AITT).

Submission Protocol:
1. Sessional marks must be verified by the Senior Technical Instructor and countersigned by the Principal.
2. Ensure individual trainee logbooks, wire-splicing job sheets, and network configuration rubrics are signed and archived.
3. Online portal entry window closes at 17:00 hrs on the final date. No late extensions will be entertained.`,
    category: 'exam',
    source_name: 'National Council for Vocational Education and Training (NCVET)',
    source_url: 'https://ncvet.gov.in',
    status: 'published',
    published_at: '2026-10-06T10:00:00Z',
    expires_at: '2026-11-06T18:00:00Z',
    is_pinned: false,
    attachment_name: 'AITT_Marksheet_Verification_Schedule.pdf',
    attachment_url: '/sample-files/sample-lab-manual.pdf',
    created_at: '2026-10-06T10:00:00Z',
    updated_at: '2026-10-06T10:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000003',
    title: 'Mandatory Workshop Safety Audit, Earth Resistance Testing & Multimeter Calibration',
    slug: 'annual-workshop-safety-calibration',
    body: `All industrial training institutes must conduct their annual safety and calibration inspection.

Scope of Inspection:
- Verification of grounding/earth pit resistance (< 2 Ohms) using certified digital Earth Testers.
- Calibration test tags on all analog/digital multimeters, oscilloscopes, and optical fusion splicers.
- Verification of operational ABC Dry Powder fire extinguishers and eye-wash safety stations.
- First-aid readiness and electrical shock treatment instructional chart display in labs.`,
    category: 'circular',
    source_name: 'State Directorate of Employment & Training',
    status: 'published',
    published_at: '2026-09-24T08:00:00Z',
    expires_at: '2026-11-24T23:59:59Z',
    is_pinned: false,
    attachment_name: 'Safety_Audit_Checklist_2026.pdf',
    attachment_url: '/sample-files/sample-notes.pdf',
    created_at: '2026-09-24T08:00:00Z',
    updated_at: '2026-09-24T08:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000004',
    title: '[Archived] Verification of Previous Academic Year Trade Certificates and Marksheets',
    slug: 'archive-marksheet-verification-2025',
    body: `Notice regarding the completion of the verification window for the previous academic batch trade certificates and marksheets. This circular has expired and is archived for institutional audit reference.`,
    category: 'circular',
    source_name: 'Examination Controller Division',
    status: 'published',
    published_at: '2026-05-15T09:00:00Z',
    expires_at: '2026-08-15T23:59:59Z',
    is_pinned: false,
    created_at: '2026-05-15T09:00:00Z',
    updated_at: '2026-05-15T09:00:00Z',
  },
];

export function isNoticeExpired(notice: Notice): boolean {
  if (!notice.expires_at) return false;
  return new Date(notice.expires_at).getTime() < Date.now();
}

export function getAllNotices(includeDrafts = false): Notice[] {
  if (includeDrafts) {
    return NOTICES_DATA;
  }
  return NOTICES_DATA.filter((n) => n.status === 'published');
}

export function getActiveNotices(): Notice[] {
  return NOTICES_DATA.filter((n) => n.status === 'published' && !isNoticeExpired(n)).sort(
    (a, b) => {
      if (a.is_pinned && !b.is_pinned) return -1;
      if (!a.is_pinned && b.is_pinned) return 1;
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    }
  );
}

export function getArchivedNotices(): Notice[] {
  return NOTICES_DATA.filter(
    (n) => n.status === 'archived' || (n.status === 'published' && isNoticeExpired(n))
  ).sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export function getNoticeBySlug(slug: string, includeDrafts = false): Notice | undefined {
  const notice = NOTICES_DATA.find((n) => n.slug.toLowerCase() === slug.toLowerCase());
  if (!notice) return undefined;
  if (!includeDrafts && notice.status !== 'published') return undefined;
  return notice;
}
