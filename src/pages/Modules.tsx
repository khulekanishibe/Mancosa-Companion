import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { MODULES } from '@/data/modules';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modules = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = MODULES.filter(module =>
    module.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const year1Modules = filteredModules.filter(m => m.year === 1);
  const year2Modules = filteredModules.filter(m => m.year === 2);
  const year3Modules = filteredModules.filter(m => m.year === 3);

  const ModuleCard = ({ module }: { module: typeof MODULES[0] }) => (
    <Link to={`/modules/${module.code}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg">{module.code}</CardTitle>
              <CardDescription className="mt-1">{module.title}</CardDescription>
            </div>
            <Badge variant="outline">{module.credits} credits</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Semester {module.semester}</span>
            {module.isCapstone && <Badge variant="secondary">Capstone</Badge>}
          </div>
          {module.description && (
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
              {module.description}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Module Catalogue</h1>
          <p className="text-muted-foreground">
            Browse all modules in the BCom (Information & Technology Management) programme
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by module code or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="year1">Year 1</TabsTrigger>
            <TabsTrigger value="year2">Year 2</TabsTrigger>
            <TabsTrigger value="year3">Year 3</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModules.map(module => <ModuleCard key={module.code} module={module} />)}
            </div>
          </TabsContent>

          <TabsContent value="year1" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {year1Modules.map(module => <ModuleCard key={module.code} module={module} />)}
            </div>
          </TabsContent>

          <TabsContent value="year2" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {year2Modules.map(module => <ModuleCard key={module.code} module={module} />)}
            </div>
          </TabsContent>

          <TabsContent value="year3" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {year3Modules.map(module => <ModuleCard key={module.code} module={module} />)}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Modules;
