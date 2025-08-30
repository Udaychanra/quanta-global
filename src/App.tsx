import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Insights from "./pages/Insights";
import ContentHub from "./pages/ContentHub";
import ContentDetail from "./pages/ContentDetail";
import AdminContent from "./pages/AdminContent";
import AIServices from "./pages/AIServices";
import FinanceServices from "./pages/FinanceServices";

import CloudServices from "./pages/CloudServices";
import SupplyChainServices from "./pages/SupplyChainServices";
import SAPERPServices from "./pages/SAPERPServices";
import EOService from "./pages/EOService";
import TCTSolutions from "./pages/TCTSolutions";
import PESSolution from "./pages/PESSolution";
import AIDATASolution from "./pages/AIDATASolution";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />     
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/insights" element={<Insights />} />
          {/* Dynamic hubs: /blogs/:section? and /insights/:section? */}
          <Route path="/blogs/:section" element={<ContentHub type="blogs" />} />
          <Route path="/insights/:section" element={<ContentHub type="insights" />} />
          <Route path="/blogs/:section/:slug" element={<ContentDetail type="blogs" />} />
          <Route path="/insights/:section/:slug" element={<ContentDetail type="insights" />} />
          <Route path="/admin/content" element={<AdminContent />} />
          <Route path="/services/ai" element={<AIServices />} />
          <Route path="/services/finance-transformation" element={<FinanceServices />} />
         
          <Route path="/services/cloud-platforms" element={<CloudServices />} />
          <Route path="/services/supply-chain-transformation" element={<SupplyChainServices />} />
          <Route path="/services/sap-erp-transformation" element={<SAPERPServices />} />
          <Route path="/services/enterprise-orchestration" element={<EOService />} />
          <Route path="/solutions/transformation-control-tower" element={<TCTSolutions />} />
          <Route path="/solutions/partner-ecosystem-strategy" element={<PESSolution />} />
          <Route path="/solutions/ai-data-tactical" element={<AIDATASolution />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
