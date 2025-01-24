import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { SEOSetup } from "@/components/seo/SEOSetup";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { GoogleMapsProvider } from './contexts/GoogleMapsContext';

// Immediate load for core pages
const Index = lazy(() => import("./pages/Index"));

// Deferred load for other core pages
const Booking = lazy(() => import("./pages/Booking"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SuburbPage = lazy(() => import("./pages/SuburbPage"));

// Service pages with priority loading
const PlumbingService = lazy(() => import("./pages/PlumbingService"));
const GasFittingService = lazy(() => import("./pages/GasFittingService"));
const RoofingService = lazy(() => import("./pages/RoofingService"));
const AirConditioningService = lazy(() => import("./pages/AirConditioningService"));
const RoofingPage = lazy(() => import("./pages/RoofingPage"));

// Plumbing pages with prefetch hints
const DrainCleaning = lazy(() => import("./pages/plumbing/DrainCleaning" /* webpackPrefetch: true */));
const HotWater = lazy(() => import("./pages/plumbing/HotWater" /* webpackPrefetch: true */));
const Fixtures = lazy(() => import("./pages/plumbing/Fixtures" /* webpackPrefetch: true */));
const Toilet = lazy(() => import("./pages/plumbing/Toilet" /* webpackPrefetch: true */));
const Pipes = lazy(() => import("./pages/plumbing/Pipes" /* webpackPrefetch: true */));
const Sewer = lazy(() => import("./pages/plumbing/Sewer" /* webpackPrefetch: true */));
const Renovations = lazy(() => import("./pages/plumbing/Renovations" /* webpackPrefetch: true */));
const Pressure = lazy(() => import("./pages/plumbing/Pressure" /* webpackPrefetch: true */));

// Gas fitting pages with prefetch hints
const GasLeak = lazy(() => import("./pages/gas-fitting/GasLeak" /* webpackPrefetch: true */));
const GasAppliance = lazy(() => import("./pages/gas-fitting/GasAppliance" /* webpackPrefetch: true */));
const GasLine = lazy(() => import("./pages/gas-fitting/GasLine" /* webpackPrefetch: true */));
const GasHeater = lazy(() => import("./pages/gas-fitting/GasHeater" /* webpackPrefetch: true */));
const GasCooktop = lazy(() => import("./pages/gas-fitting/GasCooktop" /* webpackPrefetch: true */));
const GasSafety = lazy(() => import("./pages/gas-fitting/GasSafety" /* webpackPrefetch: true */));
const GasCompliance = lazy(() => import("./pages/gas-fitting/GasCompliance" /* webpackPrefetch: true */));
const EmergencyGas = lazy(() => import("./pages/gas-fitting/EmergencyGas" /* webpackPrefetch: true */));

// Roofing pages with prefetch hints
const RoofRepairs = lazy(() => import("./pages/roofing/RoofRepairs" /* webpackPrefetch: true */));
const RoofLeakDetection = lazy(() => import("./pages/roofing/RoofLeakDetection" /* webpackPrefetch: true */));
const LeakInvestigation = lazy(() => import("./pages/roofing/LeakInvestigation" /* webpackPrefetch: true */));
const RoofMaintenance = lazy(() => import("./pages/roofing/RoofMaintenance" /* webpackPrefetch: true */));
const RoofReport = lazy(() => import("./pages/roofing/RoofReport" /* webpackPrefetch: true */));
const MetalRoof = lazy(() => import("./pages/roofing/MetalRoof" /* webpackPrefetch: true */));
const Downpipes = lazy(() => import("./pages/roofing/Downpipes" /* webpackPrefetch: true */));
const RoofVentilation = lazy(() => import("./pages/roofing/RoofVentilation" /* webpackPrefetch: true */));
const RoofTileRepair = lazy(() => import("./pages/roofing/RoofTileRepair" /* webpackPrefetch: true */));
const GutterGuard = lazy(() => import("./pages/roofing/GutterGuard" /* webpackPrefetch: true */));

// Air conditioning pages with prefetch hints
const SplitSystem = lazy(() => import("./pages/air-conditioning/SplitSystem" /* webpackPrefetch: true */));
const DuctedAC = lazy(() => import("./pages/air-conditioning/DuctedAC" /* webpackPrefetch: true */));
const EmergencyAC = lazy(() => import("./pages/air-conditioning/EmergencyAC" /* webpackPrefetch: true */));

// Prefetch function for route chunks
const prefetchRoute = (path: string) => {
  const routes: Record<string, () => Promise<any>> = {
    '/plumbing': () => import("./pages/PlumbingService"),
    '/gas-fitting': () => import("./pages/GasFittingService"),
    '/roofing': () => import("./pages/RoofingService"),
    '/air-conditioning': () => import("./pages/AirConditioningService"),
  };
  
  if (routes[path]) {
    routes[path]().catch(() => {});
  }
};

// Route observer component
const RouteObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Prefetch adjacent routes
    const currentPath = location.pathname;
    if (currentPath === '/') {
      prefetchRoute('/plumbing');
      prefetchRoute('/gas-fitting');
    } else if (currentPath.includes('/plumbing')) {
      prefetchRoute('/gas-fitting');
    } else if (currentPath.includes('/gas-fitting')) {
      prefetchRoute('/roofing');
    }
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <SEOSetup />
        <GoogleMapsProvider>
          <BrowserRouter>
            <RouteObserver />
            <TooltipProvider>
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Routes with priority loading */}
                    <Route path="/" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Index />
                      </Suspense>
                    } />
                    
                    {/* Core Routes */}
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/:slug" element={<SuburbPage />} />

                    {/* Main Service Routes */}
                    <Route path="/plumbing" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <PlumbingService />
                      </Suspense>
                    } />
                    <Route path="/gas-fitting" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <GasFittingService />
                      </Suspense>
                    } />
                    <Route path="/roofing" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <RoofingService />
                      </Suspense>
                    } />
                    <Route path="/air-conditioning" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <AirConditioningService />
                      </Suspense>
                    } />
                    <Route path="/roofing-home" element={<RoofingPage />} />
                    
                    {/* Plumbing Service Routes */}
                    <Route path="/plumbing/*" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/hot-water" element={<HotWater />} />
                          <Route path="/drain-cleaning" element={<DrainCleaning />} />
                          <Route path="/fixtures" element={<Fixtures />} />
                          <Route path="/toilet" element={<Toilet />} />
                          <Route path="/pipes" element={<Pipes />} />
                          <Route path="/sewer" element={<Sewer />} />
                          <Route path="/renovations" element={<Renovations />} />
                          <Route path="/pressure" element={<Pressure />} />
                        </Routes>
                      </Suspense>
                    } />
                    
                    {/* Gas Fitting Service Routes */}
                    <Route path="/gas-fitting/*" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/leak-detection" element={<GasLeak />} />
                          <Route path="/appliance-installation" element={<GasAppliance />} />
                          <Route path="/line-installation" element={<GasLine />} />
                          <Route path="/heater-services" element={<GasHeater />} />
                          <Route path="/cooktop" element={<GasCooktop />} />
                          <Route path="/safety" element={<GasSafety />} />
                          <Route path="/compliance" element={<GasCompliance />} />
                          <Route path="/emergency" element={<EmergencyGas />} />
                        </Routes>
                      </Suspense>
                    } />
                    
                    {/* Roofing Service Routes */}
                    <Route path="/roofing/*" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/repairs" element={<RoofRepairs />} />
                          <Route path="/leak-detection" element={<RoofLeakDetection />} />
                          <Route path="/leak-investigation" element={<LeakInvestigation />} />
                          <Route path="/maintenance" element={<RoofMaintenance />} />
                          <Route path="/report" element={<RoofReport />} />
                          <Route path="/metal-roof" element={<MetalRoof />} />
                          <Route path="/downpipes" element={<Downpipes />} />
                          <Route path="/ventilation" element={<RoofVentilation />} />
                          <Route path="/tile-repair" element={<RoofTileRepair />} />
                          <Route path="/gutter-guard" element={<GutterGuard />} />
                        </Routes>
                      </Suspense>
                    } />
                    
                    {/* Air Conditioning Service Routes */}
                    <Route path="/air-conditioning/*" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/split-system" element={<SplitSystem />} />
                          <Route path="/ducted" element={<DuctedAC />} />
                          <Route path="/emergency" element={<EmergencyAC />} />
                        </Routes>
                      </Suspense>
                    } />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </BrowserRouter>
        </GoogleMapsProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;