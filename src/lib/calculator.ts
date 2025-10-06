/**
 * Centralized calculator logic for MANCOSA module assessments
 * Includes distinction and condoned distinction calculations
 * 
 * CALCULATION PRECEDENCE:
 * 1. Formative sub-minimum check (50% required)
 * 2. OSA sub-minimum check (30% required)
 * 3. Final grade thresholds (50% pass, 70% condoned, 75% distinction)
 * 
 * All OSA calculations use ceiling rounding to ensure integer percentages.
 */

import { Classification, classify } from './classification';

export { Classification };

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
 * 
 * ROUNDING LOGIC:
 * - Uses Math.ceil() to round up percentages (ensures passing threshold)
 * - Raw marks also rounded up to prevent undershooting
 * - Enforces OSA sub-minimum of 30%
 * 
 * @returns Object with percentage (ceiling), raw score (ceiling), and achievability flag
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
 * @deprecated Use classify() from classification.ts instead
 * Kept for backward compatibility
 */
export function classifyResult(
  finalGrade: number,
  meetsFormativeSubMinimum: boolean,
  meetsOSASubMinimum: boolean
): Classification {
  return classify(finalGrade, meetsFormativeSubMinimum, meetsOSASubMinimum, {
    pass: PASS_RATE,
    distinction: DISTINCTION_RATE,
    condonedMin: CONDONED_DISTINCTION_MINIMUM
  });
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
