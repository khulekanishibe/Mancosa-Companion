/**
 * Support resources and useful links
 */

export interface SupportResource {
  id: string;
  category: string;
  name: string;
  url?: string;
  details?: string;
  icon?: string;
}

export const RESOURCES: SupportResource[] = [
  // Academic Support
  {
    id: 'RES-FRESHDESK',
    category: 'Academic Support',
    name: 'Student Services Desk',
    url: 'https://www.mancosa.co.za/student-services-support-desk/',
    details: 'Get help with academic queries, assessments, and general support'
  },
  {
    id: 'RES-LIBRARY',
    category: 'Academic Support',
    name: 'Digital Library',
    url: 'https://www.mancosa.co.za/library/',
    details: 'Access e-books, journals, and academic databases'
  },
  {
    id: 'RES-WRITING-CENTRE',
    category: 'Academic Support',
    name: 'Writing Centre',
    details: 'Support for academic writing, referencing, and research skills'
  },
  
  // Platforms
  {
    id: 'RES-CONNECT',
    category: 'Learning Platform',
    name: 'MANCOSA Connect',
    url: 'https://mancosaconnect.ac.za',
    details: 'Main learning management system for modules and assessments'
  },
  {
    id: 'RES-STUDENT-PORTAL',
    category: 'Learning Platform',
    name: 'Student Portal',
    url: 'https://students.mancosa.ac.za',
    details: 'Access grades, registration, and administrative services'
  },
  
  // Technical Resources
  {
    id: 'RES-GITHUB',
    category: 'Development Tools',
    name: 'GitHub Student Pack',
    url: 'https://education.github.com/pack',
    details: 'Free developer tools and resources for students'
  },
  {
    id: 'RES-VSCODE',
    category: 'Development Tools',
    name: 'Visual Studio Code',
    url: 'https://code.visualstudio.com/',
    details: 'Recommended code editor for programming modules'
  },
  {
    id: 'RES-STACK-OVERFLOW',
    category: 'Development Tools',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    details: 'Programming Q&A community'
  },
  
  // Career & Professional
  {
    id: 'RES-LINKEDIN-LEARNING',
    category: 'Professional Development',
    name: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/',
    details: 'Professional development courses and certifications'
  },
  {
    id: 'RES-COURSERA',
    category: 'Professional Development',
    name: 'Coursera',
    url: 'https://www.coursera.org/',
    details: 'Additional online courses from top universities'
  },
  
  // Policies & Documentation
  {
    id: 'RES-STUDENT-RULES',
    category: 'Policies',
    name: 'Student Rules & Regulations',
    url: 'https://www.mancosa.co.za/wp-content/uploads/2023/02/Student-Rules-and-Regulations-2023.pdf',
    details: 'Official MANCOSA academic policies'
  },
  {
    id: 'RES-ASSESSMENT-POLICY',
    category: 'Policies',
    name: 'Assessment Policy',
    details: 'Guidelines for formative and summative assessments'
  },
  
  // Well-being
  {
    id: 'RES-COUNSELLING',
    category: 'Student Well-being',
    name: 'Student Counselling',
    details: 'Confidential counselling and mental health support'
  },
  {
    id: 'RES-DISABILITY-SUPPORT',
    category: 'Student Well-being',
    name: 'Disability Support Services',
    details: 'Accommodations and support for students with disabilities'
  }
];

export function getResourcesByCategory(category: string): SupportResource[] {
  return RESOURCES.filter(r => r.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(RESOURCES.map(r => r.category)));
}

export function searchResources(query: string): SupportResource[] {
  const lowerQuery = query.toLowerCase();
  return RESOURCES.filter(r =>
    r.name.toLowerCase().includes(lowerQuery) ||
    r.category.toLowerCase().includes(lowerQuery) ||
    r.details?.toLowerCase().includes(lowerQuery)
  );
}
