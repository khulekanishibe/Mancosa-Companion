import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { getModuleByCode } from '@/data/modules';
import { getReadingsByModule } from '@/data/readings';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, BookMarked, Library } from 'lucide-react';

const ModuleDetail = () => {
  const { code } = useParams<{ code: string }>();
  const module = code ? getModuleByCode(code) : undefined;
  const readings = code ? getReadingsByModule(code) : [];

  if (!module) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <p className="text-muted-foreground">Module not found</p>
          </div>
        </div>
      </>
    );
  }

  const prescribedReadings = readings.filter(r => r.type === 'PRESCRIBED');
  const recommendedReadings = readings.filter(r => r.type === 'RECOMMENDED');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Module Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-lg px-4 py-1">
                {module.code}
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {module.credits} Credits
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                Year {module.year} - Semester {module.semester}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {module.title}
            </h1>
            {module.qualification && (
              <p className="text-xl text-muted-foreground mb-4">
                {module.qualification}
              </p>
            )}
          </div>

          {/* Module Information */}
          {module.description && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Module Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          )}

          {module.module_focus && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Module Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{module.module_focus}</p>
              </CardContent>
            </Card>
          )}

          {/* NotebookLM Resources */}
          {module.notebook_link && (
            <Card className="mb-8 border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-primary" />
                  AI Study Guide Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Access the AI-powered NotebookLM study guide for this module
                </p>
                <a
                  href={module.notebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Open NotebookLM Study Guide
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          )}

          {/* Prescribed Readings */}
          {prescribedReadings.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Prescribed Readings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescribedReadings.map(reading => (
                    <div key={reading.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">{reading.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Authors:</strong> {reading.authors}
                      </p>
                      {reading.edition && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Edition:</strong> {reading.edition}
                        </p>
                      )}
                      {reading.year && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Year:</strong> {reading.year}
                        </p>
                      )}
                      {reading.publisher && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Publisher:</strong> {reading.publisher}
                        </p>
                      )}
                      {reading.isbn && (
                        <p className="text-sm text-muted-foreground">
                          <strong>ISBN:</strong> {reading.isbn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommended Readings */}
          {recommendedReadings.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Library className="h-5 w-5" />
                  Recommended Readings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedReadings.map(reading => (
                    <div key={reading.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">{reading.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Authors:</strong> {reading.authors}
                      </p>
                      {reading.edition && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Edition:</strong> {reading.edition}
                        </p>
                      )}
                      {reading.year && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Year:</strong> {reading.year}
                        </p>
                      )}
                      {reading.publisher && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Publisher:</strong> {reading.publisher}
                        </p>
                      )}
                      {reading.isbn && (
                        <p className="text-sm text-muted-foreground">
                          <strong>ISBN:</strong> {reading.isbn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {readings.length === 0 && (
            <Card className="mb-8">
              <CardContent className="py-8 text-center text-muted-foreground">
                No readings available for this module yet.
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/workspace"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get AI Help with Assignments
            </Link>
            <Link
              to="/assessments"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Calculate Your Grades
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleDetail;
