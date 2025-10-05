import React from 'react';
import Navigation from '@/components/Navigation';
import EnhancedCalculator from '@/components/EnhancedCalculator';

const Assessments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Assessment Calculator</h1>
          <p className="text-muted-foreground">
            Calculate what you need to pass and track your progress towards distinction
          </p>
        </div>
        <EnhancedCalculator />
      </main>
    </div>
  );
};

export default Assessments;
