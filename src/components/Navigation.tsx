import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, HelpCircle, Library, Info, GraduationCap, Users, Layout } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Calculator },
    { path: '/programmes', label: 'Programmes', icon: GraduationCap },
    { path: '/modules', label: 'Modules', icon: BookOpen },
    { path: '/workspace', label: 'Workspace', icon: Layout },
    { path: '/assessments', label: 'Calculator', icon: Calculator },
    { path: '/resources', label: 'Resources', icon: Library },
    { path: '/academic-support', label: 'Support', icon: Users },
  ];

  return (
    <nav className="bg-sidebar-background border-b border-sidebar-border sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-sidebar-foreground">MANCOSA Companion</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive(path)
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
