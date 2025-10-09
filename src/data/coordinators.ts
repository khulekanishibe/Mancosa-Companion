export interface Coordinator {
  name: string;
  school: string;
  qualifications: string[];
}

export interface ContactInfo {
  phone: string;
  ticketUrl: string;
}

export const CONTACT_INFO: ContactInfo = {
  phone: "087 3512 833",
  ticketUrl: "https://mancosa.freshdesk.com/support/tickets/new"
};

export const COORDINATORS: Coordinator[] = [
  {
    name: "Zwelihle Mkhize & Sithokozile Mbhele",
    school: "School of Accounting, Finance, and Tax Administration",
    qualifications: [
      "Higher Certificate in Tax Administration",
      "Higher Certificate in Accounting",
      "Advanced Certificate in Financial Planning",
      "Bachelor of Commerce in Financial Management",
      "Bachelor of Commerce in Accounting"
    ]
  },
  {
    name: "Siphesihle Ngubane & Zwelihle Mkhize",
    school: "School of Supply Chain Management",
    qualifications: [
      "Higher Certificate in Supply Chain Management",
      "Bachelor of Commerce in Retail Management",
      "Bachelor of Commerce in Supply Chain Management",
      "Bachelor of Commerce Honours in Supply Chain Management"
    ]
  },
  {
    name: "Bandile Gqala & Cheri Nieman",
    school: "School of Business Excellence",
    qualifications: [
      "Higher Certificate in Business Management",
      "Advanced Certificate in Management Studies",
      "Advanced Diploma in Business Management",
      "Advanced Diploma in Business Analysis",
      "Bachelor of Commerce in International Business",
      "Bachelor of Business Administration",
      "Postgraduate Diploma in Business Management",
      "Bachelor of Business Administration Honours",
      "Master of Business Administration"
    ]
  },
  {
    name: "Levina Ishwar & Priyaloshnee Naidoo",
    school: "School of Human Resource Management",
    qualifications: [
      "Higher Certificate in Human Resource Management",
      "Bachelor of Commerce in Human Resource Management",
      "Bachelor of Commerce Honours Human Resource Management",
      "Higher Certificate in Paralegal Studies"
    ]
  },
  {
    name: "Anama Ngcobo",
    school: "School of Education",
    qualifications: [
      "Bachelor of Education in Senior Phase and Further Education and Training Teaching",
      "Postgraduate Certificate in Education in Further Education and Training Teaching",
      "Bachelor of Education Honours in Leadership and Management",
      "Postgraduate Diploma in Educational Management",
      "Master of Education in Educational Leadership and Management"
    ]
  },
  {
    name: "Sipho Hlatshwayo & Zizipho Gamnca",
    school: "School of Project Management",
    qualifications: [
      "Higher Certificate in Project Management",
      "Bachelor of Commerce in Project Management",
      "Postgraduate Diploma in Risk Management",
      "Postgraduate Diploma in Project Management"
    ]
  },
  {
    name: "Thabisile Nala",
    school: "School of Information and Digital Technology",
    qualifications: [
      "Higher Certificate in Information Technology",
      "Bachelor of Commerce in Information and Technology Management",
      "Postgraduate Diploma in Information and Technology Management",
      "Postgraduate Diploma in Artificial Intelligence"
    ]
  },
  {
    name: "Salim Mkumla & Rabana Modisaemanag",
    school: "School of Marketing and Communications",
    qualifications: [
      "Higher Certificate in Digital Marketing",
      "Higher Certificate in Marketing",
      "Higher Certificate in Social Media and Communication",
      "Bachelor of Commerce in Digital Marketing",
      "Bachelor of Commerce in Marketing Management",
      "Bachelor of Commerce in Corporate Communications",
      "Bachelor of Commerce Honours in Marketing Management"
    ]
  },
  {
    name: "Samukelisiwe Nkosi & Joanne Naidoo",
    school: "School of Public Management and Local Governance",
    qualifications: [
      "Higher Certificate in Local Government Development and Management",
      "Higher Certificate in Public Management",
      "Higher Certificate in Public Sector Procurement",
      "Bachelor of Public Administration",
      "Bachelor of Public Administration Honours",
      "Master of Public Administration"
    ]
  },
  {
    name: "Sinegugu Luthuli",
    school: "School of Tourism and Hospitality",
    qualifications: [
      "Higher Certificate in Tourism Management",
      "Higher Certificate in Events Management",
      "Bachelor of Commerce in Tourism and Hospitality Management"
    ]
  },
  {
    name: "Sinegugu Luthuli",
    school: "School of Health Care Management",
    qualifications: [
      "Higher Certificate in Healthcare Management"
    ]
  },
  {
    name: "Levina Ishwar",
    school: "School of New Venture Creation",
    qualifications: [
      "Bachelor of Commerce in Entrepreneurship",
      "Postgraduate Diploma in Family Business Management"
    ]
  }
];

export function getCoordinatorByQualification(qualificationName: string): Coordinator | undefined {
  return COORDINATORS.find(coord => 
    coord.qualifications.some(q => 
      q.toLowerCase().includes(qualificationName.toLowerCase()) || 
      qualificationName.toLowerCase().includes(q.toLowerCase())
    )
  );
}

export function getCoordinatorBySchool(school: string): Coordinator | undefined {
  return COORDINATORS.find(coord => coord.school === school);
}
