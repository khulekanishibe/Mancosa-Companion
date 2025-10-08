/**
 * Reading list for BCom ITM modules
 */

export interface Reading {
  id: string;
  moduleCodes: string[];
  type: 'PRESCRIBED' | 'RECOMMENDED';
  title: string;
  authors: string;
  edition?: string;
  year?: number;
  publisher?: string;
  isbn?: string;
}

export const READINGS: Reading[] = [
  // Year 1, Semester 1 - Business Management
  {
    id: 'READ-CONTEMP-MGMT',
    moduleCodes: ['IBM5'],
    type: 'PRESCRIBED',
    title: 'Contemporary Management',
    authors: 'Jones, G.R. & George, J.M.',
    edition: '12th',
    year: 2022,
    publisher: 'McGraw-Hill',
    isbn: '9781260735154'
  },
  {
    id: 'READ-MGMT-PRINCIPLES',
    moduleCodes: ['IBM5'],
    type: 'PRESCRIBED',
    title: 'Management Principles',
    authors: 'Smit, P.J. et al.',
    edition: '7th',
    year: 2020,
    publisher: 'Juta',
    isbn: '9781485131007'
  },
  
  // Year 1, Semester 1 - Programming
  {
    id: 'READ-JAVA-PROG',
    moduleCodes: ['FCP5'],
    type: 'PRESCRIBED',
    title: 'Java Programming',
    authors: 'Farrell, J.',
    edition: '10th',
    year: 2023,
    publisher: 'Cengage',
    isbn: '9781337397070'
  },
  
  // Year 1, Semester 1 - Statistics
  {
    id: 'READ-STATS-BUS-ECON',
    moduleCodes: ['ANT5', 'ABS6'],
    type: 'PRESCRIBED',
    title: 'Statistics For Business And Economics',
    authors: 'Anderson, D.R., Sweeney, D.J. & Williams, T.A.',
    edition: '5th',
    year: 2020,
    publisher: 'Cengage',
    isbn: '9781473768451'
  },
  
  // Year 1, Semester 1 - Economics
  {
    id: 'READ-ECON-SA-STUDENTS',
    moduleCodes: ['MES5'],
    type: 'PRESCRIBED',
    title: 'Economics for South African Students',
    authors: 'Mohr, P. & Fourie, L.',
    edition: '6th',
    year: 2020,
    publisher: 'Van Schaik',
    isbn: '9780627037054'
  },
  
  // Year 2, Semester 1 - IT Management
  {
    id: 'READ-IT-MGMT',
    moduleCodes: ['PITM6', 'SITM6', 'IFS6'],
    type: 'PRESCRIBED',
    title: 'Information Technology for Management',
    authors: 'Turban, E., Pollard, C. & Wood, G.',
    edition: '12th',
    year: 2021,
    publisher: 'Wiley',
    isbn: '9781119702900'
  },
  
  // Year 2, Semester 1 - Database
  {
    id: 'READ-DATABASE-PRINCIPLES',
    moduleCodes: ['DDM6'],
    type: 'PRESCRIBED',
    title: 'Database Principles: Fundamentals Of Design',
    authors: 'Coronel, C., Morris, S. & Rob, P.',
    edition: '3rd',
    year: 2019,
    publisher: 'Cengage',
    isbn: '9781473768055'
  },
  
  // Year 2, Semester 1 - Management Accounting
  {
    id: 'READ-COST-MGMT-ACCT',
    moduleCodes: ['MAC6'],
    type: 'PRESCRIBED',
    title: 'Fundamentals of Cost and Management Accounting',
    authors: 'De Villiers, R.R. & Stainbank, L.J.',
    edition: '9th',
    year: 2020,
    publisher: 'LexisNexis',
    isbn: '9780639009759'
  },
  
  // Year 2, Semester 2 - Project Management
  {
    id: 'READ-PROJECT-MGMT',
    moduleCodes: ['PPM6'],
    type: 'PRESCRIBED',
    title: 'Successful Project Management',
    authors: 'Lock, D. & Wagner, R.',
    edition: '2nd',
    year: 2019,
    publisher: 'Routledge',
    isbn: '9781473780422'
  },
  
  // Year 2, Semester 2 - E-Commerce
  {
    id: 'READ-ECOMMERCE',
    moduleCodes: ['PEC6'],
    type: 'PRESCRIBED',
    title: 'E-Commerce: Business, Technology, Society',
    authors: 'Laudon, K.C. & Traver, C.G.',
    edition: '16th',
    year: 2021,
    publisher: 'Pearson',
    isbn: '9780135727751'
  },
  
  // Year 3, Semester 1 - Software Engineering
  {
    id: 'READ-SOFTWARE-ENG',
    moduleCodes: ['PSE7'],
    type: 'PRESCRIBED',
    title: 'Engineering Software Products: An Introduction to Modern Software Engineering',
    authors: 'Sommerville, I.',
    edition: '1st',
    year: 2020,
    publisher: 'Pearson',
    isbn: '9781292376349'
  },
  
  // Year 3, Semester 1 - Auditing
  {
    id: 'READ-AUDITING-SA',
    moduleCodes: ['AUD7'],
    type: 'PRESCRIBED',
    title: 'Auditing Notes for South African Students',
    authors: 'Marx, B. et al.',
    edition: '11th',
    year: 2021,
    publisher: 'LexisNexis',
    isbn: '9780639008622'
  },
  
  // Year 3, Semester 1 - Systems Analysis
  {
    id: 'READ-SYSTEMS-ANALYSIS-DESIGN',
    moduleCodes: ['SAD7'],
    type: 'PRESCRIBED',
    title: 'Systems Analysis and Design',
    authors: 'Kendall, K.E. & Kendall, J.E.',
    edition: '10th',
    year: 2019,
    publisher: 'Pearson',
    isbn: '9780134785554'
  }
];

export function getReadingsByModule(moduleCode: string): Reading[] {
  return READINGS.filter(r => r.moduleCodes.includes(moduleCode));
}

export function getReadingsByType(type: 'PRESCRIBED' | 'RECOMMENDED'): Reading[] {
  return READINGS.filter(r => r.type === type);
}

export function searchReadings(query: string): Reading[] {
  const lowerQuery = query.toLowerCase();
  return READINGS.filter(r =>
    r.title.toLowerCase().includes(lowerQuery) ||
    r.authors.toLowerCase().includes(lowerQuery) ||
    r.moduleCodes.some(code => code.toLowerCase().includes(lowerQuery))
  );
}
