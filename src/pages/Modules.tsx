import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';

const Modules: React.FC = () => {
  const year2Modules = [
    {
      name: 'Principles of Information Technology Management',
      credits: 15,
      description: 'Introduction to IT management principles, covering strategic planning, governance, and implementation of IT systems in organizations.',
    },
    {
      name: 'Database Design and Management',
      credits: 15,
      description: 'Comprehensive study of database systems, including design, implementation, and management of relational databases.',
    },
    {
      name: 'Management Accounting',
      credits: 15,
      description: 'Focus on accounting information for managerial decision-making, budgeting, and performance evaluation.',
    },
    {
      name: 'Information Systems',
      credits: 15,
      description: 'Exploration of information systems in organizations, their role in business processes, and their strategic impact.',
    },
    {
      name: 'Strategic Information Technology Management',
      credits: 15,
      description: 'Advanced IT management focusing on strategic alignment, IT governance, and digital transformation.',
    },
    {
      name: 'Principles of E-Commerce',
      credits: 15,
      description: 'Study of electronic commerce, including online business models, digital marketing, and e-commerce technologies.',
    },
    {
      name: 'Advanced Business Statistics',
      credits: 15,
      description: 'Statistical methods for business analysis, including hypothesis testing, regression analysis, and data interpretation.',
    },
    {
      name: 'Principles of Project Management',
      credits: 15,
      description: 'Project management fundamentals, covering planning, execution, monitoring, and closing of projects.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Module Information</h1>
          <p className="text-lg text-gray-600">
            BCOM ITM Programme - Module details and learning outcomes
          </p>
        </div>

        <Tabs defaultValue="year2" className="space-y-6">
          <TabsList>
            <TabsTrigger value="year1">Year 1</TabsTrigger>
            <TabsTrigger value="year2">Year 2</TabsTrigger>
            <TabsTrigger value="year3">Year 3</TabsTrigger>
          </TabsList>

          <TabsContent value="year1" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Year 1 Modules</CardTitle>
                <CardDescription>Foundation modules for BCOM ITM programme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    'Fundamentals of Computer Programming',
                    'Introduction to Business Management',
                    'Microeconomic Essentials',
                    'Analytical Techniques',
                    'Advanced Programming Concepts',
                    'Introduction to Functional Areas of Management',
                    'Macroeconomic Essentials',
                    'Financial Reporting and Analysis',
                  ].map((module) => (
                    <div key={module} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">{module}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="year2" className="space-y-4">
            <div className="grid gap-4">
              {year2Modules.map((module) => (
                <Card key={module.name}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{module.name}</CardTitle>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {module.credits} Credits
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{module.description}</p>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <strong>Assessment Structure:</strong> KCQ (10%), Case Study (30%), OSA (60%)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="year3" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Year 3 Modules</CardTitle>
                <CardDescription>Advanced modules and capstone project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    'Information Technology Services Management',
                    'Principles of Software Engineering',
                    'Auditing',
                    'Systems Analysis and Design',
                    'Information Technology Law and Ethics',
                    'Software Engineering Practice',
                    'Capstone Project',
                  ].map((module) => (
                    <div key={module} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">{module}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Programme Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">NQF Level</p>
                <p className="text-2xl font-bold text-green-700">Level 7</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Credits</p>
                <p className="text-2xl font-bold text-blue-700">360</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-2xl font-bold text-purple-700">3 Years</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Semesters</p>
                <p className="text-2xl font-bold text-orange-700">6</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Modules;
