import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, HelpCircle, Library, Info } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/assessments', label: 'Calculator', icon: Calculator },
    { path: '/modules', label: 'Modules', icon: BookOpen },
    { path: '/readings', label: 'Readings', icon: Library },
    { path: '/resources', label: 'Resources', icon: HelpCircle },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">MANCOSA Companion</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path} className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isActive(path) ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
                <Icon className="h-5 w-5" />
                <span className="font-medium hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
