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
  // Year 1 - Programming
  {
    id: 'READ-JAVA-PROG',
    moduleCodes: ['FCP5', 'APC5'],
    type: 'PRESCRIBED',
    title: 'Java Programming',
    authors: 'Farrell, J.',
    edition: '10th',
    year: 2023,
    publisher: 'Cengage'
  },
  {
    id: 'READ-INTRO-PROG',
    moduleCodes: ['FCP5'],
    type: 'RECOMMENDED',
    title: 'Introduction to Programming Using Java',
    authors: 'Eck, D.J.',
    edition: '9th',
    year: 2022,
    publisher: 'Self-published'
  },
  
  // Year 1 - MIS
  {
    id: 'READ-MIS-ESSENTIALS',
    moduleCodes: ['MIS5', 'BIS5'],
    type: 'PRESCRIBED',
    title: 'Management Information Systems',
    authors: 'Laudon, K.C. & Laudon, J.P.',
    edition: '17th',
    year: 2022,
    publisher: 'Pearson'
  },
  
  // Year 2 - Database
  {
    id: 'READ-DATABASE-SYSTEMS',
    moduleCodes: ['DDM6'],
    type: 'PRESCRIBED',
    title: 'Database Systems: Design, Implementation, & Management',
    authors: 'Coronel, C. & Morris, S.',
    edition: '13th',
    year: 2019,
    publisher: 'Cengage'
  },
  {
    id: 'READ-SQL-COOKBOOK',
    moduleCodes: ['DDM6'],
    type: 'RECOMMENDED',
    title: 'SQL Cookbook',
    authors: 'Molinaro, A.',
    edition: '2nd',
    year: 2021,
    publisher: "O'Reilly"
  },
  
  // Year 2 - SAD
  {
    id: 'READ-SYSTEMS-ANALYSIS',
    moduleCodes: ['SAD6'],
    type: 'PRESCRIBED',
    title: 'Systems Analysis and Design',
    authors: 'Tilley, S. & Rosenblatt, H.',
    edition: '12th',
    year: 2020,
    publisher: 'Cengage'
  },
  
  // Year 2 - Strategic IT
  {
    id: 'READ-STRATEGIC-IT',
    moduleCodes: ['SITM6'],
    type: 'PRESCRIBED',
    title: 'Strategic Management of Information Systems',
    authors: 'Peppard, J. & Ward, J.',
    edition: '5th',
    year: 2016,
    publisher: 'Wiley'
  },
  
  // Year 2 - Web Development
  {
    id: 'READ-WEB-DESIGN',
    moduleCodes: ['WDD6'],
    type: 'PRESCRIBED',
    title: 'HTML and CSS: Design and Build Websites',
    authors: 'Duckett, J.',
    year: 2011,
    publisher: 'Wiley'
  },
  {
    id: 'READ-JS-DEFINITIVE',
    moduleCodes: ['WDD6'],
    type: 'RECOMMENDED',
    title: 'JavaScript: The Definitive Guide',
    authors: 'Flanagan, D.',
    edition: '7th',
    year: 2020,
    publisher: "O'Reilly"
  },
  
  // Year 3 - Governance
  {
    id: 'READ-IT-GOVERNANCE',
    moduleCodes: ['ISG7'],
    type: 'PRESCRIBED',
    title: 'IT Governance: An International Guide to Data Security and ISO27001/ISO27002',
    authors: 'Calder, A.',
    edition: '6th',
    year: 2016,
    publisher: 'Kogan Page'
  },
  
  // Year 3 - ERP
  {
    id: 'READ-ERP-SYSTEMS',
    moduleCodes: ['ERP7'],
    type: 'PRESCRIBED',
    title: 'Enterprise Resource Planning',
    authors: 'Monk, E. & Wagner, B.',
    edition: '3rd',
    year: 2013,
    publisher: 'Cengage'
  },
  
  // Year 3 - BI & Analytics
  {
    id: 'READ-BI-DATA-WAREHOUSE',
    moduleCodes: ['BIA7'],
    type: 'PRESCRIBED',
    title: 'Business Intelligence, Analytics, and Data Science',
    authors: 'Sharda, R., Delen, D. & Turban, E.',
    edition: '4th',
    year: 2018,
    publisher: 'Pearson'
  },
  
  // Year 3 - Project Management
  {
    id: 'READ-IT-PROJECT-MGMT',
    moduleCodes: ['ITPM7'],
    type: 'PRESCRIBED',
    title: 'Information Technology Project Management',
    authors: 'Schwalbe, K.',
    edition: '9th',
    year: 2019,
    publisher: 'Cengage'
  },
  {
    id: 'READ-PMBOK',
    moduleCodes: ['ITPM7'],
    type: 'RECOMMENDED',
    title: 'A Guide to the Project Management Body of Knowledge (PMBOK Guide)',
    authors: 'Project Management Institute',
    edition: '7th',
    year: 2021,
    publisher: 'PMI'
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
