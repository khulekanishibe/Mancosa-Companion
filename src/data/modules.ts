/**
 * Module catalogue for BCom (Information & Technology Management)
 */

export interface PrescribedResource {
  title: string;
  isbn_ebook?: string;
  notebook_link?: string;
}

export interface Module {
  code: string;
  title: string;
  year: number;
  semester: 1 | 2;
  credits: number;
  programmeId: string;
  assessmentPolicyId: string;
  isGeneric: boolean;
  qualification?: string;
  qualificationLevel?: string;
  isCapstone?: boolean;
  description?: string;
  module_focus?: string;
  module_type?: 'Core' | 'Elective';
  osa_date_reference?: string;
  prescribed_resources?: PrescribedResource[];
  notebook_link?: string;
}

export const MODULES: Module[] = [
  // Year 1, Semester 1
  { 
    code: 'IBM5', 
    title: 'Introduction to Business Management', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Business Foundation',
    module_type: 'Core',
    description: 'Fundamental principles of business management and organizational behavior',
    prescribed_resources: [
      {
        title: 'Contemporary Management. Twelfth Edition',
        isbn_ebook: '9781260735154'
      },
      {
        title: 'Management Principles. Seventh Edition',
        isbn_ebook: '9781485131007'
      }
    ]
  },
  { 
    code: 'FCP5', 
    title: 'Fundamentals of Computer Programming', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical Skill (Java/OOP)',
    module_type: 'Core',
    osa_date_reference: '2024-05-24',
    description: 'Develop algorithms for computer problems; convert algorithms into Object Oriented Programmatic solutions (Java); determine correctness of programs',
    prescribed_resources: [
      {
        title: 'Java Programming. Tenth Edition',
        isbn_ebook: '9781337397070'
      }
    ]
  },
  { 
    code: 'ANT5', 
    title: 'Analytical Techniques', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Quantitative/Statistical Analysis',
    module_type: 'Core',
    osa_date_reference: '2024-05-27',
    description: 'Understand quantitative techniques; perform statistical analysis; manipulate collected data; prepare and interpret statistical reports',
    prescribed_resources: [
      {
        title: 'Statistics For Business And Economics. Fifth Edition',
        isbn_ebook: '9781473768451'
      }
    ]
  },
  { 
    code: 'MES5', 
    title: 'Microeconomic Essentials', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Economic Foundation',
    module_type: 'Core',
    osa_date_reference: '2024-05-29',
    description: 'Understand microeconomics and scarcity; analyze market forces of demand/supply; understand price elasticity, production, and cost theory',
    prescribed_resources: [
      {
        title: 'Economics for South African Students. Sixth Edition',
        isbn_ebook: '9780627037054'
      }
    ]
  },

  // Year 2, Semester 1
  { 
    code: 'PITM6', 
    title: 'Principles of Information Technology Management', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'IT Management Theory',
    module_type: 'Core',
    description: 'Strategic IT management, IT governance, and organizational alignment',
    prescribed_resources: [
      {
        title: 'Information Technology for Management. Twelfth Edition',
        isbn_ebook: '9781119702900'
      }
    ]
  },
  { 
    code: 'DDM6', 
    title: 'Database Design and Management', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical/Application (SQL)',
    module_type: 'Core',
    description: 'Discuss principles of Database Management Systems; normalize organizational data; write single queries using Structured Query Language (SQL); outline data security frameworks',
    prescribed_resources: [
      {
        title: 'Database Principles: Fundamentals Of Design. Third Edition',
        isbn_ebook: '9781473768055'
      }
    ]
  },
  { 
    code: 'MAC6', 
    title: 'Management Accounting', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Accounting/Finance',
    module_type: 'Core',
    description: 'Classify costs (direct, indirect, fixed, variable); calculate stock value; determine optimal costing methods (Absorption vs. Marginal); compute Breakeven Analysis',
    prescribed_resources: [
      {
        title: 'Fundamentals of Cost and Management Accounting. Ninth Edition',
        isbn_ebook: '9780639009759'
      }
    ]
  },
  { 
    code: 'ABS6', 
    title: 'Advanced Business Statistics', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Quantitative/Statistical Analysis',
    module_type: 'Core',
    description: 'Perform statistical analysis on business data; manipulate collected data for management decisions; prepare and interpret statistical reports; assess validity of statistical findings',
    prescribed_resources: [
      {
        title: 'Statistics For Business And Economics. Fifth Edition',
        isbn_ebook: '9781473768451'
      }
    ]
  },

  // Year 2, Semester 2
  { 
    code: 'PPM6', 
    title: 'Principles of Project Management', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Project Management',
    module_type: 'Core',
    description: 'Project management methodologies, planning, execution, and control',
    prescribed_resources: [
      {
        title: 'Successful Project Management. Second Edition',
        isbn_ebook: '9781473780422'
      }
    ],
    notebook_link: 'https://notebooklm.google.com/notebook/ff3cfdbb-61d4-47f2-9659-1eeeffdaad9c'
  },
  { 
    code: 'SITM6', 
    title: 'Strategic Information Technology Management', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'IT Strategy / Planning',
    module_type: 'Core',
    description: 'Strategic planning and management of IT resources',
    prescribed_resources: [
      {
        title: 'Information Technology for Management. Twelfth Edition',
        isbn_ebook: '9781119702900'
      }
    ],
    notebook_link: 'https://notebooklm.google.com/notebook/3fc49705-b188-4196-aa99-59617bbee9e8'
  },
  { 
    code: 'IFS6', 
    title: 'Information Systems', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical/Application',
    module_type: 'Core',
    description: 'Information systems in business processes and decision-making',
    prescribed_resources: [
      {
        title: 'Information Technology for Management. Twelfth Edition',
        isbn_ebook: '9781119702900'
      }
    ],
    notebook_link: 'https://notebooklm.google.com/notebook/89ef2256-5969-4bd7-89b9-d0e52db0f53e'
  },
  { 
    code: 'PEC6', 
    title: 'Principles of E-Commerce', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical/Application',
    module_type: 'Core',
    description: 'E-commerce strategies, technologies, and business models',
    prescribed_resources: [
      {
        title: 'E-Commerce: Business, Technology, Society. Sixteenth Edition',
        isbn_ebook: '9780135727751'
      }
    ],
    notebook_link: 'https://notebooklm.google.com/notebook/d05b8126-2f1d-4e97-80e6-9dc0c2401e52'
  },

  // Year 3, Semester 1
  { 
    code: 'PSE7', 
    title: 'Principles of Software Engineering', 
    year: 3, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical/Methodology',
    module_type: 'Core',
    description: 'Software development methodologies, testing, and quality assurance',
    prescribed_resources: [
      {
        title: 'Engineering Software Products: An Introduction... First Edition',
        isbn_ebook: '9781292376349'
      }
    ]
  },
  { 
    code: 'AUD7', 
    title: 'Auditing', 
    year: 3, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: true,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Compliance/Finance',
    module_type: 'Core',
    description: 'IT auditing, compliance, and internal controls',
    prescribed_resources: [
      {
        title: 'Auditing Notes for South African Students, Eleventh Edition',
        isbn_ebook: '9780639008622'
      }
    ]
  },
  { 
    code: 'SAD7', 
    title: 'Systems Analysis and Design', 
    year: 3, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    qualification: 'BCom (Information & Technology Management)',
    qualificationLevel: 'Undergraduate',
    module_focus: 'Technical/Application',
    module_type: 'Core',
    description: 'Understand the Systems Development Life Cycle (SDLC); explain concepts used in structured analysis and design; utilize tools for analysis, design, and development; assist in object-oriented system analysis and design',
    prescribed_resources: [
      {
        title: 'Systems Analysis and Design. Tenth Edition',
        isbn_ebook: '9780134785554'
      }
    ]
  }
];

export function getModuleByCode(code: string): Module | undefined {
  return MODULES.find(m => m.code === code);
}

export function getModulesByYear(year: number): Module[] {
  return MODULES.filter(m => m.year === year);
}

export function getModulesBySemester(year: number, semester: 1 | 2): Module[] {
  return MODULES.filter(m => m.year === year && m.semester === semester);
}

export function searchModules(query: string): Module[] {
  const lowerQuery = query.toLowerCase();
  return MODULES.filter(m => 
    m.code.toLowerCase().includes(lowerQuery) ||
    m.title.toLowerCase().includes(lowerQuery)
  );
}

export function getModulesByQualification(qualificationId: string): Module[] {
  // Map qualification IDs to programme IDs
  const qualificationMap: Record<string, string[]> = {
    'bcom-itm': ['BCOM_ITM'],
    'bcom-accounting': ['BCOM_ACC'],
    'bba': ['BBA'],
    'bpa': ['BPA'],
    // Add more mappings as needed
  };
  
  const programmeIds = qualificationMap[qualificationId.toLowerCase()] || [];
  return MODULES.filter(module => 
    programmeIds.includes(module.programmeId)
  );
}
