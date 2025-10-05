import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Users, BookOpen, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from '@/components/Navigation';

const Resources: React.FC = () => {
  const notebookLMGroups = [
    {
      name: 'Principles of Project Management',
      url: 'https://notebooklm.google.com/notebook/ff3cfdbb-61d4-47f2-9659-1eeeffdaad9c',
    },
    {
      name: 'Strategic Information Technology Management',
      url: 'https://notebooklm.google.com/notebook/3fc49705-b188-4196-aa99-59617bbee9e8',
    },
    {
      name: 'Information Systems',
      url: 'https://notebooklm.google.com/notebook/89ef2256-5969-4bd7-89b9-d0e52db0f53e',
    },
    {
      name: 'Principles of E-commerce',
      url: 'https://notebooklm.google.com/notebook/d05b8126-2f1d-4e97-80e6-9dc0c2401e52',
    },
  ];

  const externalResources = [
    {
      name: 'MANCOSA Official Website',
      url: 'https://www.mancosa.co.za/programme/',
      description: 'Official MANCOSA programme information',
    },
    {
      name: 'Shesha Books',
      url: 'https://sheshabooks.co.za/books-by-course/mancosa/',
      description: 'MANCOSA prescribed textbooks',
    },
    {
      name: 'Discount Textbooks',
      url: 'https://discounttextbooks.co.za/product-category/mancosa/',
      description: 'Affordable MANCOSA textbooks',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Study Resources</h1>
          <p className="text-lg text-gray-600">
            Community study groups and helpful resources for BCOM ITM students
          </p>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Study Group Guidelines:</strong> Stay on topic, no uploading current assignment/exam questions,
            quality over quantity, respect all contributors, and report issues to group admin.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle>NotebookLM Study Groups</CardTitle>
              </div>
              <CardDescription>
                Collaborative AI-powered study notebooks for current modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {notebookLMGroups.map((group) => (
                  <a
                    key={group.name}
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all group"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-blue-700">
                      {group.name}
                    </span>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-green-600" />
                <CardTitle>External Resources</CardTitle>
              </div>
              <CardDescription>
                Official links and textbook resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {externalResources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-4 border rounded-lg hover:bg-green-50 hover:border-green-300 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900 group-hover:text-green-700">
                        {resource.name}
                      </span>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">{resource.description}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Semester Timetable (November 2025)</CardTitle>
            <CardDescription>OSA schedule for Year 2 modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { module: 'Strategic Information Technology Management', date: '04-Nov-2025', time: '08:00-16:00' },
                { module: 'Principles of Project Management', date: '07-Nov-2025', time: '08:00-16:00' },
                { module: 'Principles of E-Commerce', date: '12-Nov-2025', time: '08:00-16:00' },
                { module: 'Information Systems', date: '17-Nov-2025', time: '08:00-16:00' },
              ].map((item) => (
                <div key={item.module} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                  <span className="font-medium text-gray-900 mb-2 md:mb-0">{item.module}</span>
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm font-semibold text-purple-700">{item.date}</span>
                    <span className="text-sm text-gray-600">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Academic Support</CardTitle>
            <CardDescription>Get help when you need it</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Ask the Academic Platform</h3>
                <p className="text-sm text-gray-600">Academic Faculty Support for module-related queries</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Library Services</h3>
                <p className="text-sm text-gray-600">Access to digital library and research materials</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Module Guides</h3>
                <p className="text-sm text-gray-600">Comprehensive guides for each module available on MANCOSAConnect</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
