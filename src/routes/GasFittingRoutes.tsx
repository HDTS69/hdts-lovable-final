import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const GasLeak = lazy(() => import("@/pages/gas-fitting/GasLeak"));
const GasAppliance = lazy(() => import("@/pages/gas-fitting/GasAppliance"));
const GasLine = lazy(() => import("@/pages/gas-fitting/GasLine"));
const GasHeater = lazy(() => import("@/pages/gas-fitting/GasHeater"));
const GasCooktop = lazy(() => import("@/pages/gas-fitting/GasCooktop"));
const GasSafety = lazy(() => import("@/pages/gas-fitting/GasSafety"));
const GasCompliance = lazy(() => import("@/pages/gas-fitting/GasCompliance"));
const EmergencyGas = lazy(() => import("@/pages/gas-fitting/EmergencyGas"));

const GasFittingRoutes = () => {
  return (
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
  );
};

export default GasFittingRoutes; 