import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Calendar, Megaphone, Home, FileText, Award, User, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import mascotLogo from '@/assets/mascot-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={mascotLogo} alt="MANCOSA Mascot" className="h-12 w-12" />
            <span className="text-xl font-bold text-foreground">MANCOSA Companion</span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            WELCOME, BCOM IT STUDENT!
          </h1>
        </div>

        {/* Circular Action Buttons */}
        <div className="flex justify-center gap-8 mb-16">
          <Link to="/modules" className="circular-button">
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <span className="text-xs text-center">My Courses</span>
          </Link>
          <Link to="/assessments" className="circular-button">
            <Calendar className="h-8 w-8 mb-2 text-primary" />
            <span className="text-xs text-center">Academic Calendar</span>
          </Link>
          <Link to="/resources" className="circular-button">
            <Megaphone className="h-8 w-8 mb-2 text-primary" />
            <span className="text-xs text-center">Announcements</span>
          </Link>
        </div>

        {/* Latest Updates Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          
          <div className="space-y-4">
            <Card className="card-gradient p-6 border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Module BMIT203 - Assignment 1</h3>
                  <p className="text-sm opacity-90 mb-2">Due Der Dua Sate 17</p>
                </div>
              </div>
              <p className="text-sm opacity-75 text-right">(Due De Due 2,A19)</p>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm p-6 border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg mb-1">New Forum Post in</h3>
                  <p className="text-sm opacity-90">"Cloud Computing"</p>
                </div>
                <img src={mascotLogo} alt="Mascot" className="h-12 w-12" />
              </div>
              <p className="text-sm opacity-75 text-right mt-4">201.20.12Ats1</p>
            </Card>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-t border-border md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/modules" className="flex flex-col items-center gap-1 text-muted-foreground">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">Modules</span>
          </Link>
          <Link to="/assessments" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Award className="h-5 w-5" />
            <span className="text-xs">Grades</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center gap-1 text-muted-foreground">
            <FileText className="h-5 w-5" />
            <span className="text-xs">More</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Index;
