import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessments from "./pages/Assessments";
import Programmes from "./pages/Programmes";
import Modules from "./pages/Modules";
import Readings from "./pages/Readings";
import Resources from "./pages/Resources";
import AcademicSupport from "./pages/AcademicSupport";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/readings" element={<Readings />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/academic-support" element={<AcademicSupport />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
