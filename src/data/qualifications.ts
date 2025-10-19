/**
 * MANCOSA Qualification Catalogue - EXPANDED
 * Comprehensive database of all MANCOSA qualifications and programmes
 * Based on official MANCOSA website data
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

export const QUALIFICATIONS: Qualification[] = [
  // DOCTORAL DEGREES (NQF Level 10)
  {
    id: 'DBA',
    name: 'Doctor of Business Administration',
    level: 'Doctoral Degree',
    nqf_level: 10,
    saqa_id: '102061',
    total_credits: 360,
    duration_years: 5,
    faculty: 'Business Management',
    description: "MANCOSA's Doctor of Business Administration (DBA) is crafted for ambitious professionals poised to master and shape the business narrative. This comprehensive program transcends traditional academia, inviting you to tackle complex business phenomena with scholarly depth and inventive solutions.",
    career_outcomes: ['C-Suite Executives', 'Leading Consultants', 'Business Scholars'],
    programme_url: 'https://www.mancosa.co.za/programme/doctor-of-business-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=102061'
  },

  // MASTERS DEGREES (NQF Level 9)
  {
    id: 'MBA',
    name: 'Master of Business Administration',
    level: 'Masters Degree',
    nqf_level: 9,
    saqa_id: '94871',
    total_credits: 180,
    duration_years: 2,
    faculty: 'Business Management',
    coordinator: 'Rebecca Naidoo',
    description: 'The MANCOSA Master of Business (MBA) programme is consistently ranked as one of South Africa\'s top MBA degrees. The distance learning Master of Business Administration degree programme is specifically tailored for flexible learning and speaks to the management, leadership and business needs of a dynamic global market.',
    career_outcomes: ['Management Consultant', 'Senior Manager/ Analyst', 'Corporate Executive', 'Entrepreneur'],
    programme_url: 'https://www.mancosa.co.za/programme/master-of-business-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=94871'
  },
  {
    id: 'MPA',
    name: 'Master of Public Administration',
    level: 'Masters Degree',
    nqf_level: 9,
    saqa_id: '98825',
    total_credits: 180,
    duration_years: 2,
    faculty: 'Public Management',
    coordinator: 'Zandile Mfeka',
    description: 'The Master of Public Administration programme will enable you to gain a wealth of relevant knowledge and skills required for a rapidly developing state in Africa.',
    career_outcomes: ['Senior Public Officials', 'Municipal Managers', 'City Managers', 'Parliamentary Officials', 'Managers in Quasi-autonomous Institutions'],
    programme_url: 'https://www.mancosa.co.za/programme/master-of-public-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=98825'
  },
  {
    id: 'MCOM',
    name: 'Master of Commerce',
    level: 'Masters Degree',
    nqf_level: 9,
    saqa_id: '104525',
    total_credits: 180,
    duration_years: 1,
    faculty: 'Business and Commerce',
    coordinator: 'Rebecca Naidoo',
    description: 'Advance your command of commerce with a Master of Commerce (MCom) degree that integrates rigorous research with strategic business acumen.',
    career_outcomes: ['Management Consultant', 'Senior Analyst/Manager', 'Corporate Executive', 'Entrepreneur/Academic'],
    programme_url: 'https://www.mancosa.co.za/programme/master-of-commerce/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=104525'
  },
  {
    id: 'MCOM_HRM',
    name: 'Master of Commerce in Human Resource Management',
    level: 'Masters Degree',
    nqf_level: 9,
    saqa_id: '123424',
    total_credits: 195,
    duration_years: 2,
    faculty: 'Human Resources',
    description: 'Prepare to lead in a changing world of work. This programme builds expertise in leadership, ethics, research, and global HR practices - equipping graduates to tackle complex challenges and drive sustainable organisational growth.',
    career_outcomes: ['Human Resources Coordinator', 'Human Resource Generalist', 'Consultant, Human Resources', 'Human Resources Specialist', 'Human Resources Development Manager', 'Human Resources Manager', 'Human Resources Business Partner', 'Chief Human Resource Officer'],
    programme_url: 'https://www.mancosa.co.za/programme/master-of-commerce-in-human-resource-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=123424'
  },

  // HONOURS DEGREES (NQF Level 8)
  {
    id: 'BCOM_HONS_MARKETING',
    name: 'Bachelor of Commerce Honours in Marketing Management',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '79227',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'The Marketing Honours degree will afford you in-depth knowledge of marketing management. Marketing management impacts on every aspect of a business, from customer needs, product development, communications to events management and advertising.',
    career_outcomes: ['Advertising Manager', 'Marketing Manager', 'Marketing Researcher', 'Sales Manager', 'Brand/Advertising Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-honours-in-marketing-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=79227'
  },
  {
    id: 'BCOM_HONS_SCM',
    name: 'Bachelor of Commerce Honours in Supply Chain Management',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '99554',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Supply Chain Management',
    coordinator: 'Masithembe Kafile',
    description: 'Develop your functional and strategic competencies in the field of supply chain management with a Supply Chain Management Honours Degree.',
    career_outcomes: ['Supply Chain Manager/ Supply Chain Analyst', 'Logistics Manager/ Warehouse Manager', 'Procurement Manager', 'Commodity Analyst'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-honours-in-supply-chain-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=99554'
  },
  {
    id: 'BBA_HONS',
    name: 'Bachelor of Business Administration Honours',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '97881',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Rebecca Naidoo',
    description: 'The Bachelor of Business Administration Honours Degree builds on the foundational knowledge and equips students with the strategic skills and knowledge essential for managing the key areas of organisations.',
    career_outcomes: ['Business Manager/Strategist/ Entrepreneur', 'Business Consultant', 'Marketing Executive', 'Retail Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-business-administration-honours/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=97881'
  },
  {
    id: 'BPA_HONS',
    name: 'Bachelor of Public Administration Honours',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '86346',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Public Management',
    coordinator: 'Zandile Mfeka',
    description: 'A Bachelor of Public Administration Honours will expand your knowledge in the field of public administration with a sound understanding of research methodologies, organisational strategy, structure, systems and organisational culture.',
    career_outcomes: ['Public Officials', 'City Managers', 'Municipal Managers', 'Managers in Quasi-autonomous institution'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-public-administration-honours/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=86346'
  },
  {
    id: 'BED_HONS_ELM',
    name: 'Bachelor of Education Honours in Educational Leadership and Management',
    level: 'Honours Degree',
    nqf_level: 8,
    saqa_id: '109567',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Education',
    coordinator: 'Michael Naidoo',
    description: 'Deepen your knowledge base with a Bachelor of Education Honours in Educational Leadership and Management, and develop research capacity in the research methodologies and techniques required to research issues on educational leadership and management.',
    career_outcomes: ['Public Schools', 'Private Schools', 'Department of Basic and Higher Education.'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-education-honours-in-education-leadership-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=109567'
  },

  // POSTGRADUATE DIPLOMAS (NQF Level 8)
  {
    id: 'PGDIP_DIGITAL_MARKETING',
    name: 'Postgraduate Diploma in Digital Marketing',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '124127',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'Gain the skills to thrive in the digital age. This programme equips you to design effective strategies, use data and analytics, and apply ethical digital practices to strengthen connections between brands and consumers in the 4IR era.',
    career_outcomes: ['Brand Manager', 'Content Marketing Manager', 'Customer Engagement Strategist', 'Data or Marketing Analyst', 'Digital Marketing Manager', 'Digital Marketing Strategist', 'Social Media Manager', 'Web Analytics Manager', 'Media Strategist'],
    programme_url: 'https://www.mancosa.co.za/programme/postgraduate-diploma-in-digital-marketing/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=124127'
  },
  {
    id: 'PGDIP_AI',
    name: 'Postgraduate Diploma in Artificial Intelligence',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '119095',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Information Technology',
    description: "Introducing South Africa's first postgraduate diploma in Artificial Intelligence, the Postgraduate Diploma in Artificial Intelligence by MANCOSA! Enrol today to gain hands-on experience, acquire sought-after skills, and thrive through the power of AI.",
    career_outcomes: ['AI professionals', 'Machine Learning Engineers', 'AI Solutions Architect', 'Algorithm specialists', 'AI Analysts/ Developers'],
    programme_url: 'https://www.mancosa.co.za/programme/postgraduate-diploma-in-artificial-intelligence/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=119095'
  },
  {
    id: 'PGDIP_FAMILY_BUSINESS',
    name: 'Postgraduate Diploma in Family Business Management',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '99029',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'Directed at enabling students with cognate undergraduate qualifications to further develop their functional and strategic competencies in the field of family business management.',
    career_outcomes: ['Junior Manager within a Family Business', 'Assistant Manager within a Family Business', 'Senior Manager within a Family Business'],
    programme_url: 'https://www.mancosa.co.za/programme/postgraduate-diploma-in-family-business-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=99029'
  },
  {
    id: 'PGDIP_PM',
    name: 'Postgraduate Diploma in Project Management',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '62110',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Project Management',
    coordinator: 'Martin Motene',
    description: 'The Postgraduate Diploma in Project Management is a one-year specialised programme that enables students to develop an advanced understanding of concepts, approaches, and tools relevant to the field of project management.',
    career_outcomes: ['Project Manager/ Coordinator', 'Project Specialists', 'Project Management Consultant', 'Operations Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/postgraduate-diploma-in-project-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=62110'
  },
  {
    id: 'PGDIP_BM',
    name: 'Postgraduate Diploma in Business Management',
    level: 'Postgraduate Diploma',
    nqf_level: 8,
    saqa_id: '84947',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Rebecca Naidoo',
    description: 'Gain advanced knowledge, skills, and competencies in the key functional areas of business management through the Postgraduate Diploma in Business Management.',
    career_outcomes: ['Business Manager', 'Business Analyst', 'Business Consultant', 'Business Strategist', 'Entrepreneur'],
    programme_url: 'https://www.mancosa.co.za/programme/postgraduate-diploma-in-business-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=84947'
  },

  // UNDERGRADUATE DEGREES (NQF Level 7)
  {
    id: 'BBA',
    name: 'Bachelor of Business Administration',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '62116',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'Obtain an understanding of the business and management environments by developing your intellectual ability, executive personality, and managerial skills with a MANCOSA Bachelor of Business Administration course that blends business and general education.',
    career_outcomes: ['Business Manager', 'Business Strategist', 'Business Consultant', 'Entrepreneur'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-business-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=62116'
  },
  {
    id: 'BPA',
    name: 'Bachelor of Public Administration',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '62151',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Public Management',
    coordinator: 'Zandile Mfeka',
    description: 'The Bachelor of Public Administration focuses on the principles and practices of government administration and management in the public sector.',
    career_outcomes: ['Public Manager', 'Immigration Administrator', 'Local Government Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-public-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=62151'
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
    coordinator: 'Dr Ridwaan Asmal',
    description: 'Developing learners to be able to function in a wide range of financial and accounting tasks and to be able to function and add value in private and public sectors.',
    career_outcomes: ['Financial Accountants/ Analysts', 'Credit Controllers', 'Compliance Officers', 'Management Accountants'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-accounting/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=110219'
  },
  {
    id: 'BCOM_CORP_COMM',
    name: 'Bachelor of Commerce in Corporate Communication',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '117955',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'The Bachelor of Commerce in Corporate Communication will provide students with a holistic and robust understanding of the field of corporate communication. Students will be provided with a comprehensive understanding of theory, methodology, applications and processes in the key fields of corporate communication, communication science and business management.',
    career_outcomes: ['Corporate Communicator', 'Corporate Communication Practitioner', 'Corporate Communication Officer/Liaison', 'Corporate Communication Manager/Specialist'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-corporate-communication/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=117955'
  },
  {
    id: 'BCOM_ENT',
    name: 'Bachelor of Commerce in Entrepreneurship',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '97907',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'The Bachelor of Commerce in Entrepreneurship provides knowledge, skills and acumen to those aspiring to start their own business or those wishing to contribute to successful entrepreneurial ventures.',
    career_outcomes: ['Advisor for SMMEs', 'Business Development Manager', 'Management/ Consultant', 'Analyst for SMMEs', 'Business Owner'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-entrepreneurship/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=97907'
  },
  {
    id: 'BCOM_FIN',
    name: 'Bachelor of Commerce in Financial Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '94677',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Accounting and Finance',
    coordinator: 'Dr Ridwaan Asmal',
    description: 'Develop financial and managerial skills with an accredited financial management degree. This will equip students to meet the demand for specialists and leaders in the financial sector.',
    career_outcomes: ['Bank Branch Manager', 'Financial Analyst/ Planner/ Manager', 'Portfolio Manager', 'Financial Administrator'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-financial-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=94677'
  },
  {
    id: 'BCOM_HRM',
    name: 'Bachelor of Commerce in Human Resource Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '62129',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Human Resources',
    coordinator: 'Kairoon Nisa Fyzoo',
    description: "The MANCOSA Human Resource Management degree prepares HR professionals to deal with the complexities and challenges of managing today's workforce.",
    career_outcomes: ['Human Resource Manager', 'Labour Relations Officer', 'Corporate Trainer/ Manager', 'Human Resource Consultant'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-human-resource-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=62129'
  },
  {
    id: 'BCOM_ITM',
    name: 'Bachelor of Commerce in Information and Technology Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '71889',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Information Technology',
    description: 'Become a Bachelor of Commerce in Information and Technology Management graduate. An accredited IT Management Degree will enable you to offer and manage business solutions through information supported technology.',
    career_outcomes: ['IT Manager', 'Business Analyst', 'Network Manager/ Developer', 'IT Infrastructure Developer', 'Systems Analyst'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-information-and-technology-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=71889'
  },
  {
    id: 'BCOM_IB',
    name: 'Bachelor of Commerce in International Business',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '104526',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Business and Commerce',
    coordinator: 'Masithembe Kafile',
    description: 'Gain critical knowledge in commerce, enhanced by an in-depth understanding of the business and commercial practices relevant to multinational organisations with a Bachelor of Commerce in International Business.',
    career_outcomes: ['Business Development Manager', 'Data Scientist/ Marketing Executive/ Financial Trader', 'Human Resources Officer/ Public Relations Account Executive'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-international-business/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=104526'
  },
  {
    id: 'BCOM_MARKETING',
    name: 'Bachelor of Commerce in Marketing Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '96745',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'The MANCOSA Bachelor of Commerce in Marketing Management degree emphasises the techniques and methods of managing and planning for marketing.',
    career_outcomes: ['Marketing Manager/ Coordinator', 'Advertising Manager', 'Brand Manager', 'Public Relations Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-marketing-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96745'
  },
  {
    id: 'BCOM_PM',
    name: 'Bachelor of Commerce in Project Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '108835',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Project Management',
    coordinator: 'Martin Motene',
    description: 'A Bachelor of Commerce in Project Management qualification succeeds in developing learners to be able to function in a wide range of financial and accounting tasks and to be able to function and add value in private and public sectors.',
    career_outcomes: ['Project Manager', 'Project Coordinator', 'Systems Analyst', 'Operations Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-project-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=108835'
  },
  {
    id: 'BCOM_RETAIL',
    name: 'Bachelor of Commerce in Retail Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '97823',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Business Management',
    coordinator: 'Masithembe Kafile',
    description: 'Learn skills and knowledge relating to the functions and management of a retail business and the key issues associated with understanding retail trading and environments with a retail management degree.',
    career_outcomes: ['Retail Business Owner/ Manager', 'Franchise Manager/ Store Manager', 'Merchandising Representative', 'Procurement Administrator'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-retail-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=97823'
  },
  {
    id: 'BCOM_SCOM',
    name: 'Bachelor of Commerce in Supply Chain and Operations Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '124089',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Supply Chain Management',
    description: 'Gain the knowledge and skills to excel in sourcing, production, and distribution. This programme develops critical thinking, problem-solving, and leadership abilities, while exploring technology-driven solutions for today\'s dynamic supply chain environment.',
    career_outcomes: ['Supply Chain Manager', 'Operations Manager', 'Procurement Officer', 'Inventory Manager', 'Supply Chain Consultant', 'Production Planner', 'Warehouse Foreman'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-supply-chain-and-operations-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=124089'
  },
  {
    id: 'BCOM_TOURISM',
    name: 'Bachelor of Commerce in Tourism and Hospitality Management',
    level: 'Undergraduate Degree',
    nqf_level: 7,
    saqa_id: '115457',
    total_credits: 360,
    duration_years: 3,
    faculty: 'Tourism and Hospitality',
    coordinator: 'Sershan Naidoo',
    description: 'Gain appropriate knowledge and skills to successfully bridge the gap of a quality workforce in the hospitality and tourism industry. Gain knowledge on how quality professionals are inducted into the workplace with a balance between theoretical and practical components with a Bachelor of Commerce in Tourism and Hospitality Management degree.',
    career_outcomes: ['Events Manager', 'Guest Relations Manager', 'Accommodation Manager', 'Tour Group Operator'],
    programme_url: 'https://www.mancosa.co.za/programme/bachelor-of-commerce-in-tourism-and-hospitality-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=115457'
  },

  // ADVANCED DIPLOMAS (NQF Level 7)
  {
    id: 'ADIP_BA',
    name: 'Advanced Diploma in Business Analysis',
    level: 'Advanced Diploma',
    nqf_level: 7,
    saqa_id: '118630',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Information Technology',
    coordinator: 'Azola Mhasa',
    description: 'Step into the role of a strategic influencer with our Advanced Diploma in Business Analysis. This programme is crafted for professionals eager to transform business challenges into growth opportunities through adept analysis and innovative solutions.',
    career_outcomes: ['Information Technology and Telecommunications Directors', 'IT Specialist Managers', 'IT Project and Programme Managers', 'IT Business Analysts, Architects and Systems Designers'],
    programme_url: 'https://www.mancosa.co.za/programme/advanced-diploma-in-business-analysis/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=118630'
  },
  {
    id: 'ADIP_BM',
    name: 'Advanced Diploma in Business Management',
    level: 'Advanced Diploma',
    nqf_level: 7,
    saqa_id: '104763',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'The Advanced Diploma in Business Management provides students with advanced knowledge, skills and competencies in the key functional areas of management and business within the commercial environment.',
    career_outcomes: ['Systems Analyst', 'Operations Manager', 'General Manager', 'Management Consultant'],
    programme_url: 'https://www.mancosa.co.za/programme/advanced-diploma-in-business-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=104763'
  },
  {
    id: 'ADIP_PA',
    name: 'Advanced Diploma in Public Administration',
    level: 'Advanced Diploma',
    nqf_level: 7,
    saqa_id: '121047',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Public Management',
    coordinator: 'Carl Velusamy',
    description: 'The purpose of the Advanced Diploma in Public Administration qualification is to provide the student with a solid knowledge of the public sector environment and to enable them to develop the skills, competencies and attitudes required to practice effective public management in all spheres of government public service.',
    career_outcomes: ['At local level: Manager of Strategy; Municipal Manager; Director of Community services; Director of Corporate Services'],
    programme_url: 'https://www.mancosa.co.za/programme/advanced-diploma-in-public-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=121047'
  },

  // ADVANCED CERTIFICATES (NQF Level 6)
  {
    id: 'ACERT_FP',
    name: 'Advanced Certificate in Financial Planning',
    level: 'Advanced Certificate',
    nqf_level: 6,
    saqa_id: '93710',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Accounting and Finance',
    coordinator: 'Dr Ridwaan Asmal',
    description: 'Obtain a comprehensive view of contemporary management practices in both the public and private sectors with an online management studies programme.',
    career_outcomes: ['Financial Planner/ Advisor', 'Financial Analyst', 'Investment Broker', 'Personal Financial Consultant'],
    programme_url: 'https://www.mancosa.co.za/programme/advanced-certificate-in-financial-planning/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=93710'
  },
  {
    id: 'ACERT_MS',
    name: 'Advanced Certificate in Management Studies',
    level: 'Advanced Certificate',
    nqf_level: 6,
    saqa_id: '96712',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'Obtain a comprehensive view of contemporary management practices in both the public and private sectors with an online management studies programme.',
    career_outcomes: ['Business Manager', 'Business Assistant', 'Management Assistant', 'Administration Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/advanced-certificate-in-management-studies/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96712'
  },

  // HIGHER CERTIFICATES (NQF Level 5)
  {
    id: 'HC_ACC',
    name: 'Higher Certificate in Accounting',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '93811',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Accounting and Finance',
    coordinator: 'Dr Ridwaan Asmal',
    description: 'Develop an integrated conceptual understanding, synthesis and application of accounting principles with an accounting course online.',
    career_outcomes: ['Accountant', 'Accounts Clerk', 'Bookkeeper', 'Debtors Clerk'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-accounting/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=93811'
  },
  {
    id: 'HC_BM',
    name: 'Higher Certificate in Business Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '96746',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Business Management',
    coordinator: 'Adele Chinapar',
    description: 'Develop skills, knowledge and values in the areas of team management, strategic management, project management, marketing, and finance.',
    career_outcomes: ['Business Administrator', 'Junior Management'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-business-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96746'
  },
  {
    id: 'HC_CODING',
    name: 'Higher Certificate in Coding',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '122727',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Information Technology',
    description: 'Build the skills to solve real-world challenges through code. This programme develops creativity, critical thinking, and problem-solving to prepare you for today\'s digital world.',
    career_outcomes: ['Coding Specialists', 'Junior Systems Developers', 'Analysts', 'Mobile application developers'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-coding/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=122727'
  },
  {
    id: 'HC_EVENTS',
    name: 'Higher Certificate in Events Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '104528',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Tourism and Hospitality',
    coordinator: 'Sershan Naidoo',
    description: 'Develop the skills and knowledge required to succeed in the demanding and competitive industry of events management. This programme offers students the necessary current and practical theory needed to thrive in this fast-paced industry.',
    career_outcomes: ['Conference Planners', 'Corporate Event Planners', 'Event Coordinators/ Wedding Planners', 'Event Managers/ Event Organisers'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-events-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=104528'
  },
  {
    id: 'HC_HRM',
    name: 'Higher Certificate in Human Resource Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '96080',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Human Resources',
    coordinator: 'Kairoon Nisa Fyzoo',
    description: "Provides an ideal platform for school leavers to develop basic human resource administration knowledge, skills, and competencies. MANCOSA's Higher Certificate in Human Resource Management courses offer up-to-date information on domestic and international human resource practices.",
    career_outcomes: ['Human Resources Administrator', 'Human Resources Consultant', 'Human Resources Assistant'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-human-resource-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96080'
  },
  {
    id: 'HC_IT',
    name: 'Higher Certificate in Information Technology',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '93709',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Information Technology',
    description: 'The qualification aims to develop an integrated conceptual understanding, synthesis and application of information technology principles.',
    career_outcomes: ['Network Developer', 'Business Analyst', 'IT Consultant/ Administrator', 'Data Capturers'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-information-technology/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=93709'
  },
  {
    id: 'HC_LGDM',
    name: 'Higher Certificate in Local Government and Development Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '96713',
    total_credits: 140,
    duration_years: 1,
    faculty: 'Public Management',
    description: 'The Higher Certificate in Local Government and Development Management empowers students with a high level of professional expertise together with a broad range of managerial skills in the local government sector.',
    career_outcomes: ['Public Administrator', 'Local Government Official', 'Municipal Councillor', 'Compliance Monitoring Officer'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-local-government-and-development-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96713'
  },
  {
    id: 'HC_LOGISTICS',
    name: 'Higher Certificate in Logistics Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '122733',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Supply Chain Management',
    description: 'The Higher Certificate in Logistics Management programme seeks to empower students with the necessary knowledge and skills to become competent professionals in the field of logistics and supply chain management.',
    career_outcomes: ['Logistics Administrator', 'Shipment Controller', 'Logistics Coordinator', 'Facilities Officer', 'Logistics and Supply Chain Administrators', 'Dispatcher', 'Transport Controller'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-logistics-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=122733'
  },
  {
    id: 'HC_MARKETING',
    name: 'Higher Certificate in Marketing',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '96455',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'Discover the ability to think across different disciplines, as companies are confronted with a continuous process of developing and maintaining a feasible relationship between organisations\' objectives, skills and resources and their changing marketing opportunities',
    career_outcomes: ['Marketing Administrator', 'Marketing Coordinator', 'Marketing Assistant'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-marketing/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=96455'
  },
  {
    id: 'HC_PARALEGAL',
    name: 'Higher Certificate in Paralegal Studies',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '117726',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Legal Studies',
    coordinator: 'Kairoon Nisa Fyzoo',
    description: 'The purpose of the Higher Certificate in Paralegal Studies is to afford students the opportunity to acquire quality education and skills that they will be able to implement within the legal sector.',
    career_outcomes: ['Legal Office Manager', 'Legal Officer', 'Paralegal Office Coordinator', 'Paralegal Assistant/Practitioner'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-paralegal-studies/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=117726'
  },
  {
    id: 'HC_PM',
    name: 'Higher Certificate in Project Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '97198',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Project Management',
    coordinator: 'Martin Motene',
    description: 'Build a framework for understanding the dynamics of project management and cover all the essential elements and processes with an accredited project management certification.',
    career_outcomes: ['Project Administration', 'Project Coordination', 'Project Management'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-project-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=97198'
  },
  {
    id: 'HC_PUBLIC_MGT',
    name: 'Higher Certificate in Public Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '93812',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Public Management',
    coordinator: 'Zandile Mfeka',
    description: 'Develop an integrated conceptual understanding, synthesis and application of specific issues in public management with the Higher Certificate in Public Management.',
    career_outcomes: ['Local Government Official', 'Public Administrator'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-public-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=93812'
  },
  {
    id: 'HC_PROCUREMENT',
    name: 'Higher Certificate in Public Sector Procurement',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '99511',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Public Management',
    coordinator: 'Zandile Mfeka',
    description: 'Choose the Higher Certificate in Public Sector Procurement to build skills in public sector procurement and supply chain management to promote effective service delivery and economic development at a local or regional government level.',
    career_outcomes: ['Procurement Officer/ Administrator', 'Buyer', 'Supply Chain Administrator', 'Transport and Logistics Administrator'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-public-sector-procurement-2/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=99511'
  },
  {
    id: 'HC_SOCIAL_MEDIA',
    name: 'Higher Certificate in Social Media Communication',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '103103',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Marketing and Communication',
    coordinator: 'Sershan Naidoo',
    description: 'Obtain social media certification with the Higher Certificate in Social Media and Communication, which aims to develop students\' social media communication skills within the growing, fast-paced industries influenced and impacted by online social media channels and communications.',
    career_outcomes: ['Social Media Officer/ Advertiser', 'Social Media Marketer', 'Social Media Content Producer', 'Social Media Content Coordinator'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-social-media-communication/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=103103'
  },
  {
    id: 'HC_SCM',
    name: 'Higher Certificate in Supply Chain Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '93708',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Supply Chain Management',
    description: 'The Higher Certificate in Supply Chain Management is a programme that equips students with a sound fundamental knowledge base and basic skills regarding supply chain management.',
    career_outcomes: ['Supply Chain Manager', 'Procurement Manager', 'Demand/ Inventory Planner', 'Logistics Manager'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-supply-chain-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=93708'
  },
  {
    id: 'HC_TAX',
    name: 'Higher Certificate in Tax Administration',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '99384',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Accounting and Finance',
    coordinator: 'Dr Ridwaan Asmal',
    description: 'Gain knowledge of applicable tax administration policy and relevant tax legislation with the certificate in taxation. Apply this practical knowledge and offer your expertise to a taxpayer, where necessary.',
    career_outcomes: ['Tax Clerk and Consultant', 'Tax Administrator', 'Bookkeeper'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-tax-administration/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=99384'
  },
  {
    id: 'HC_TOURISM',
    name: 'Higher Certificate in Tourism Management',
    level: 'Higher Certificate',
    nqf_level: 5,
    saqa_id: '118318',
    total_credits: 120,
    duration_years: 1,
    faculty: 'Tourism and Hospitality',
    coordinator: 'Sershan Naidoo',
    description: 'The purpose of the Higher Certificate in Tourism Management is to afford undergraduate students with quality education and skills that they are able to implement within the tourism sector. The graduate will have the appropriate knowledge to successfully bridge the gap of a quality workforce in the Tourism sector.',
    career_outcomes: ['Events Coordinator', 'Destination Marketing Officer', 'Guest Relations Officer', 'Accommodation Coordinator'],
    programme_url: 'https://www.mancosa.co.za/programme/higher-certificate-in-tourism-management/',
    saqa_url: 'https://allqs.saqa.org.za/showQualification.php?id=118318'
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
  return Array.from(new Set(QUALIFICATIONS.map(q => q.faculty))).sort();
}

export function getAllLevels(): Qualification['level'][] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.level)));
}
