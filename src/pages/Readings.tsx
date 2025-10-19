import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { READINGS } from '@/data/readings';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Search, ArrowUpDown } from 'lucide-react';

type SortOption = 'title-asc' | 'title-desc' | 'author-asc' | 'author-desc' | 'year-asc' | 'year-desc';

const Readings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('title-asc');

  const sortReadings = (readings: typeof READINGS) => {
    const sorted = [...readings];
    switch (sortBy) {
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'author-asc':
        return sorted.sort((a, b) => a.authors.localeCompare(b.authors));
      case 'author-desc':
        return sorted.sort((a, b) => b.authors.localeCompare(a.authors));
      case 'year-asc':
        return sorted.sort((a, b) => (a.year || 0) - (b.year || 0));
      case 'year-desc':
        return sorted.sort((a, b) => (b.year || 0) - (a.year || 0));
      default:
        return sorted;
    }
  };

  const filteredReadings = sortReadings(
    READINGS.filter(reading =>
      reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.moduleCodes.some(code => code.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  const prescribedReadings = filteredReadings.filter(r => r.type === 'PRESCRIBED');
  const recommendedReadings = filteredReadings.filter(r => r.type === 'RECOMMENDED');

  const ReadingCard = ({ reading }: { reading: typeof READINGS[0] }) => (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{reading.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{reading.authors}</p>
          </div>
          <Badge variant={reading.type === 'PRESCRIBED' ? 'default' : 'secondary'}>
            {reading.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {(reading.edition || reading.year || reading.publisher) && (
            <div className="text-sm text-muted-foreground">
              {reading.edition && <span>Edition: {reading.edition}</span>}
              {reading.year && <span> • {reading.year}</span>}
              {reading.publisher && <span> • {reading.publisher}</span>}
            </div>
          )}
          <div className="flex gap-2 flex-wrap">
            {reading.moduleCodes.map(code => (
              <Badge key={code} variant="outline" className="text-xs">
                {code}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Reading List</h1>
          <p className="text-muted-foreground">
            Prescribed and recommended textbooks for BCom ITM modules
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, author, or module code..."
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
                <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                <SelectItem value="author-asc">Author (A-Z)</SelectItem>
                <SelectItem value="author-desc">Author (Z-A)</SelectItem>
                <SelectItem value="year-asc">Year (Old-New)</SelectItem>
                <SelectItem value="year-desc">Year (New-Old)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {filteredReadings.length} reading{filteredReadings.length !== 1 ? 's' : ''}
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Readings</TabsTrigger>
            <TabsTrigger value="prescribed">Prescribed</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {filteredReadings.map(reading => (
                <ReadingCard key={reading.id} reading={reading} />
              ))}
            </div>
            {filteredReadings.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No readings found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="prescribed" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {prescribedReadings.map(reading => (
                <ReadingCard key={reading.id} reading={reading} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedReadings.map(reading => (
                <ReadingCard key={reading.id} reading={reading} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Readings;
