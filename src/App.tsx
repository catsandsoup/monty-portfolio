
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import BackButton from "./components/BackButton";
import Home from "./pages/Index";
import Experience from "./pages/Experience";
import ProjectManagement from "./pages/ProjectManagement";
import ProductDevelopment from "./pages/ProductDevelopment";
import Entrepreneurship from "./pages/Entrepreneurship";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showBackButton = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {showBackButton && <BackButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio/project-management" element={<ProjectManagement />} />
        <Route path="/portfolio/product-development" element={<ProductDevelopment />} />
        <Route path="/portfolio/entrepreneurship" element={<Entrepreneurship />} />
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
