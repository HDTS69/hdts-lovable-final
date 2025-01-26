import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const SplitSystem = lazy(() => import("@/pages/air-conditioning/SplitSystem"));
const DuctedAC = lazy(() => import("@/pages/air-conditioning/DuctedAC"));
const EmergencyAC = lazy(() => import("@/pages/air-conditioning/EmergencyAC"));
const ACDiagnostics = lazy(() => import("@/pages/air-conditioning/ACDiagnostics"));
const ACOptimization = lazy(() => import("@/pages/air-conditioning/ACOptimization"));
const ACMaintenance = lazy(() => import("@/pages/air-conditioning/ACMaintenance"));
const ACReplacement = lazy(() => import("@/pages/air-conditioning/ACReplacement"));

const AirConditioningRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/split-system" element={<SplitSystem />} />
        <Route path="/ducted" element={<DuctedAC />} />
        <Route path="/emergency" element={<EmergencyAC />} />
        <Route path="/diagnostics" element={<ACDiagnostics />} />
        <Route path="/optimization" element={<ACOptimization />} />
        <Route path="/maintenance" element={<ACMaintenance />} />
        <Route path="/replacement" element={<ACReplacement />} />
      </Routes>
    </Suspense>
  );
};

export default AirConditioningRoutes; 