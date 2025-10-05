import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Award, BookOpen, Calculator, Info } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">About MANCOSA Companion</h1>
          <p className="text-muted-foreground mb-8">
            Understanding classification rules and assessment policies
          </p>

          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  What is MANCOSA Companion?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  MANCOSA Companion is a comprehensive tool designed for BCom (Information & Technology Management) 
                  students to help calculate required marks, track academic progress, and access module resources.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                    <Calculator className="h-8 w-8 mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">Smart Calculator</h3>
                    <p className="text-sm text-muted-foreground">Calculate required OSA scores and track progress</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                    <BookOpen className="h-8 w-8 mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">Module Resources</h3>
                    <p className="text-sm text-muted-foreground">Access reading lists and study materials</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                    <Award className="h-8 w-8 mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">Distinction Tracking</h3>
                    <p className="text-sm text-muted-foreground">See what's needed for distinction status</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Classification Rules */}
            <Card>
              <CardHeader>
                <CardTitle>Classification Rules</CardTitle>
                <CardDescription>How your final module mark is classified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold text-sm">75%+</div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-600">Distinction</div>
                      <p className="text-sm text-muted-foreground">Outstanding achievement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold text-sm">70-74%</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-600">Condoned Distinction</div>
                      <p className="text-sm text-muted-foreground">High achievement with minor conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold text-sm">50-69%</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">Pass</div>
                      <p className="text-sm text-muted-foreground">Satisfactory completion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold text-sm">Below 50%</div>
                    <div className="flex-1">
                      <div className="font-semibold text-destructive">Fail</div>
                      <p className="text-sm text-muted-foreground">Did not meet minimum requirements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sub-Minimum Rules */}
            <Card>
              <CardHeader>
                <CardTitle>Sub-Minimum Requirements</CardTitle>
                <CardDescription>Critical thresholds you must meet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> Even if your overall mark is above 50%, you can still fail if you don't meet sub-minimum requirements.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Formative Assessment Sub-Minimum (50%)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The combined average of your formative assessments (KCQ + Case Study or FA1 + FA2) must be at least 50%.
                    </p>
                    <div className="bg-muted p-3 rounded text-sm">
                      Example: If you scored 8/10 on KCQ and 20/30 on Case Study, your formative average is (8+20)/(10+30) = 70% ✓
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">2. OSA Sub-Minimum (30% or 40%)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your Online Summative Assessment (OSA) score must meet the minimum threshold:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Year 1 & 2 modules: 30% minimum</li>
                      <li>Year 3 modules: 40% minimum</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Patterns */}
            <Card>
              <CardHeader>
                <CardTitle>Assessment Patterns by Year</CardTitle>
                <CardDescription>Different years have different assessment structures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Year 1</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Formative Assessment 1: 20%</li>
                      <li>Formative Assessment 2: 20%</li>
                      <li>OSA: 60% (30% sub-minimum)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Year 2</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Knowledge Check Quiz: 10%</li>
                      <li>Case Study: 30%</li>
                      <li>OSA: 60% (30% sub-minimum)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Year 3</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Knowledge Check Quiz: 10%</li>
                      <li>Case Study: 30%</li>
                      <li>OSA: 60% (40% sub-minimum - higher!)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credits */}
            <Card>
              <CardHeader>
                <CardTitle>Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Made by <span className="font-semibold text-foreground">Napoleon Syntax</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  This tool is designed to help MANCOSA students plan their studies. Always verify with official MANCOSA policies and your academic advisor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
