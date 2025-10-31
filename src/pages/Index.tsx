import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, Library, HelpCircle } from 'lucide-react';
import mascotLogo from '@/assets/mancosa-hub-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#145A32] to-[#2ECC71] rounded-full p-4 flex items-center justify-center">
            <img
              src={mascotLogo}
              alt="MANCOSA Student Hub"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to MANCOSA Companion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive toolkit for academic success at MANCOSA
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/assessments" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Grade Calculator</CardTitle>
                <CardDescription>
                  Calculate required marks for your target grade
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/modules" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modules</CardTitle>
                <CardDescription>
                  Browse BCOM IT program modules and requirements
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/readings" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Library className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Readings</CardTitle>
                <CardDescription>
                  Access prescribed and recommended textbooks
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/resources" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Resources</CardTitle>
                <CardDescription>
                  Study guides, tips, and helpful resources
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* About Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>About This Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                MANCOSA Companion is designed to help BCOM Information Technology students
                manage their academic journey with tools for grade calculation, module information,
                and study resources.
              </p>
              <div className="flex gap-4">
                <Link to="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
                <Link to="/assessments">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
