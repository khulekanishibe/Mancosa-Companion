
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AssessmentRow from './AssessmentRow';
import ResultDisplay from './ResultDisplay';

interface Assessment {
  id: string;
  name: string;
  score: string;
  outOf: string;
  weight: string;
}

const ModuleCalculator: React.FC = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([
    { id: 'kcq', name: 'Knowledge Check Quiz', score: '10', outOf: '10', weight: '10' },
    { id: 'case-study', name: 'Case Study/Assignment', score: '17', outOf: '30', weight: '30' },
    { id: 'osa', name: 'Online Summative Assessment', score: '', outOf: '100', weight: '60' }
  ]);

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    title: string;
    content: string;
    details?: string[];
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const PASS_RATE = 50;
  const OSA_SUBMINIMUM = 30;

  const updateAssessment = (id: string, field: keyof Assessment, value: string) => {
    setAssessments(prev => prev.map(assessment => 
      assessment.id === id ? { ...assessment, [field]: value } : assessment
    ));
    
    // Clear errors when user starts typing
    setErrors(prev => ({ ...prev, [`${id}-${field}`]: false }));
  };

  const removeAssessment = (id: string) => {
    setAssessments(prev => prev.filter(assessment => assessment.id !== id));
  };

  const addAssessment = () => {
    const newId = `custom-${Date.now()}`;
    setAssessments(prev => [...prev, {
      id: newId,
      name: '',
      score: '',
      outOf: '',
      weight: ''
    }]);
  };

  const validateAndCalculate = () => {
    setShowResult(false);
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    // Check for formative assessment sub-minimum
    const kcqAssessment = assessments.find(a => a.id === 'kcq');
    const caseStudyAssessment = assessments.find(a => a.id === 'case-study');
    
    if (kcqAssessment && caseStudyAssessment) {
      const kcqScore = parseFloat(kcqAssessment.score);
      const kcqOutOf = parseFloat(kcqAssessment.outOf);
      const caseStudyScore = parseFloat(caseStudyAssessment.score);
      const caseStudyOutOf = parseFloat(caseStudyAssessment.outOf);

      if (!isNaN(kcqScore) && !isNaN(kcqOutOf) && !isNaN(caseStudyScore) && !isNaN(caseStudyOutOf)) {
        const formativeMarks = kcqScore + caseStudyScore;
        const formativeTotal = kcqOutOf + caseStudyOutOf;
        
        if ((formativeMarks / formativeTotal) < 0.5) {
          setResult({
            type: 'error',
            title: '<span class="text-red-600">Sub-minimum Not Met</span>',
            content: `<p class="text-gray-700">Your combined score for the first two assessments is <strong>${formativeMarks.toFixed(2)} / ${formativeTotal}</strong> (${((formativeMarks/formativeTotal)*100).toFixed(2)}%).</p>
                     <p class="text-gray-700 mt-2">This is below the required 50% sub-minimum, leading to an automatic fail for the module.</p>`
          });
          setShowResult(true);
          setErrors(newErrors);
          return;
        }
      }
    }

    // Validate all assessments and calculate
    let totalWeight = 0;
    let totalWeightedScore = 0;
    let currentWeightedScore = 0;
    let finalAssessmentWeight = 0;
    let finalAssessmentOutOf = 0;
    let finalAssessmentName = 'Final Assessment';
    let allScoresProvided = true;

    assessments.forEach(assessment => {
      const score = parseFloat(assessment.score);
      const outOf = parseFloat(assessment.outOf);
      const weight = parseFloat(assessment.weight);

      // Validate weight
      if (isNaN(weight) || weight <= 0) {
        newErrors[`${assessment.id}-weight`] = true;
        hasError = true;
      }

      // If score is provided, validate it and outOf
      if (assessment.score !== '') {
        if (isNaN(score) || score < 0) {
          newErrors[`${assessment.id}-score`] = true;
          hasError = true;
        }
        if (isNaN(outOf) || outOf <= 0) {
          newErrors[`${assessment.id}-outOf`] = true;
          hasError = true;
        }
        if (!hasError) {
          const weightedScore = (score / outOf) * weight;
          totalWeightedScore += weightedScore;
          currentWeightedScore += weightedScore;
        }
      } else {
        // This is the assessment we're calculating for
        allScoresProvided = false;
        if (isNaN(outOf) || outOf <= 0) {
          newErrors[`${assessment.id}-outOf`] = true;
          hasError = true;
        } else {
          finalAssessmentWeight += weight;
          finalAssessmentOutOf = outOf;
          finalAssessmentName = assessment.name || 'Final Assessment';
        }
      }

      if (!hasError) {
        totalWeight += weight;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      setResult({
        type: 'error',
        title: '<span class="text-red-600">Input Error</span>',
        content: '<p class="text-red-600 font-semibold">Please check the highlighted fields for errors.</p>'
      });
      setShowResult(true);
      return;
    }

    if (Math.abs(totalWeight - 100) > 0.01) {
      setResult({
        type: 'warning',
        title: '<span class="text-orange-600">Weight Warning</span>',
        content: '<p class="text-orange-600 font-semibold">Warning: Weights don\'t add up to 100%.</p>'
      });
      setShowResult(true);
      return;
    }

    // If all scores are provided, show final module percentage
    if (allScoresProvided) {
      const finalModulePercentage = totalWeightedScore;
      const passStatus = finalModulePercentage >= PASS_RATE ? 'PASS' : 'FAIL';
      const statusColor = finalModulePercentage >= PASS_RATE ? 'text-green-600' : 'text-red-600';
      
      setResult({
        type: finalModulePercentage >= PASS_RATE ? 'success' : 'error',
        title: `<span class="${statusColor}">Final Module Grade</span>`,
        content: `<h2 class="text-4xl font-bold text-indigo-600 my-3">${finalModulePercentage.toFixed(2)}%</h2>
                 <p class="text-gray-700 mb-2">Your final module grade is <strong>${finalModulePercentage.toFixed(2)}%</strong></p>
                 <p class="text-xl font-bold ${statusColor}">${passStatus}</p>`
      });
      setShowResult(true);
      return;
    }

    if (finalAssessmentWeight === 0) {
      setResult({
        type: 'error',
        title: '<span class="text-red-600">Calculation Error</span>',
        content: '<p class="text-red-600 font-semibold">Leave \'Your Score\' blank for one assessment to calculate.</p>'
      });
      setShowResult(true);
      return;
    }

    // Calculate required score for remaining assessment
    const pointsNeeded = PASS_RATE - currentWeightedScore;

    if (pointsNeeded <= 0) {
      setResult({
        type: 'success',
        title: '<span class="text-green-600">Sub-minimums Met!</span>',
        content: `<p class="text-gray-700">You already have enough to pass the module overall. However, you must still meet the final assessment's sub-minimum.</p>
                 <p class="text-gray-700 mt-3">You need to score at least:</p>
                 <h2 class="text-4xl font-bold text-indigo-600 my-2">${OSA_SUBMINIMUM.toFixed(2)}%</h2>
                 <p class="text-gray-600">(A raw mark of <strong>${(OSA_SUBMINIMUM / 100 * finalAssessmentOutOf).toFixed(2)} / ${finalAssessmentOutOf}</strong> on the <strong>${finalAssessmentName}</strong>)</p>`
      });
    } else {
      const requiredPercent = (pointsNeeded / finalAssessmentWeight) * 100;

      if (requiredPercent < OSA_SUBMINIMUM) {
        const finalGradeWithSubminimum = currentWeightedScore + (OSA_SUBMINIMUM / 100 * finalAssessmentWeight);
        setResult({
          type: 'warning',
          title: '<span class="text-orange-600">Sub-minimum Required</span>',
          content: `<p class="text-gray-700 mb-2">To pass the module, you would only need ${requiredPercent.toFixed(2)}%.</p>
                   <p class="text-orange-600 font-semibold mb-3">However, you MUST achieve the sub-minimum of ${OSA_SUBMINIMUM}%.</p>
                   <p class="text-gray-700">Therefore, you need to score at least:</p>
                   <h2 class="text-4xl font-bold text-indigo-600 my-2">${OSA_SUBMINIMUM.toFixed(2)}%</h2>
                   <p class="text-gray-600">(A raw mark of <strong>${(OSA_SUBMINIMUM / 100 * finalAssessmentOutOf).toFixed(2)} / ${finalAssessmentOutOf}</strong> on the <strong>${finalAssessmentName}</strong>)</p>
                   <p class="text-gray-700 mt-3">This will give you a final module grade of <strong>${finalGradeWithSubminimum.toFixed(2)}%</strong>.</p>`
        });
      } else {
        const requiredMarks = (requiredPercent / 100) * finalAssessmentOutOf;
        const resultType = requiredPercent > 100 ? 'error' : 'info';
        
        let content = `<p class="text-gray-700 mb-2">To pass the module (at <strong>${PASS_RATE}%</strong>), you need this score on your <strong>${finalAssessmentName}</strong>:</p>
                      <h2 class="text-4xl font-bold text-indigo-600 mb-3">${requiredPercent.toFixed(2)}%</h2>
                      <p class="text-gray-600">(That's a raw mark of <strong>${requiredMarks.toFixed(2)} / ${finalAssessmentOutOf}</strong>)</p>`;

        if (requiredPercent > 100) {
          content += `<p class="mt-4 text-red-600 font-semibold">Unfortunately, it is not possible to achieve the pass rate.</p>`;
        }

        setResult({
          type: resultType,
          title: requiredPercent > 100 ? '<span class="text-red-600">Not Achievable</span>' : '<span class="text-indigo-600">Score Needed</span>',
          content
        });
      }
    }

    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Module Pass Rate Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Enter your marks to see the score needed on your final assessment to pass, including all sub-minimum rules.
          </p>
        </div>

        {/* Assessment Headers (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-2 items-center px-3 pb-3 mb-4 border-b border-gray-200">
          <div className="col-span-4 font-semibold text-sm text-gray-600">Assessment Name</div>
          <div className="col-span-2 font-semibold text-sm text-gray-600 text-center">Your Score</div>
          <div className="col-span-2 font-semibold text-sm text-gray-600 text-center">Out Of</div>
          <div className="col-span-3 font-semibold text-sm text-gray-600 text-center">Weight (%)</div>
          <div className="col-span-1"></div>
        </div>

        {/* Assessment Rows */}
        <div className="space-y-4 mb-6">
          {assessments.map((assessment, index) => (
            <AssessmentRow
              key={assessment.id}
              assessment={assessment}
              onUpdate={updateAssessment}
              onRemove={removeAssessment}
              canRemove={assessments.length > 1}
              errors={errors}
            />
          ))}
        </div>

        {/* Add Assessment Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={addAssessment}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            Add Another Assessment
          </button>
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <button
            onClick={validateAndCalculate}
            className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
          >
            Calculate Score Needed to Pass
          </button>
        </div>

        {/* Result Display */}
        <ResultDisplay result={result} show={showResult} />

        {/* Made by attribution */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Made by <span className="font-semibold text-gray-700">Napoleon Syntax</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCalculator;
