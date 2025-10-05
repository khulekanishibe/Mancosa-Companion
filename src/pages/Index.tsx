import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, Award, Library, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Welcome to MANCOSA Companion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your complete toolkit for BCom (Information & Technology Management) success
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calculator className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Smart Calculator</CardTitle>
              <CardDescription>
                Calculate exactly what you need to pass or achieve distinction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/assessments">
                <Button className="w-full">
                  Start Calculating
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Module Information</CardTitle>
              <CardDescription>
                Browse the complete catalogue of ITM modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/modules">
                <Button variant="outline" className="w-full">
                  View Modules
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Library className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Reading Lists</CardTitle>
              <CardDescription>
                Access prescribed and recommended textbooks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/readings">
                <Button variant="outline" className="w-full">
                  Browse Readings
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-1">12</div>
            <div className="text-sm text-muted-foreground">Modules</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-1">3</div>
            <div className="text-sm text-muted-foreground">Academic Years</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Textbooks</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-foreground mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Resources</div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6" />
              Aim for Distinction
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Use the distinction tracker to see what scores you need for top grades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/assessments">
              <Button variant="secondary" size="lg">
                Try the Calculator
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Made by <span className="font-semibold text-foreground">Napoleon Syntax</span>
          </p>
          <Link to="/about">
            <Button variant="link" className="mt-2">
              Learn more about classification rules
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
