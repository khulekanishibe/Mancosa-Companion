/**
 * Module catalogue for BCom (Information & Technology Management)
 */

export interface Module {
  code: string;
  title: string;
  year: number;
  semester: 1 | 2;
  credits: number;
  programmeId: string;
  assessmentPolicyId: string;
  isGeneric: boolean;
  isCapstone?: boolean;
  description?: string;
}

export const MODULES: Module[] = [
  // Year 1
  { 
    code: 'FCP5', 
    title: 'Fundamentals of Computer Programming', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: false,
    description: 'Introduction to programming concepts using Java'
  },
  { 
    code: 'MIS5', 
    title: 'Management Information Systems', 
    year: 1, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: false,
    description: 'Overview of information systems in business'
  },
  { 
    code: 'APC5', 
    title: 'Applied Computer Programming', 
    year: 1, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: false,
    description: 'Advanced programming techniques and applications'
  },
  { 
    code: 'BIS5', 
    title: 'Business Information Systems', 
    year: 1, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_1_DEFAULT', 
    isGeneric: false,
    description: 'Information systems for business processes'
  },
  
  // Year 2
  { 
    code: 'DDM6', 
    title: 'Database Design & Management', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    description: 'Database modeling, SQL, and database administration'
  },
  { 
    code: 'SAD6', 
    title: 'Systems Analysis & Design', 
    year: 2, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    description: 'System development lifecycle and methodologies'
  },
  { 
    code: 'SITM6', 
    title: 'Strategic IT Management', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    description: 'Strategic planning and management of IT resources'
  },
  { 
    code: 'WDD6', 
    title: 'Web Development & Design', 
    year: 2, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_2_DEFAULT', 
    isGeneric: false,
    description: 'Modern web technologies and responsive design'
  },
  
  // Year 3
  { 
    code: 'ISG7', 
    title: 'Information Systems Governance', 
    year: 3, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    description: 'IT governance frameworks and compliance'
  },
  { 
    code: 'ERP7', 
    title: 'Enterprise Resource Planning', 
    year: 3, 
    semester: 1, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    description: 'ERP systems implementation and management'
  },
  { 
    code: 'BIA7', 
    title: 'Business Intelligence & Analytics', 
    year: 3, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    description: 'Data analytics and business intelligence tools'
  },
  { 
    code: 'ITPM7', 
    title: 'IT Project Management', 
    year: 3, 
    semester: 2, 
    credits: 15, 
    programmeId: 'BCOM_ITM', 
    assessmentPolicyId: 'UG_YEAR_3_DEFAULT', 
    isGeneric: false,
    isCapstone: true,
    description: 'Project management methodologies for IT projects'
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
