import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEOSetup } from "@/components/seo/SEOSetup";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlumbingService from "./pages/PlumbingService";
import GasFittingService from "./pages/GasFittingService";
import RoofingService from "./pages/RoofingService";
import AirConditioningService from "./pages/AirConditioningService";
import SuburbPage from "./pages/SuburbPage";
import RoofingPage from "./pages/RoofingPage";

import DrainCleaning from "./pages/plumbing/DrainCleaning";
import HotWater from "./pages/plumbing/HotWater";
import Fixtures from "./pages/plumbing/Fixtures";
import Toilet from "./pages/plumbing/Toilet";
import Pipes from "./pages/plumbing/Pipes";
import Sewer from "./pages/plumbing/Sewer";
import Renovations from "./pages/plumbing/Renovations";
import Pressure from "./pages/plumbing/Pressure";

import GasLeak from "./pages/gas-fitting/GasLeak";
import GasAppliance from "./pages/gas-fitting/GasAppliance";
import GasLine from "./pages/gas-fitting/GasLine";
import GasHeater from "./pages/gas-fitting/GasHeater";
import GasCooktop from "./pages/gas-fitting/GasCooktop";
import GasSafety from "./pages/gas-fitting/GasSafety";
import GasCompliance from "./pages/gas-fitting/GasCompliance";
import EmergencyGas from "./pages/gas-fitting/EmergencyGas";

import RoofRepairs from "./pages/roofing/RoofRepairs";
import RoofLeakDetection from "./pages/roofing/RoofLeakDetection";
import LeakInvestigation from "./pages/roofing/LeakInvestigation";
import RoofMaintenance from "./pages/roofing/RoofMaintenance";
import RoofReport from "./pages/roofing/RoofReport";
import MetalRoof from "./pages/roofing/MetalRoof";
import Downpipes from "./pages/roofing/Downpipes";
import RoofVentilation from "./pages/roofing/RoofVentilation";
import RoofTileRepair from "./pages/roofing/RoofTileRepair";
import GutterGuard from "./pages/roofing/GutterGuard";

import SplitSystem from "./pages/air-conditioning/SplitSystem";
import DuctedAC from "./pages/air-conditioning/DuctedAC";
import EmergencyAC from "./pages/air-conditioning/EmergencyAC";
import ACDiagnostics from "./pages/air-conditioning/ACDiagnostics";
import ACOptimization from "./pages/air-conditioning/ACOptimization";
import ACMaintenance from "./pages/air-conditioning/ACMaintenance";
import ACReplacement from "./pages/air-conditioning/ACReplacement";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOSetup />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/plumbing" element={<PlumbingService />} />
          <Route path="/gas-fitting" element={<GasFittingService />} />
          <Route path="/roofing" element={<RoofingService />} />
          <Route path="/air-conditioning" element={<AirConditioningService />} />
          <Route path="/roofing-home" element={<RoofingPage />} />
          <Route path="/:slug" element={<SuburbPage />} />
          
          {/* Plumbing Service Routes */}
          <Route path="/plumbing/hot-water" element={<HotWater />} />
          <Route path="/plumbing/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/plumbing/fixtures" element={<Fixtures />} />
          <Route path="/plumbing/toilet" element={<Toilet />} />
          <Route path="/plumbing/pipes" element={<Pipes />} />
          <Route path="/plumbing/sewer" element={<Sewer />} />
          <Route path="/plumbing/renovations" element={<Renovations />} />
          <Route path="/plumbing/pressure" element={<Pressure />} />
          
          {/* Gas Fitting Service Routes */}
          <Route path="/gas-fitting/leak-detection" element={<GasLeak />} />
          <Route path="/gas-fitting/appliance-installation" element={<GasAppliance />} />
          <Route path="/gas-fitting/line-installation" element={<GasLine />} />
          <Route path="/gas-fitting/heater-services" element={<GasHeater />} />
          <Route path="/gas-fitting/cooktop" element={<GasCooktop />} />
          <Route path="/gas-fitting/safety" element={<GasSafety />} />
          <Route path="/gas-fitting/compliance" element={<GasCompliance />} />
          <Route path="/gas-fitting/emergency" element={<EmergencyGas />} />
          
          {/* Roofing Service Routes */}
          <Route path="/roofing/repairs" element={<RoofRepairs />} />
          <Route path="/roofing/leak-detection" element={<RoofLeakDetection />} />
          <Route path="/roofing/leak-investigation" element={<LeakInvestigation />} />
          <Route path="/roofing/maintenance" element={<RoofMaintenance />} />
          <Route path="/roofing/report" element={<RoofReport />} />
          <Route path="/roofing/metal-roof" element={<MetalRoof />} />
          <Route path="/roofing/downpipes" element={<Downpipes />} />
          <Route path="/roofing/ventilation" element={<RoofVentilation />} />
          <Route path="/roofing/tile-repair" element={<RoofTileRepair />} />
          <Route path="/roofing/gutter-guard" element={<GutterGuard />} />
          
          {/* Air Conditioning Service Routes */}
          <Route path="/air-conditioning/split-system" element={<SplitSystem />} />
          <Route path="/air-conditioning/ducted" element={<DuctedAC />} />
          <Route path="/air-conditioning/emergency" element={<EmergencyAC />} />
          <Route path="/air-conditioning/diagnostics" element={<ACDiagnostics />} />
          <Route path="/air-conditioning/optimization" element={<ACOptimization />} />
          <Route path="/air-conditioning/maintenance" element={<ACMaintenance />} />
          <Route path="/air-conditioning/replacement" element={<ACReplacement />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;