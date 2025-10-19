const fs = require('fs');
const path = require('path');

const jsonData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../src/data/mancosa_qualifications.json'),
    'utf-8'
  )
);

const nqfLevelMap = {
  5: 'Higher Certificate',
  6: 'Advanced Certificate',
  7: 'Undergraduate Degree',
  8: 'Postgraduate Diploma',
  9: 'Masters Degree',
  10: 'Doctoral Degree'
};

const facultyMap = {
  'Business Administration': 'Business Management',
  'Public Administration': 'Public Management',
  'Commerce': 'Business and Commerce',
  'Education': 'Education',
  'Accounting': 'Accounting and Finance',
  'Marketing': 'Marketing and Communication',
  'Human Resource': 'Human Resources',
  'Information Technology': 'Information Technology',
  'Project Management': 'Project Management',
  'Supply Chain': 'Supply Chain Management'
};

function inferFaculty(title) {
  title = title.toLowerCase();
  if (title.includes('business administration')) return 'Business Management';
  if (title.includes('public administration')) return 'Public Management';
  if (title.includes('accounting')) return 'Accounting and Finance';
  if (title.includes('marketing')) return 'Marketing and Communication';
  if (title.includes('human resource')) return 'Human Resources';
  if (title.includes('information') || title.includes('technology')) return 'Information Technology';
  if (title.includes('project management')) return 'Project Management';
  if (title.includes('supply chain')) return 'Supply Chain Management';
  if (title.includes('financial')) return 'Accounting and Finance';
  if (title.includes('entrepreneurship')) return 'Business Management';
  if (title.includes('retail')) return 'Business Management';
  if (title.includes('tourism') || title.includes('hospitality')) return 'Tourism and Hospitality';
  if (title.includes('education')) return 'Education';
  if (title.includes('coding') || title.includes('artificial intelligence')) return 'Information Technology';
  if (title.includes('digital marketing')) return 'Marketing and Communication';
  return 'Business and Commerce';
}

function generateId(title) {
  const clean = title
    .replace(/Bachelor of Commerce/gi, 'BCOM')
    .replace(/Bachelor of Business Administration/gi, 'BBA')
    .replace(/Bachelor of Public Administration/gi, 'BPA')
    .replace(/Bachelor of Education/gi, 'BED')
    .replace(/Master of Business Administration/gi, 'MBA')
    .replace(/Master of Public Administration/gi, 'MPA')
    .replace(/Master of Commerce/gi, 'MCOM')
    .replace(/Doctor of Business Administration/gi, 'DBA')
    .replace(/Postgraduate Diploma/gi, 'PGDIP')
    .replace(/Advanced Diploma/gi, 'ADIP')
    .replace(/Advanced Certificate/gi, 'ACERT')
    .replace(/Higher Certificate/gi, 'HC')
    .replace(/Honours/gi, 'HONS')
    .replace(/\s+in\s+/gi, '_')
    .replace(/\s+/g, '_')
    .replace(/[^A-Z0-9_]/gi, '')
    .toUpperCase();

  return clean;
}

function parseDuration(durationStr) {
  if (!durationStr) return 1;
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

const qualifications = jsonData.map((q, index) => {
  const level = nqfLevelMap[q.NQF_Level] || 'Undergraduate Degree';
  const id = generateId(q.Title);
  const duration = parseDuration(q.Duration);
  const faculty = inferFaculty(q.Title);

  const careerPaths = q.CareerPaths || [];

  return {
    id,
    name: q.Title,
    level,
    nqf_level: q.NQF_Level,
    saqa_id: q.SAQA_ID || 'TBD',
    total_credits: q.Credits || 120,
    duration_years: duration,
    faculty,
    description: q.ShortDescription || q.About?.substring(0, 200) || '',
    coordinator: q.AcademicProgrammeManager || undefined,
    career_outcomes: careerPaths,
    programme_url: q.ProgrammeURL,
    saqa_url: q.SAQA_QualificationURL
  };
});

const tsContent = `/**
 * MANCOSA Qualification Catalogue
 * Comprehensive database of all MANCOSA qualifications and programmes
 * Auto-generated from mancosa_qualifications.json
 */

export interface Qualification {
  id: string;
  name: string;
  level: 'Higher Certificate' | 'Advanced Certificate' | 'Undergraduate Degree' | 'Advanced Diploma' | 'Postgraduate Diploma' | 'Honours Degree' | 'Masters Degree' | 'Doctoral Degree';
  nqf_level: 5 | 6 | 7 | 8 | 9 | 10;
  saqa_id: string;
  total_credits: number;
  duration_years: number;
  faculty: string;
  description: string;
  coordinator?: string;
  school?: string;
  career_outcomes?: string[];
  entry_requirements?: string;
  programme_url?: string;
  saqa_url?: string;
}

export const QUALIFICATIONS: Qualification[] = ${JSON.stringify(qualifications, null, 2)};

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
  return Array.from(new Set(QUALIFICATIONS.map(q => q.faculty))).sort();
}

export function getAllLevels(): Qualification['level'][] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.level)));
}
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/qualifications.ts'),
  tsContent,
  'utf-8'
);

console.log(`Successfully imported ${qualifications.length} qualifications`);
console.log('\nQualifications by level:');
const byLevel = qualifications.reduce((acc, q) => {
  acc[q.level] = (acc[q.level] || 0) + 1;
  return acc;
}, {});
console.log(byLevel);

console.log('\nQualifications by faculty:');
const byFaculty = qualifications.reduce((acc, q) => {
  acc[q.faculty] = (acc[q.faculty] || 0) + 1;
  return acc;
}, {});
console.log(byFaculty);
