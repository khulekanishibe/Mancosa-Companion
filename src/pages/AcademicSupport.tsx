import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COORDINATORS, CONTACT_INFO } from "@/data/coordinators";
import { Phone, Mail, Users, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AcademicSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Academic Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Academic Services team strives to make your dreams of obtaining a MANCOSA qualification become a reality by providing you with quality academic support.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Contact Us
            </CardTitle>
            <CardDescription>
              Get in touch with our Academic Support team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default" size="lg" className="flex-1">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {CONTACT_INFO.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <a href={CONTACT_INFO.ticketUrl} target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Log a Support Ticket
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Academic Support Coordinators by School */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Meet Your Academic Support Coordinators
          </h2>

          <div className="grid gap-6">
            {COORDINATORS.map((coordinator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{coordinator.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {coordinator.school.replace('School of ', '')}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm font-medium text-primary/80">
                    {coordinator.school}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Programmes Supported:
                    </p>
                    <ul className="grid gap-2 ml-6">
                      {coordinator.qualifications.map((qual, qIndex) => (
                        <li key={qIndex} className="text-sm list-disc">
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcademicSupport;
