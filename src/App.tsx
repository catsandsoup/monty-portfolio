
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home as HomeIcon, User, Briefcase, MessageSquare } from "lucide-react";
import { NavBar } from "./components/ui/tubelight-navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Index";
import Experience from "./pages/Experience";
import ProjectManagement from "./pages/ProjectManagement";
import ProductDevelopment from "./pages/ProductDevelopment";
import Entrepreneurship from "./pages/Entrepreneurship";
import NaturaHeal from "./pages/NaturaHeal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const navItems = [
    { name: "Home", url: "/", icon: HomeIcon },
    { name: "Experience & Projects", url: "/experience", icon: Briefcase },
    { name: "About", url: "/about", icon: User },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00a5ee]/5 to-white/90">
      <ScrollToTop />
      <div className="sticky top-0 z-50">
        <NavBar items={navItems} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio/project-management" element={<ProjectManagement />} />
        <Route path="/portfolio/product-development" element={<ProductDevelopment />} />
        <Route path="/portfolio/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/portfolio/naturaheal" element={<NaturaHeal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
