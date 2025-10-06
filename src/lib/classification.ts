/**
 * Centralized classification system for MANCOSA module assessment results
 * Provides type-safe classification logic and consistent styling tokens
 */

export enum Classification {
  FAIL = 'FAIL',
  PASS = 'PASS',
  DISTINCTION = 'DISTINCTION',
  CONDONED_DISTINCTION = 'CONDONED_DISTINCTION',
  CONDITION_NOT_MET = 'CONDITION_NOT_MET',
}

/**
 * Classification styling map using semantic emerald tokens
 * All colors use HSL semantic tokens from design system
 */
export const CLASSIFICATION_STYLES = {
  FAIL: {
    label: 'Fail',
    className: 'text-red-600',
    bgClassName: 'bg-red-50 border-red-200',
    iconClassName: 'text-red-600',
  },
  PASS: {
    label: 'Pass',
    className: 'text-emerald-600',
    bgClassName: 'bg-emerald-50 border-emerald-200',
    iconClassName: 'text-emerald-600',
  },
  DISTINCTION: {
    label: 'Distinction',
    className: 'text-emerald-700 font-bold',
    bgClassName: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-300',
    iconClassName: 'text-emerald-700',
  },
  CONDONED_DISTINCTION: {
    label: 'Condoned Distinction',
    className: 'text-teal-600',
    bgClassName: 'bg-teal-50 border-teal-200',
    iconClassName: 'text-teal-600',
  },
  CONDITION_NOT_MET: {
    label: 'Requirements Not Met',
    className: 'text-orange-600',
    bgClassName: 'bg-orange-50 border-orange-200',
    iconClassName: 'text-orange-600',
  },
} as const;

/**
 * Classify final module result based on grade and sub-minimum requirements
 * 
 * PRECEDENCE:
 * 1. Formative sub-minimum check (50%)
 * 2. OSA sub-minimum check (30%)
 * 3. Final grade thresholds (50% pass, 70% condoned, 75% distinction)
 * 
 * @param finalGrade - Final calculated grade (0-100)
 * @param meetsFormativeSubMinimum - Whether formative assessments >= 50%
 * @param meetsOSASubMinimum - Whether OSA score >= 30%
 * @param rates - Pass and distinction rate thresholds
 * @returns Classification enum value
 */
export function classify(
  finalGrade: number,
  meetsFormativeSubMinimum: boolean,
  meetsOSASubMinimum: boolean,
  rates: {
    pass: number;
    distinction: number;
    condonedMin: number;
  }
): Classification {
  // Sub-minimum requirements are mandatory
  if (!meetsFormativeSubMinimum || !meetsOSASubMinimum) {
    return Classification.CONDITION_NOT_MET;
  }

  // Use floor for integer grade comparison (per MANCOSA policy)
  const gradeInt = Math.floor(finalGrade);

  if (gradeInt >= rates.distinction) {
    return Classification.DISTINCTION;
  } else if (gradeInt >= rates.condonedMin) {
    return Classification.CONDONED_DISTINCTION;
  } else if (gradeInt >= rates.pass) {
    return Classification.PASS;
  } else {
    return Classification.FAIL;
  }
}

/**
 * Get display label for classification
 */
export function getClassificationLabel(classification: Classification): string {
  return CLASSIFICATION_STYLES[classification]?.label || 'Unknown';
}

/**
 * Get CSS classes for classification display
 */
export function getClassificationStyles(classification: Classification) {
  return CLASSIFICATION_STYLES[classification] || CLASSIFICATION_STYLES.FAIL;
}
