import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { RESOURCES, getAllCategories } from '@/data/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ExternalLink, Search, HelpCircle } from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllCategories();

  const filteredResources = RESOURCES.filter(resource =>
    resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.details?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedResources = categories.map(category => ({
    category,
    resources: filteredResources.filter(r => r.category === category)
  })).filter(group => group.resources.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Student Resources</h1>
          <p className="text-muted-foreground">Support services, learning platforms, and useful links</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
          </div>
        </div>

        <div className="space-y-8">
          {groupedResources.map(({ category, resources }) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map(resource => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start justify-between gap-2">
                        <span>{resource.name}</span>
                        {resource.url && <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                      </CardTitle>
                      {resource.details && <CardDescription>{resource.details}</CardDescription>}
                    </CardHeader>
                    {resource.url && (
                      <CardContent>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full">Visit Site <ExternalLink className="h-4 w-4 ml-2" /></Button>
                        </a>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;
