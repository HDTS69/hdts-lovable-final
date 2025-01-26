import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const RoofRepairs = lazy(() => import("@/pages/roofing/RoofRepairs"));
const RoofLeakDetection = lazy(() => import("@/pages/roofing/RoofLeakDetection"));
const LeakInvestigation = lazy(() => import("@/pages/roofing/LeakInvestigation"));
const RoofMaintenance = lazy(() => import("@/pages/roofing/RoofMaintenance"));
const RoofReport = lazy(() => import("@/pages/roofing/RoofReport"));
const MetalRoof = lazy(() => import("@/pages/roofing/MetalRoof"));
const Downpipes = lazy(() => import("@/pages/roofing/Downpipes"));
const RoofVentilation = lazy(() => import("@/pages/roofing/RoofVentilation"));
const RoofTileRepair = lazy(() => import("@/pages/roofing/RoofTileRepair"));
const GutterGuard = lazy(() => import("@/pages/roofing/GutterGuard"));

const RoofingRoutes = () => {
  return (
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
  );
};

export default RoofingRoutes; 