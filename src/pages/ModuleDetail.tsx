import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { getModuleByCode } from '@/data/modules';
import { getReadingsByModule } from '@/data/readings';
import { getPolicyById } from '@/lib/policies';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, BookOpen, Calculator, FileText, Info } from 'lucide-react';

const ModuleDetail = () => {
  const { code } = useParams<{ code: string }>();
  const module = code ? getModuleByCode(code) : undefined;
  const readings = module ? getReadingsByModule(module.code) : [];
  const policy = module ? getPolicyById(module.assessmentPolicyId) : undefined;

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>Module not found</AlertDescription>
          </Alert>
        </main>
      </div>
    );
  }

  const prescribedReadings = readings.filter(r => r.type === 'PRESCRIBED');
  const recommendedReadings = readings.filter(r => r.type === 'RECOMMENDED');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Link to="/modules">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{module.code}</h1>
                <h2 className="text-2xl text-muted-foreground">{module.title}</h2>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {module.credits} Credits
              </Badge>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline">Year {module.year}</Badge>
              <Badge variant="outline">Semester {module.semester}</Badge>
              {module.isCapstone && <Badge>Capstone Module</Badge>}
            </div>

            {module.description && (
              <p className="text-muted-foreground mt-4">{module.description}</p>
            )}
          </div>

          {/* Assessment Policy */}
          {policy && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Assessment Structure
                </CardTitle>
                <CardDescription>{policy.displayName} Pattern</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {policy.assessments.map(assessment => (
                    <div key={assessment.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">{assessment.label}</div>
                        <div className="text-sm text-muted-foreground">
                          Out of {assessment.outOf}
                        </div>
                      </div>
                      <Badge variant="secondary">{assessment.weight}%</Badge>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Sub-Minimum Requirements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {policy.subMinimums.map((rule, idx) => (
                      <li key={idx}>
                        {rule.scope === 'formative-group' && `Formative assessments: ${rule.value}% combined minimum`}
                        {rule.scope === 'osa' && `OSA: ${rule.value}% minimum`}
                      </li>
                    ))}
                  </ul>
                </div>

                {policy.notes && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>{policy.notes}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          {/* Prescribed Readings */}
          {prescribedReadings.length > 0 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Prescribed Readings
                </CardTitle>
                <CardDescription>Required textbooks for this module</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescribedReadings.map(reading => (
                    <div key={reading.id} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-1">{reading.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{reading.authors}</p>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        {reading.edition && <span>Edition: {reading.edition}</span>}
                        {reading.year && <span>• {reading.year}</span>}
                        {reading.publisher && <span>• {reading.publisher}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommended Readings */}
          {recommendedReadings.length > 0 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recommended Readings
                </CardTitle>
                <CardDescription>Additional resources to enhance your understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendedReadings.map(reading => (
                    <div key={reading.id} className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">{reading.title}</h4>
                      <p className="text-xs text-muted-foreground">{reading.authors}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Link to="/assessments" className="flex-1">
                  <Button className="w-full">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Required Marks
                  </Button>
                </Link>
                <Link to="/readings" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View All Readings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ModuleDetail;
