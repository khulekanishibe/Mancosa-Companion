import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const scheduleData = [
  { date: '2024-10-28', event: 'Financial Accounting (FA2) - Due' },
  { date: '2024-11-15', event: 'Project Management (OSA) - Exam' },
  { date: '2024-11-20', event: 'Business Law (OSA) - Exam' },
  { date: '2024-12-05', event: 'Final Grades Released' },
  { date: '2025-01-15', event: 'Re-write Exams Begin' },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Academic Schedule
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upcoming deadlines, exam dates, and important events.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              This is a placeholder schedule. All dates are subject to change.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {scheduleData.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                  <div className="font-semibold text-primary w-32">{item.date}</div>
                  <div className="text-foreground">{item.event}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Schedule;
