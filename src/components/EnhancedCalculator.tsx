import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import DistinctionPanel from '@/components/DistinctionPanel';
import {
  calculateModuleResult,
  calculateRequiredOSA,
  calculateWeightedScore,
  PASS_RATE,
  DISTINCTION_RATE,
  OSA_SUBMINIMUM,
  FORMATIVE_SUBMINIMUM,
  type Assessment
} from '@/lib/calculator';
import {
  Classification,
  CLASSIFICATION_STYLES,
  getClassificationLabel,
  getClassificationStyles
} from '@/lib/classification';

const EnhancedCalculator: React.FC = () => {
  const [kcqScore, setKcqScore] = useState<string>('7');
  const [caseStudyScore, setCaseStudyScore] = useState<string>('22');
  const [osaScore, setOsaScore] = useState<number>(52);
  
  const KCQ_TOTAL = 10;
  const CASE_STUDY_TOTAL = 30;
  const OSA_TOTAL = 100;

  const [result, setResult] = useState<{
    finalMark: number;
    classification: Classification;
    message: string;
  } | null>(null);

  const [distinctionData, setDistinctionData] = useState<{
    canAchieveDistinction: boolean;
    canAchieveCondonedDistinction: boolean;
    distinctionRequiredOSA?: number;
    condonedDistinctionRequiredOSA?: number;
  } | null>(null);

  useEffect(() => {
    const kcq = parseFloat(kcqScore) || 0;
    const caseStudy = parseFloat(caseStudyScore) || 0;

    // Check if KCQ and Case Study are valid
    if (kcq < 0 || kcq > KCQ_TOTAL || caseStudy < 0 || caseStudy > CASE_STUDY_TOTAL) {
      setResult(null);
      setDistinctionData(null);
      return;
    }

    // Build assessments array for current result calculation
    const assessments: Assessment[] = [
      { id: 'kcq', name: 'Knowledge Check Quiz', score: kcqScore, outOf: String(KCQ_TOTAL), weight: '10' },
      { id: 'case-study', name: 'Case Study', score: caseStudyScore, outOf: String(CASE_STUDY_TOTAL), weight: '30' },
      { id: 'osa', name: 'Online Summative Assessment', score: String(osaScore), outOf: String(OSA_TOTAL), weight: '60' }
    ];

    // Use centralized calculation logic for current grade
    const calculationResult = calculateModuleResult(assessments);
    
    if (!calculationResult) {
      setResult(null);
      setDistinctionData(null);
      return;
    }

    // Also calculate distinction scenarios (without OSA to get required values)
    const assessmentsForScenarios: Assessment[] = [
      { id: 'kcq', name: 'Knowledge Check Quiz', score: kcqScore, outOf: String(KCQ_TOTAL), weight: '10' },
      { id: 'case-study', name: 'Case Study', score: caseStudyScore, outOf: String(CASE_STUDY_TOTAL), weight: '30' },
      { id: 'osa', name: 'Online Summative Assessment', score: '', outOf: String(OSA_TOTAL), weight: '60' }
    ];
    
    const scenarioResult = calculateModuleResult(assessmentsForScenarios);
    
    // Store distinction data for the panel from scenario calculation
    if (scenarioResult) {
      setDistinctionData({
        canAchieveDistinction: scenarioResult.canAchieveDistinction,
        canAchieveCondonedDistinction: scenarioResult.canAchieveCondonedDistinction,
        distinctionRequiredOSA: scenarioResult.distinctionRequiredOSA,
        condonedDistinctionRequiredOSA: scenarioResult.condonedDistinctionRequiredOSA,
      });
    } else {
      setDistinctionData(null);
    }

    // Determine message and classification
    let message = '';
    const classification = calculationResult.classification;

    // Check formative sub-minimum first
    if (!calculationResult.meetsFormativeSubMinimum) {
      const formativePercentage = (((kcq + caseStudy) / (KCQ_TOTAL + CASE_STUDY_TOTAL)) * 100);
      message = `Formative sub-minimum not met (${formativePercentage.toFixed(1)}% < 50%). Automatic fail regardless of OSA score.`;
    } else if (!calculationResult.meetsOSASubMinimum) {
      message = `OSA sub-minimum not met (${osaScore}% < 30%). You must score at least 30% on the OSA.`;
    } else {
      // Generate message based on classification
      switch (classification) {
        case Classification.DISTINCTION:
          message = 'Distinction achieved! Excellent work! 🎉';
          break;
        case Classification.CONDONED_DISTINCTION:
          message = 'Condoned distinction achieved! Great job! 🌟';
          break;
        case Classification.PASS:
          message = 'You are passing this module! 👍';
          break;
        case Classification.FAIL:
        case Classification.CONDITION_NOT_MET:
        default:
          message = 'Below passing threshold. You need a higher OSA score.';
          break;
      }
    }

    setResult({
      finalMark: calculationResult.finalGrade,
      classification,
      message
    });
  }, [kcqScore, caseStudyScore, osaScore]);

  const calculateMinimumOsa = (target: 'pass' | 'distinction') => {
    const kcq = parseFloat(kcqScore) || 0;
    const caseStudy = parseFloat(caseStudyScore) || 0;

    if (kcq < 0 || kcq > KCQ_TOTAL || caseStudy < 0 || caseStudy > CASE_STUDY_TOTAL) {
      return;
    }

    // Build assessments array without OSA score to calculate what's needed
    const assessments: Assessment[] = [
      { id: 'kcq', name: 'Knowledge Check Quiz', score: kcqScore, outOf: String(KCQ_TOTAL), weight: '10' },
      { id: 'case-study', name: 'Case Study', score: caseStudyScore, outOf: String(CASE_STUDY_TOTAL), weight: '30' },
      { id: 'osa', name: 'Online Summative Assessment', score: '', outOf: String(OSA_TOTAL), weight: '60' }
    ];

    // Calculate current weighted score
    const { currentWeightedScore } = calculateWeightedScore(assessments.filter(a => a.id !== 'osa'));
    
    // Use centralized function to calculate required OSA
    const targetGrade = target === 'pass' ? PASS_RATE : DISTINCTION_RATE;
    const required = calculateRequiredOSA(currentWeightedScore, 60, OSA_TOTAL, targetGrade);
    
    if (!required.achievable || required.percentage > 100) {
      setOsaScore(100);
    } else {
      setOsaScore(Math.max(Math.ceil(OSA_SUBMINIMUM), required.percentage));
    }
  };

  const getStatusIcon = () => {
    if (!result) return null;
    
    const classification = result.classification;
    const iconClass = getClassificationStyles(classification).iconClassName;
    
    if (classification === Classification.FAIL || classification === Classification.CONDITION_NOT_MET) {
      return <XCircle className={`h-8 w-8 ${iconClass}`} />;
    } else if (classification === Classification.DISTINCTION) {
      return <CheckCircle2 className={`h-8 w-8 ${iconClass}`} />;
    } else {
      return <CheckCircle2 className={`h-8 w-8 ${iconClass}`} />;
    }
  };

  const getBackgroundColor = () => {
    if (!result) return 'bg-gray-50';
    return getClassificationStyles(result.classification).bgClassName;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            MANCOSA Mark Calculator
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            BCOM ITM Student Companion
          </p>
          <p className="text-sm text-gray-500">
            Calculate your required OSA mark to pass or achieve distinction
          </p>
          <p className="text-xs text-blue-600 mt-2 font-medium">
            ✓ Includes distinction scenario calculations
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Formative Assessments (40%)</CardTitle>
            <CardDescription>
              Enter your scores for the Knowledge Check Quiz and Case Study
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kcq">Knowledge Check Quiz (KCQ)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="kcq"
                    type="number"
                    min="0"
                    max={KCQ_TOTAL}
                    step="0.5"
                    value={kcqScore}
                    onChange={(e) => setKcqScore(e.target.value)}
                    className="text-lg"
                  />
                  <span className="text-gray-600 whitespace-nowrap">/ {KCQ_TOTAL}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="caseStudy">Case Study / Assignment</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="caseStudy"
                    type="number"
                    min="0"
                    max={CASE_STUDY_TOTAL}
                    step="0.5"
                    value={caseStudyScore}
                    onChange={(e) => setCaseStudyScore(e.target.value)}
                    className="text-lg"
                  />
                  <span className="text-gray-600 whitespace-nowrap">/ {CASE_STUDY_TOTAL}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Online Summative Assessment - OSA (60%)</CardTitle>
            <CardDescription>
              Use the slider to see what OSA mark you need
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>OSA Score</Label>
                <span className="text-3xl font-bold text-emerald-600">
                  {osaScore}%
                </span>
              </div>
              
              <Slider
                value={[osaScore]}
                onValueChange={(value) => setOsaScore(value[0])}
                min={0}
                max={100}
                step={1}
                className="py-4"
              />
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <Button
                onClick={() => calculateMinimumOsa('pass')}
                variant="outline"
                className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                Calculate Min to Pass (50%)
              </Button>
              
              <Button
                onClick={() => calculateMinimumOsa('distinction')}
                variant="outline"
                className="w-full border-emerald-700 text-emerald-800 hover:bg-emerald-50"
              >
                Calculate for Distinction (75%)
              </Button>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card className={`border-2 ${getBackgroundColor()}`}>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {getStatusIcon()}
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Your Final Mark</p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {result.finalMark.toFixed(1)}%
                  </p>
                  <p className={`text-xl font-bold mb-1 ${getClassificationStyles(result.classification).className}`}>
                    {getClassificationLabel(result.classification)}
                  </p>
                  <p className="text-base text-gray-700">
                    {result.message}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Pass Threshold</p>
                    <p className="text-lg font-semibold text-gray-700">50%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Your Mark</p>
                    <p className={`text-lg font-semibold ${getClassificationStyles(result.classification).className}`}>
                      {result.finalMark.toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Distinction</p>
                    <p className="text-lg font-semibold text-gray-700">75%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Show DistinctionPanel when we have distinction scenarios to display */}
        {distinctionData && (distinctionData.distinctionRequiredOSA !== undefined || distinctionData.condonedDistinctionRequiredOSA !== undefined) && (
          <DistinctionPanel
            canAchieveDistinction={distinctionData.canAchieveDistinction}
            canAchieveCondonedDistinction={distinctionData.canAchieveCondonedDistinction}
            distinctionRequiredOSA={distinctionData.distinctionRequiredOSA}
            condonedDistinctionRequiredOSA={distinctionData.condonedDistinctionRequiredOSA}
            osaOutOf={OSA_TOTAL}
          />
        )}

        <Alert className="mt-6">
          <AlertDescription className="text-sm">
            <strong>Sub-minimum Requirements:</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Formative Assessments (KCQ + Case Study): Must achieve at least 50%</li>
              <li>OSA: Must achieve at least 30%</li>
              <li>Overall: Must achieve at least 50% to pass, 75% for distinction</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="text-center mt-8 pt-6 border-t">
          <p className="text-sm text-gray-500">
            Made by <span className="font-semibold text-gray-700">Napoleon Syntax</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCalculator;
