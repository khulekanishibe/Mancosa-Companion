/**
 * Centralized calculator logic for MANCOSA module assessments
 * Includes distinction and condoned distinction calculations
 */

export enum Classification {
  FAIL = 'FAIL',
  PASS = 'PASS',
  DISTINCTION = 'DISTINCTION',
  CONDONED_DISTINCTION = 'CONDONED_DISTINCTION',
  CONDITION_NOT_MET = 'CONDITION_NOT_MET',
}

export interface Assessment {
  id: string;
  name: string;
  score: string;
  outOf: string;
  weight: string;
}

export interface CalculationResult {
  classification: Classification;
  finalGrade: number;
  requiredOSA?: number;
  requiredOSARaw?: number;
  meetsFormativeSubMinimum: boolean;
  meetsOSASubMinimum: boolean;
  canAchieveDistinction: boolean;
  canAchieveCondonedDistinction: boolean;
  distinctionRequiredOSA?: number;
  condonedDistinctionRequiredOSA?: number;
}

// Constants
export const PASS_RATE = 50;
export const DISTINCTION_RATE = 75;
export const CONDONED_DISTINCTION_MINIMUM = 70;
export const OSA_SUBMINIMUM = 30;
export const FORMATIVE_SUBMINIMUM = 0.5; // 50%

/**
 * Calculate formative assessment total (KCQ + Case Study)
 */
export function calculateFormativeTotal(assessments: Assessment[]): {
  score: number;
  total: number;
  percentage: number;
  meetsSubMinimum: boolean;
} {
  const kcq = assessments.find(a => a.id === 'kcq');
  const caseStudy = assessments.find(a => a.id === 'case-study');

  if (!kcq || !caseStudy) {
    return { score: 0, total: 0, percentage: 0, meetsSubMinimum: false };
  }

  const kcqScore = parseFloat(kcq.score) || 0;
  const kcqOutOf = parseFloat(kcq.outOf) || 0;
  const caseStudyScore = parseFloat(caseStudy.score) || 0;
  const caseStudyOutOf = parseFloat(caseStudy.outOf) || 0;

  const score = kcqScore + caseStudyScore;
  const total = kcqOutOf + caseStudyOutOf;
  const percentage = total > 0 ? (score / total) * 100 : 0;
  const meetsSubMinimum = percentage >= (FORMATIVE_SUBMINIMUM * 100);

  return { score, total, percentage, meetsSubMinimum };
}

/**
 * Calculate weighted score from assessments
 */
export function calculateWeightedScore(assessments: Assessment[]): {
  currentWeightedScore: number;
  totalWeight: number;
} {
  let currentWeightedScore = 0;
  let totalWeight = 0;

  assessments.forEach(assessment => {
    const score = parseFloat(assessment.score);
    const outOf = parseFloat(assessment.outOf);
    const weight = parseFloat(assessment.weight);

    if (!isNaN(score) && !isNaN(outOf) && !isNaN(weight) && outOf > 0) {
      const weightedScore = (score / outOf) * weight;
      currentWeightedScore += weightedScore;
      totalWeight += weight;
    }
  });

  return { currentWeightedScore, totalWeight };
}

/**
 * Calculate required OSA score to achieve target grade
 * Returns integer percentage as per OSA requirements
 */
export function calculateRequiredOSA(
  currentWeightedScore: number,
  osaWeight: number,
  osaOutOf: number,
  targetGrade: number
): { percentage: number; rawScore: number; achievable: boolean } {
  const pointsNeeded = targetGrade - currentWeightedScore;
  
  if (pointsNeeded <= 0) {
    // Already achieved target, but must meet OSA sub-minimum
    return {
      percentage: Math.ceil(OSA_SUBMINIMUM),
      rawScore: Math.ceil((OSA_SUBMINIMUM / 100) * osaOutOf),
      achievable: true,
    };
  }

  const requiredPercentage = (pointsNeeded / osaWeight) * 100;
  
  // Enforce OSA sub-minimum
  const finalPercentage = Math.max(requiredPercentage, OSA_SUBMINIMUM);
  
  // Round up to ensure passing (ceiling for integers)
  const finalPercentageInt = Math.ceil(finalPercentage);
  const rawScore = Math.ceil((finalPercentageInt / 100) * osaOutOf);

  return {
    percentage: finalPercentageInt,
    rawScore,
    achievable: finalPercentageInt <= 100,
  };
}

/**
 * Classify final module result
 */
export function classifyResult(
  finalGrade: number,
  meetsFormativeSubMinimum: boolean,
  meetsOSASubMinimum: boolean
): Classification {
  // Check sub-minimums first
  if (!meetsFormativeSubMinimum || !meetsOSASubMinimum) {
    return Classification.CONDITION_NOT_MET;
  }

  // Round to integer for classification
  const gradeInt = Math.floor(finalGrade);

  if (gradeInt >= DISTINCTION_RATE) {
    return Classification.DISTINCTION;
  } else if (gradeInt >= CONDONED_DISTINCTION_MINIMUM) {
    return Classification.CONDONED_DISTINCTION;
  } else if (gradeInt >= PASS_RATE) {
    return Classification.PASS;
  } else {
    return Classification.FAIL;
  }
}

/**
 * Calculate complete module result including distinction scenarios
 */
export function calculateModuleResult(assessments: Assessment[]): CalculationResult | null {
  // Validate inputs
  const osaAssessment = assessments.find(a => a.id === 'osa');
  if (!osaAssessment) {
    return null;
  }

  const osaScore = parseFloat(osaAssessment.score);
  const osaOutOf = parseFloat(osaAssessment.outOf) || 100;
  const osaWeight = parseFloat(osaAssessment.weight) || 60;

  // Check formative sub-minimum
  const formative = calculateFormativeTotal(assessments);

  // Calculate weighted scores
  const { currentWeightedScore } = calculateWeightedScore(assessments);

  // If OSA score is provided, calculate final grade
  if (!isNaN(osaScore)) {
    const osaPercentage = (osaScore / osaOutOf) * 100;
    const meetsOSASubMinimum = osaPercentage >= OSA_SUBMINIMUM;
    const finalGrade = currentWeightedScore;

    const classification = classifyResult(
      finalGrade,
      formative.meetsSubMinimum,
      meetsOSASubMinimum
    );

    return {
      classification,
      finalGrade: Math.floor(finalGrade),
      meetsFormativeSubMinimum: formative.meetsSubMinimum,
      meetsOSASubMinimum,
      canAchieveDistinction: false,
      canAchieveCondonedDistinction: false,
    };
  }

  // OSA score not provided - calculate what's needed
  const requiredToPass = calculateRequiredOSA(
    currentWeightedScore,
    osaWeight,
    osaOutOf,
    PASS_RATE
  );

  const requiredForDistinction = calculateRequiredOSA(
    currentWeightedScore,
    osaWeight,
    osaOutOf,
    DISTINCTION_RATE
  );

  const requiredForCondonedDistinction = calculateRequiredOSA(
    currentWeightedScore,
    osaWeight,
    osaOutOf,
    CONDONED_DISTINCTION_MINIMUM
  );

  return {
    classification: Classification.PASS, // Placeholder when calculating
    finalGrade: 0,
    requiredOSA: requiredToPass.percentage,
    requiredOSARaw: requiredToPass.rawScore,
    meetsFormativeSubMinimum: formative.meetsSubMinimum,
    meetsOSASubMinimum: true, // Will be checked when OSA is entered
    canAchieveDistinction: requiredForDistinction.achievable,
    canAchieveCondonedDistinction: requiredForCondonedDistinction.achievable,
    distinctionRequiredOSA: requiredForDistinction.achievable
      ? requiredForDistinction.percentage
      : undefined,
    condonedDistinctionRequiredOSA: requiredForCondonedDistinction.achievable
      ? requiredForCondonedDistinction.percentage
      : undefined,
  };
}
