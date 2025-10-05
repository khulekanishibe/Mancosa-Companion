import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const EnhancedCalculator: React.FC = () => {
  const [kcqScore, setKcqScore] = useState<string>('7');
  const [caseStudyScore, setCaseStudyScore] = useState<string>('22');
  const [osaScore, setOsaScore] = useState<number>(52);
  
  const KCQ_TOTAL = 10;
  const CASE_STUDY_TOTAL = 30;
  const OSA_TOTAL = 100;
  const PASS_THRESHOLD = 50;
  const DISTINCTION_THRESHOLD = 75;
  const FORMATIVE_SUBMINIMUM = 50;
  const OSA_SUBMINIMUM = 30;

  const [result, setResult] = useState<{
    finalMark: number;
    status: 'fail' | 'pass' | 'distinction';
    message: string;
    color: string;
  } | null>(null);

  const calculateFinalMark = (kcq: number, caseStudy: number, osa: number): number => {
    // Formative Total = (KCQ + Case Study) / 40 × 40
    const formativeTotal = ((kcq + caseStudy) / (KCQ_TOTAL + CASE_STUDY_TOTAL)) * 40;
    
    // OSA Contribution = (OSA Mark / 100) × 60
    const osaContribution = (osa / OSA_TOTAL) * 60;
    
    // Final Mark = Formative Total + OSA Contribution
    return formativeTotal + osaContribution;
  };

  const checkSubminimums = (kcq: number, caseStudy: number, osa: number): boolean => {
    const formativePercentage = ((kcq + caseStudy) / (KCQ_TOTAL + CASE_STUDY_TOTAL)) * 100;
    return formativePercentage >= FORMATIVE_SUBMINIMUM && osa >= OSA_SUBMINIMUM;
  };

  useEffect(() => {
    const kcq = parseFloat(kcqScore) || 0;
    const caseStudy = parseFloat(caseStudyScore) || 0;

    // Check if KCQ and Case Study are valid
    if (kcq < 0 || kcq > KCQ_TOTAL || caseStudy < 0 || caseStudy > CASE_STUDY_TOTAL) {
      setResult(null);
      return;
    }

    const formativePercentage = ((kcq + caseStudy) / (KCQ_TOTAL + CASE_STUDY_TOTAL)) * 100;
    
    // Check formative sub-minimum
    if (formativePercentage < FORMATIVE_SUBMINIMUM) {
      setResult({
        finalMark: 0,
        status: 'fail',
        message: `Formative sub-minimum not met (${formativePercentage.toFixed(1)}% < 50%). Automatic fail regardless of OSA score.`,
        color: 'text-red-600'
      });
      return;
    }

    const finalMark = calculateFinalMark(kcq, caseStudy, osaScore);
    
    // Check OSA sub-minimum
    if (osaScore < OSA_SUBMINIMUM) {
      setResult({
        finalMark,
        status: 'fail',
        message: `OSA sub-minimum not met (${osaScore}% < 30%). You must score at least 30% on the OSA.`,
        color: 'text-red-600'
      });
      return;
    }

    // Check pass/fail/distinction
    if (finalMark >= DISTINCTION_THRESHOLD) {
      setResult({
        finalMark,
        status: 'distinction',
        message: 'Distinction achieved! Excellent work! 🎉',
        color: 'text-green-600'
      });
    } else if (finalMark >= PASS_THRESHOLD) {
      setResult({
        finalMark,
        status: 'pass',
        message: 'You are passing this module! 👍',
        color: 'text-yellow-600'
      });
    } else {
      setResult({
        finalMark,
        status: 'fail',
        message: 'Below passing threshold. You need a higher OSA score.',
        color: 'text-red-600'
      });
    }
  }, [kcqScore, caseStudyScore, osaScore]);

  const calculateMinimumOsa = (target: 'pass' | 'distinction') => {
    const kcq = parseFloat(kcqScore) || 0;
    const caseStudy = parseFloat(caseStudyScore) || 0;

    if (kcq < 0 || kcq > KCQ_TOTAL || caseStudy < 0 || caseStudy > CASE_STUDY_TOTAL) {
      return;
    }

    const formativeTotal = ((kcq + caseStudy) / (KCQ_TOTAL + CASE_STUDY_TOTAL)) * 40;
    const targetMark = target === 'pass' ? PASS_THRESHOLD : DISTINCTION_THRESHOLD;
    const osaNeeded = ((targetMark - formativeTotal) / 60) * 100;

    // Ensure it meets OSA sub-minimum
    const finalOsa = Math.max(osaNeeded, OSA_SUBMINIMUM);
    
    if (finalOsa > 100) {
      setOsaScore(100);
    } else {
      setOsaScore(Math.round(finalOsa));
    }
  };

  const getStatusIcon = () => {
    if (!result) return null;
    
    switch (result.status) {
      case 'distinction':
      case 'pass':
        return <CheckCircle2 className="h-8 w-8 text-green-600" />;
      case 'fail':
        return <XCircle className="h-8 w-8 text-red-600" />;
      default:
        return <AlertTriangle className="h-8 w-8 text-yellow-600" />;
    }
  };

  const getBackgroundColor = () => {
    if (!result) return 'bg-gray-50';
    
    switch (result.status) {
      case 'distinction':
        return 'bg-green-50 border-green-200';
      case 'pass':
        return 'bg-yellow-50 border-yellow-200';
      case 'fail':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50';
    }
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
                <span className="text-3xl font-bold text-green-600">
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
                className="w-full border-green-600 text-green-700 hover:bg-green-50"
              >
                Calculate Min to Pass (50%)
              </Button>
              
              <Button
                onClick={() => calculateMinimumOsa('distinction')}
                variant="outline"
                className="w-full border-blue-600 text-blue-700 hover:bg-blue-50"
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
                  <p className={`text-lg font-semibold ${result.color}`}>
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
                    <p className={`text-lg font-semibold ${result.color}`}>
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
