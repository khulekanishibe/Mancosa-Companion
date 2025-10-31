import React from 'react';
import Navigation from '@/components/Navigation';
import EnhancedCalculator from '@/components/EnhancedCalculator';
import { Bookmark, Star } from 'lucide-react';

const Assessments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">OSA Calculator</h1>
            <p className="text-muted-foreground">
              Calculate what you need to pass and track your progress towards distinction
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Star className="h-5 w-5" />
            </button>
          </div>
        </div>
        <EnhancedCalculator />
      </main>
    </div>
  );
};

export default Assessments;
