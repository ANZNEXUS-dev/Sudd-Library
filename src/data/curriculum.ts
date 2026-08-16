export type SubjectGroup = 'stem' | 'language' | 'humanities';
export type ResourceType = 'notes' | 'schemes' | 'past-papers' | 'holiday-packages';

export interface Subject {
  slug: string;
  name: string;
  group: SubjectGroup;
}

export interface ClassLevel {
  slug: string;
  name: string;
  // Shown next to Past Papers where a national exam applies (P8, S4).
  examLabel?: string;
  examBody?: string;
  subjects: Subject[];
}

export interface Level {
  slug: 'primary' | 'secondary' | 'aes';
  name: string;
  description: string;
  classes: ClassLevel[];
}

export const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
  notes: 'Lesson Notes',
  schemes: 'Schemes of Work',
  'past-papers': 'Past Papers',
  'holiday-packages': 'Holiday Packages',
};

export const RESOURCE_TYPE_ORDER: ResourceType[] = ['notes', 'schemes', 'past-papers', 'holiday-packages'];

const primarySubjects: Subject[] = [
  { slug: 'mathematics', name: 'Mathematics', group: 'stem' },
  { slug: 'english', name: 'English', group: 'language' },
  { slug: 'science', name: 'General Science', group: 'stem' },
  { slug: 'social-studies', name: 'Social Studies', group: 'humanities' },
  { slug: 'cre', name: 'CRE', group: 'humanities' },
  { slug: 'ire', name: 'IRE', group: 'humanities' },
  { slug: 'citizenship', name: 'Citizenship Education', group: 'humanities' },
  { slug: 'agriculture', name: 'Agriculture', group: 'humanities' },
  { slug: 'ict', name: 'ICT', group: 'stem' },
];

const secondarySubjects: Subject[] = [
  { slug: 'mathematics', name: 'Mathematics', group: 'stem' },
  { slug: 'english', name: 'English', group: 'language' },
  { slug: 'biology', name: 'Biology', group: 'stem' },
  { slug: 'chemistry', name: 'Chemistry', group: 'stem' },
  { slug: 'physics', name: 'Physics', group: 'stem' },
  { slug: 'geography', name: 'Geography', group: 'humanities' },
  { slug: 'history', name: 'History', group: 'humanities' },
  { slug: 'citizenship', name: 'Citizenship Education', group: 'humanities' },
  { slug: 'commerce', name: 'Commerce', group: 'humanities' },
  { slug: 'agriculture', name: 'Agriculture', group: 'humanities' },
  { slug: 'ict', name: 'ICT', group: 'stem' },
  { slug: 'cre', name: 'CRE', group: 'humanities' },
  { slug: 'ire', name: 'IRE', group: 'humanities' },
  { slug: 'entrepreneurship', name: 'Entrepreneurship', group: 'humanities' },
];

function primaryClass(n: number, examLabel?: string, examBody?: string): ClassLevel {
  return { slug: `p${n}`, name: `Primary ${n}`, examLabel, examBody, subjects: primarySubjects };
}

function secondaryClass(n: number, examLabel?: string, examBody?: string): ClassLevel {
  return { slug: `s${n}`, name: `Senior ${n}`, examLabel, examBody, subjects: secondarySubjects };
}

export const CURRICULUM: Level[] = [
  {
    slug: 'primary',
    name: 'Primary',
    description: 'P1 to P8 — notes, schemes of work, and CPE past papers.',
    classes: [
      primaryClass(1),
      primaryClass(2),
      primaryClass(3),
      primaryClass(4),
      primaryClass(5),
      primaryClass(6),
      primaryClass(7),
      primaryClass(8, 'CPE', 'SSNEC'),
    ],
  },
  {
    slug: 'secondary',
    name: 'Secondary',
    description: 'S1 to S4 — notes, schemes of work, and CSE past papers.',
    classes: [
      secondaryClass(1),
      secondaryClass(2),
      secondaryClass(3),
      secondaryClass(4, 'CSE', 'SSNEC'),
    ],
  },
  {
    slug: 'aes',
    name: 'AES',
    description: 'Alternative Education System — accelerated learning and adult literacy.',
    classes: [
      {
        slug: 'alp',
        name: 'Accelerated Learning Program',
        subjects: [
          { slug: 'literacy', name: 'Literacy', group: 'language' },
          { slug: 'numeracy', name: 'Numeracy', group: 'stem' },
          { slug: 'life-skills', name: 'Life Skills', group: 'humanities' },
          { slug: 'social-studies', name: 'Social Studies', group: 'humanities' },
        ],
      },
      {
        slug: 'adult-literacy',
        name: 'Adult Literacy & Vocational',
        subjects: [
          { slug: 'functional-literacy', name: 'Functional Literacy', group: 'language' },
          { slug: 'numeracy', name: 'Numeracy', group: 'stem' },
          { slug: 'vocational-skills', name: 'Vocational Skills', group: 'humanities' },
        ],
      },
    ],
  },
];

export function getLevel(slug: string) {
  return CURRICULUM.find((l) => l.slug === slug);
}

export function getClass(levelSlug: string, classSlug: string) {
  return getLevel(levelSlug)?.classes.find((c) => c.slug === classSlug);
}

export function getSubject(levelSlug: string, classSlug: string, subjectSlug: string) {
  return getClass(levelSlug, classSlug)?.subjects.find((s) => s.slug === subjectSlug);
}
