import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const DrainCleaning = lazy(() => import("@/pages/plumbing/DrainCleaning"));
const HotWater = lazy(() => import("@/pages/plumbing/HotWater"));
const Fixtures = lazy(() => import("@/pages/plumbing/Fixtures"));
const Toilet = lazy(() => import("@/pages/plumbing/Toilet"));
const Pipes = lazy(() => import("@/pages/plumbing/Pipes"));
const Sewer = lazy(() => import("@/pages/plumbing/Sewer"));
const Renovations = lazy(() => import("@/pages/plumbing/Renovations"));
const Pressure = lazy(() => import("@/pages/plumbing/Pressure"));

const PlumbingRoutes = () => {
  return (
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
  );
};

export default PlumbingRoutes; 