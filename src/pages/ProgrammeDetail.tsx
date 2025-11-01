import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { QUALIFICATIONS } from '@/data/qualifications';
import { getModulesByQualification } from '@/data/modules';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Clock, Award } from 'lucide-react';

const ProgrammeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const qualification = QUALIFICATIONS.find(q => q.id === id);
  const modules = qualification ? getModulesByQualification(qualification.id) : [];

  if (!qualification) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <p className="text-muted-foreground">Programme not found</p>
          </div>
        </div>
      </>
    );
  }

  // Group modules by year and semester
  const groupedModules = modules.reduce((acc, module) => {
    const key = `Year ${module.year} - Semester ${module.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(module);
    return acc;
  }, {} as Record<string, typeof modules>);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Programme Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-lg px-4 py-1">
                NQF Level {qualification.nqf_level}
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {qualification.total_credits} Credits
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {qualification.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {qualification.faculty}
            </p>
            {qualification.description && (
              <p className="text-muted-foreground max-w-4xl">
                {qualification.description}
              </p>
            )}
          </div>

          {/* Programme Information Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{qualification.duration_years} {qualification.duration_years === 1 ? 'Year' : 'Years'}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  SAQA ID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{qualification.saqa_id || 'N/A'}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Total Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{modules.length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          {qualification.career_outcomes && qualification.career_outcomes.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Career Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {qualification.career_outcomes.map((outcome, idx) => (
                    <li key={idx} className="text-muted-foreground">{outcome}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Programme Structure - Modules by Year/Semester */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              Programme Structure
            </h2>

            {Object.entries(groupedModules).sort().map(([period, periodModules]) => (
              <Card key={period} className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl">{period}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {periodModules.map(module => (
                      <Link
                        key={module.code}
                        to={`/module/${module.code}`}
                        className="block p-4 border rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{module.title}</h3>
                          <Badge variant="secondary">{module.credits} Credits</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{module.code}</p>
                        {module.module_type && (
                          <Badge variant="outline" className="text-xs">
                            {module.module_type}
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {modules.length === 0 && (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  Module information coming soon.
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/assessments"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Calculate Your Grades
            </Link>
            <Link
              to="/workspace"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Get AI Help
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammeDetail;
