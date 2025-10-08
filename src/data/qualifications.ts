/**
 * MANCOSA Qualification Catalogue
 * Comprehensive database of all MANCOSA qualifications and programmes
 */

export interface Qualification {
  id: string;
  name: string;
  level: 'Higher Certificate' | 'Undergraduate Degree' | 'Postgraduate Diploma' | 'Honours Degree' | 'Masters Degree';
  nqf_level: 5 | 7 | 8 | 9;
  saqa_id: string;
  total_credits: number;
  duration_years: number;
  faculty: string;
  description: string;
  career_outcomes?: string[];
  entry_requirements?: string;
}

export const QUALIFICATIONS: Qualification[] = [
  // Higher Certificates (NQF Level 5)
  {
    id: 'HC_BM',
    name: 'Higher Certificate in Business Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '96746',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    description: 'Foundation qualification providing essential business management skills and knowledge',
    career_outcomes: [
      'Junior Management Positions',
      'Administrative Roles',
      'Business Support Functions'
    ],
    entry_requirements: 'Grade 12 or equivalent'
  },
  {
    id: 'HC_PM',
    name: 'Higher Certificate in Project Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '97198',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    description: 'Specialized certificate focusing on project management fundamentals and practices',
    career_outcomes: [
      'Project Coordinator',
      'Assistant Project Manager',
      'Project Administrator'
    ],
    entry_requirements: 'Grade 12 or equivalent'
  },

  // Undergraduate Degrees (NQF Level 7)
  {
    id: 'BCOM_ITM',
    name: 'Bachelor of Commerce in Information and Technology Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '71889',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Information Technology',
    description: 'Comprehensive degree combining business acumen with IT management skills, preparing graduates for leadership roles in technology-driven organizations',
    career_outcomes: [
      'IT Manager',
      'Systems Analyst',
      'Database Administrator',
      'IT Project Manager',
      'Business Analyst',
      'Software Development Manager'
    ],
    entry_requirements: 'National Senior Certificate with Bachelor degree entry or equivalent'
  },
  {
    id: 'BCOM_ACC',
    name: 'Bachelor of Commerce in Accounting',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '110219',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Accounting and Finance',
    description: 'Professional accounting qualification covering financial accounting, management accounting, and auditing',
    career_outcomes: [
      'Accountant',
      'Financial Manager',
      'Management Accountant',
      'Auditor',
      'Tax Consultant'
    ],
    entry_requirements: 'National Senior Certificate with Bachelor degree entry, including Mathematics or Accounting'
  },
  {
    id: 'BBA',
    name: 'Bachelor of Business Administration',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '62116',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Business Management',
    description: 'Versatile business degree covering all functional areas of business management',
    career_outcomes: [
      'Business Manager',
      'Operations Manager',
      'Marketing Manager',
      'Human Resources Manager',
      'Entrepreneur'
    ],
    entry_requirements: 'National Senior Certificate with Bachelor degree entry or equivalent'
  },

  // Postgraduate Diplomas (NQF Level 8)
  {
    id: 'PGDIP_ITM',
    name: 'Postgraduate Diploma in Information and Technology Management',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '110958',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Information Technology',
    description: 'Advanced IT management qualification focusing on information security, governance, and strategic IT planning',
    career_outcomes: [
      'Senior IT Manager',
      'IT Security Manager',
      'Chief Information Officer',
      'IT Governance Specialist',
      'Enterprise Architect'
    ],
    entry_requirements: 'Relevant undergraduate degree or equivalent professional qualification'
  },

  // Honours Degrees (NQF Level 8)
  {
    id: 'BBA_HONS',
    name: 'Bachelor of Business Administration Honours',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '97881',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    description: 'Advanced business management qualification with research component',
    career_outcomes: [
      'Senior Business Manager',
      'Strategy Consultant',
      'Business Development Manager',
      'Research Analyst'
    ],
    entry_requirements: 'Relevant undergraduate degree with minimum 60% average'
  },

  // Masters Degrees (NQF Level 9)
  {
    id: 'MBA',
    name: 'Master of Business Administration',
    level: 'Masters Degree',
    nqf_level: 9,
    saqa_id: 'TBD',
    total_credits: 180,
    duration_years: 2,
    faculty: 'Business Management',
    description: 'Premier business leadership qualification developing strategic thinking and executive management capabilities',
    career_outcomes: [
      'Chief Executive Officer',
      'Chief Operating Officer',
      'Senior Executive',
      'Management Consultant',
      'Director'
    ],
    entry_requirements: 'Honours degree or equivalent, plus relevant work experience'
  }
];

export function getQualificationById(id: string): Qualification | undefined {
  return QUALIFICATIONS.find(q => q.id === id);
}

export function getQualificationsByLevel(level: Qualification['level']): Qualification[] {
  return QUALIFICATIONS.filter(q => q.level === level);
}

export function getQualificationsByNQF(nqf_level: number): Qualification[] {
  return QUALIFICATIONS.filter(q => q.nqf_level === nqf_level);
}

export function getQualificationsByFaculty(faculty: string): Qualification[] {
  return QUALIFICATIONS.filter(q => q.faculty === faculty);
}

export function searchQualifications(query: string): Qualification[] {
  const lowerQuery = query.toLowerCase();
  return QUALIFICATIONS.filter(q =>
    q.name.toLowerCase().includes(lowerQuery) ||
    q.description.toLowerCase().includes(lowerQuery) ||
    q.faculty.toLowerCase().includes(lowerQuery)
  );
}

export function getAllFaculties(): string[] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.faculty)));
}

export function getAllLevels(): Qualification['level'][] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.level)));
}
