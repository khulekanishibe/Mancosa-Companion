import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "@/components/Preloader";
import Index from "./pages/Index";
import Assessments from "./pages/Assessments";
import Programmes from "./pages/Programmes";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Readings from "./pages/Readings";
import Resources from "./pages/Resources";
import AcademicSupport from "./pages/AcademicSupport";
import About from "./pages/About";
import Workspace from "./pages/Workspace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader isLoading={loading} />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/programme/:id" element={<ProgrammeDetail />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/module/:code" element={<ModuleDetail />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/academic-support" element={<AcademicSupport />} />
            <Route path="/about" element={<About />} />
            <Route path="/readings" element={<Readings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
