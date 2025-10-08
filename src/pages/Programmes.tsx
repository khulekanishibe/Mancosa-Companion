import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { QUALIFICATIONS, getAllLevels, getAllFaculties } from '@/data/qualifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Search, BookOpen, Briefcase, Award } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Programmes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQualifications = QUALIFICATIONS.filter(qual =>
    qual.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    qual.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    qual.faculty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const higherCerts = filteredQualifications.filter(q => q.level === 'Higher Certificate');
  const undergrad = filteredQualifications.filter(q => q.level === 'Undergraduate Degree');
  const postgrad = filteredQualifications.filter(q => q.level === 'Postgraduate Diploma' || q.level === 'Honours Degree' || q.level === 'Masters Degree');

  const QualificationCard = ({ qualification }: { qualification: typeof QUALIFICATIONS[0] }) => (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                NQF {qualification.nqf_level}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {qualification.total_credits} Credits
              </Badge>
            </div>
            <CardTitle className="text-lg mb-1">{qualification.name}</CardTitle>
            <CardDescription className="text-sm">{qualification.faculty}</CardDescription>
          </div>
          <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {qualification.description}
        </p>

        <Accordion type="single" collapsible className="w-full">
          {qualification.career_outcomes && qualification.career_outcomes.length > 0 && (
            <AccordionItem value="careers">
              <AccordionTrigger className="text-sm py-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Career Outcomes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 ml-6">
                  {qualification.career_outcomes.map((career, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground list-disc">
                      {career}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem value="details">
            <AccordionTrigger className="text-sm py-2">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Programme Details</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{qualification.duration_years} {qualification.duration_years === 1 ? 'Year' : 'Years'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SAQA ID:</span>
                  <span className="font-medium">{qualification.saqa_id}</span>
                </div>
                {qualification.entry_requirements && (
                  <div className="pt-2 border-t">
                    <p className="text-muted-foreground mb-1">Entry Requirements:</p>
                    <p className="text-xs">{qualification.entry_requirements}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Programme Catalogue</h1>
          <p className="text-muted-foreground">
            Explore MANCOSA's comprehensive range of qualifications from Higher Certificates to Masters Degrees
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search programmes by name, faculty, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Programmes</TabsTrigger>
            <TabsTrigger value="higher-cert">Higher Certificates</TabsTrigger>
            <TabsTrigger value="undergrad">Undergraduate</TabsTrigger>
            <TabsTrigger value="postgrad">Postgraduate</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {filteredQualifications.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No programmes found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredQualifications.map(qual => (
                  <QualificationCard key={qual.id} qualification={qual} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="higher-cert" className="mt-6">
            {higherCerts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No Higher Certificates found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {higherCerts.map(qual => (
                  <QualificationCard key={qual.id} qualification={qual} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="undergrad" className="mt-6">
            {undergrad.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No Undergraduate degrees found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {undergrad.map(qual => (
                  <QualificationCard key={qual.id} qualification={qual} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="postgrad" className="mt-6">
            {postgrad.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No Postgraduate qualifications found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {postgrad.map(qual => (
                  <QualificationCard key={qual.id} qualification={qual} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Programmes;
