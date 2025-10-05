/**
 * Academic policy definitions for MANCOSA programmes
 */

export type AcademicLevel = 
  | 'UG_YEAR_1' 
  | 'UG_YEAR_2' 
  | 'UG_YEAR_3' 
  | 'ADV_DIP' 
  | 'POSTGRAD_COURSE' 
  | 'RESEARCH_ONLY';

export interface AssessmentDefinition {
  id: string;
  label: string;
  weight: number;
  outOf: number;
  kind: 'formative' | 'summative';
}

export interface SubMinimumRule {
  scope: 'formative-group' | 'osa' | 'individual';
  type: 'percentage' | 'raw';
  value: number;
  appliesTo?: string[];
}

export interface Policy {
  id: string;
  displayName: string;
  academicLevel: AcademicLevel;
  version: string;
  assessments: AssessmentDefinition[];
  subMinimums: SubMinimumRule[];
  passRate: number;
  distinctionRate: number;
  condonedDistinctionMin?: number;
  osaSubMinimum: number;
  notes?: string;
}

export const POLICIES: Record<string, Policy> = {
  UG_YEAR_1_DEFAULT: {
    id: 'UG_YEAR_1_DEFAULT',
    displayName: 'Undergraduate Year 1',
    academicLevel: 'UG_YEAR_1',
    version: '2024-01',
    assessments: [
      { id: 'fa1', label: 'Formative Assessment 1', weight: 20, outOf: 20, kind: 'formative' },
      { id: 'fa2', label: 'Formative Assessment 2', weight: 20, outOf: 20, kind: 'formative' },
      { id: 'osa', label: 'Online Summative Assessment', weight: 60, outOf: 100, kind: 'summative' }
    ],
    subMinimums: [
      { scope: 'formative-group', type: 'percentage', value: 50 },
      { scope: 'osa', type: 'percentage', value: 30 }
    ],
    passRate: 50,
    distinctionRate: 75,
    condonedDistinctionMin: 70,
    osaSubMinimum: 30,
    notes: 'Year 1 pattern with two formative assessments'
  },
  
  UG_YEAR_2_DEFAULT: {
    id: 'UG_YEAR_2_DEFAULT',
    displayName: 'Undergraduate Year 2',
    academicLevel: 'UG_YEAR_2',
    version: '2024-01',
    assessments: [
      { id: 'kcq', label: 'Knowledge Check Quiz', weight: 10, outOf: 10, kind: 'formative' },
      { id: 'case-study', label: 'Case Study', weight: 30, outOf: 30, kind: 'formative' },
      { id: 'osa', label: 'Online Summative Assessment', weight: 60, outOf: 100, kind: 'summative' }
    ],
    subMinimums: [
      { scope: 'formative-group', type: 'percentage', value: 50 },
      { scope: 'osa', type: 'percentage', value: 30 }
    ],
    passRate: 50,
    distinctionRate: 75,
    condonedDistinctionMin: 70,
    osaSubMinimum: 30,
    notes: 'Year 2 pattern with KCQ and Case Study'
  },
  
  UG_YEAR_3_DEFAULT: {
    id: 'UG_YEAR_3_DEFAULT',
    displayName: 'Undergraduate Year 3',
    academicLevel: 'UG_YEAR_3',
    version: '2024-01',
    assessments: [
      { id: 'kcq', label: 'Knowledge Check Quiz', weight: 10, outOf: 10, kind: 'formative' },
      { id: 'case-study', label: 'Case Study', weight: 30, outOf: 30, kind: 'formative' },
      { id: 'osa', label: 'Online Summative Assessment', weight: 60, outOf: 100, kind: 'summative' }
    ],
    subMinimums: [
      { scope: 'formative-group', type: 'percentage', value: 50 },
      { scope: 'osa', type: 'percentage', value: 40 }
    ],
    passRate: 50,
    distinctionRate: 75,
    condonedDistinctionMin: 70,
    osaSubMinimum: 40,
    notes: 'Year 3 pattern with higher OSA sub-minimum (40%)'
  }
};

export function getPolicyById(id: string): Policy | undefined {
  return POLICIES[id];
}

export function getAllPolicies(): Policy[] {
  return Object.values(POLICIES);
}
