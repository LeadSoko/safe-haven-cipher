import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ProductDetails from "./pages/ProductDetails";
import SmartShoreSourcing from "./pages/SmartShoreSourcing";
import About from "./pages/About";
import PlaceholderPage from "./pages/PlaceholderPage";
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
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/smart-shore-sourcing" element={<SmartShoreSourcing />} />
          <Route path="/solutions" element={<PlaceholderPage title="Solutions" description="Discover our comprehensive security solutions." />} />
          <Route path="/resources" element={<PlaceholderPage title="Resources" description="Access our knowledge base and resources." />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team and help secure the digital world." />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" description="Get in touch with our security experts." />} />
          <Route path="/demo" element={<PlaceholderPage title="Schedule a Demo" description="Book a personalized demo of our platform." />} />
          <Route path="/get-started" element={<PlaceholderPage title="Get Started" description="Begin your cybersecurity journey with WeSecureApp." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
