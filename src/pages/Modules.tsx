import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { MODULES } from '@/data/modules';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Search, ExternalLink, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';

type SortOption = 'code-asc' | 'code-desc' | 'title-asc' | 'title-desc' | 'credits-asc' | 'credits-desc';

const Modules = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('code-asc');

  const sortModules = (modules: typeof MODULES) => {
    const sorted = [...modules];
    switch (sortBy) {
      case 'code-asc':
        return sorted.sort((a, b) => a.code.localeCompare(b.code));
      case 'code-desc':
        return sorted.sort((a, b) => b.code.localeCompare(a.code));
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'credits-asc':
        return sorted.sort((a, b) => a.credits - b.credits);
      case 'credits-desc':
        return sorted.sort((a, b) => b.credits - a.credits);
      default:
        return sorted;
    }
  };

  const filteredModules = sortModules(
    MODULES.filter(module =>
      module.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (module.qualification?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
    )
  );

  const year1Modules = filteredModules.filter(m => m.year === 1);
  const year2Modules = filteredModules.filter(m => m.year === 2);
  const year3Modules = filteredModules.filter(m => m.year === 3);

  const ModuleCard = ({ module }: { module: typeof MODULES[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <Link to={`/modules/${module.code}`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg">{module.code}</CardTitle>
              <CardDescription className="mt-1">{module.title}</CardDescription>
            </div>
            <Badge variant="outline">{module.credits} credits</Badge>
          </div>
          {module.qualification && (
            <Badge variant="secondary" className="mt-2 w-fit">
              {module.qualification}
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 flex-wrap text-sm text-muted-foreground">
            <span>Year {module.year}, Semester {module.semester}</span>
            {module.isCapstone && <Badge variant="secondary">Capstone</Badge>}
            {module.module_type && <Badge variant="outline">{module.module_type}</Badge>}
          </div>
          {module.description && (
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
              {module.description}
            </p>
          )}
        </CardContent>
      </Link>
      {module.notebook_link && (
        <CardContent className="pt-0">
          <a
            href={module.notebook_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <BookOpen className="h-4 w-4" />
            Study with NotebookLM
            <ExternalLink className="h-3 w-3" />
          </a>
        </CardContent>
      )}
    </Card>
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

        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by module code, title, or qualification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-full sm:w-[220px]">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="code-asc">Code (A-Z)</SelectItem>
                <SelectItem value="code-desc">Code (Z-A)</SelectItem>
                <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                <SelectItem value="credits-asc">Credits (Low-High)</SelectItem>
                <SelectItem value="credits-desc">Credits (High-Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {filteredModules.length} module{filteredModules.length !== 1 ? 's' : ''}
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
