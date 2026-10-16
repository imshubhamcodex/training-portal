import type { ResourceCategory } from '../../types';

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    id: 'cat-lesson-plans',
    slug: 'lesson-plans',
    name: 'Lesson Plans',
    description: 'Structured 4-step instructional plans following NIMI & DGT guidelines for theory classes.',
    icon: 'file-text',
    resource_type: 'lesson-plan',
  },
  {
    id: 'cat-demonstration-plans',
    slug: 'demonstration-plans',
    name: 'Demonstration Plans',
    description: 'Step-by-step practical workshop demonstration guides for instructors and master trainers.',
    icon: 'presentation',
    resource_type: 'demonstration-plan',
  },
  {
    id: 'cat-lab-manuals',
    slug: 'lab-manuals',
    name: 'Lab Manuals & Practical Guides',
    description: 'Hands-on practical job sheets, wiring guides, diagnostic procedures, and safety checklists.',
    icon: 'wrench',
    resource_type: 'lab-manual',
  },
  {
    id: 'cat-notes',
    slug: 'notes',
    name: 'Subject Notes & Handouts',
    description: 'Comprehensive study materials, question banks, formulae sheets, and topic overviews.',
    icon: 'book-open',
    resource_type: 'notes',
  },
  {
    id: 'cat-videos-images',
    slug: 'videos-images',
    name: 'Videos & Technical Diagrams',
    description: 'High-resolution schematic diagrams, block diagrams, animated workflows, and video guides.',
    icon: 'image',
    resource_type: 'diagram',
  },
];
