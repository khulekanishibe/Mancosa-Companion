import React from 'react';
import EnhancedCalculator from '@/components/EnhancedCalculator';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EnhancedCalculator />
    </div>
  );
};

export default Index;
