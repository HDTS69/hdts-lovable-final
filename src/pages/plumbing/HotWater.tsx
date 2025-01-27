import React, { Suspense } from 'react';
import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";
import { hotWaterServiceInfo } from "@/data/services/plumbing/hotWaterService";
import { SystemTabs } from "@/components/hot-water/SystemTabs";
import { ErrorBoundary } from 'react-error-boundary';

const systems = {
  storage: {
    title: "Storage Systems",
    description: "Traditional storage systems heat and store water in an insulated tank. Choose between electric and gas options based on your energy preferences and requirements.",
    subtypes: {
      electric: {
        title: "Electric Storage",
        description: "Electric storage systems use heating elements to warm water and store it in an insulated tank. They're reliable, easy to maintain, and suitable for most households.",
        brands: ["Rheem", "Rinnai", "Dux", "Vulcan", "Aquamax"],
        advantages: [
          "Lower upfront costs",
          "Simple installation",
          "Reliable performance",
          "Low maintenance",
          "Long lifespan",
          "No gas connection required"
        ],
        sizing: [
          { label: "Small (1-2 people)", value: "125L tank" },
          { label: "Medium (2-4 people)", value: "160L tank" },
          { label: "Large (4+ people)", value: "250L+ tank" }
        ],
        keyNotes: [
          "Can be installed indoors or outdoors",
          "Off-peak electricity rates available",
          "Regular maintenance extends lifespan"
        ],
        tips: [
          "Consider off-peak electricity for cost savings",
          "Ensure proper insulation",
          "Regular temperature checks recommended"
        ],
        lifespan: "8-12 years with proper maintenance"
      },
      gas: {
        title: "Gas Storage",
        description: "Gas storage systems use natural gas or LPG to heat water and store it in an insulated tank. They offer efficient heating and are cost-effective to run.",
        brands: ["Rheem", "Rinnai", "Dux", "Vulcan", "AquaMax"],
        advantages: [
          "Lower running costs",
          "Fast heat recovery",
          "Efficient operation",
          "Suitable for large households",
          "Continuous hot water supply",
          "Lower greenhouse emissions"
        ],
        sizing: [
          { label: "Small (1-2 people)", value: "135L tank" },
          { label: "Medium (2-4 people)", value: "170L tank" },
          { label: "Large (4+ people)", value: "270L+ tank" }
        ],
        keyNotes: [
          "Requires gas connection",
          "Indoor or outdoor installation",
          "Regular safety checks important"
        ],
        tips: [
          "Annual maintenance recommended",
          "Check gas pressure regularly",
          "Monitor pilot light"
        ],
        lifespan: "8-12 years with proper maintenance"
      }
    }
  },
  continuous: {
    title: "Continuous Flow",
    description: "Also known as instantaneous systems, these units heat water on demand without the need for storage. They're efficient and space-saving.",
    brands: ["Rinnai", "Bosch", "Rheem", "Dux"],
    advantages: [
      "Never run out of hot water",
      "Space-saving design",
      "Energy efficient",
      "Long lifespan",
      "Lower energy bills",
      "Precise temperature control"
    ],
    sizing: [
      { label: "Small (1-2 outlets)", value: "16-20L/min" },
      { label: "Medium (2-3 outlets)", value: "20-24L/min" },
      { label: "Large (3+ outlets)", value: "24-32L/min" }
    ],
    keyNotes: [
      "Requires adequate gas pressure",
      "Multiple units can be linked",
      "Temperature is consistent"
    ],
    tips: [
      "Consider water pressure requirements",
      "Regular servicing recommended",
      "Check gas line capacity"
    ],
    lifespan: "15-20 years with proper maintenance"
  },
  solar: {
    title: "Solar Hot Water",
    description: "Solar hot water systems use energy from the sun to heat water, with a backup system for cloudy days. They're environmentally friendly and can reduce energy costs.",
    brands: ["Rheem", "Rinnai", "Dux", "Solahart"],
    advantages: [
      "Lower energy bills",
      "Environmentally friendly",
      "Government rebates available",
      "Reliable technology",
      "Long-term savings",
      "Adds value to property"
    ],
    sizing: [
      { label: "Small (1-2 people)", value: "180L tank" },
      { label: "Medium (2-4 people)", value: "300L tank" },
      { label: "Large (4+ people)", value: "400L+ tank" }
    ],
    keyNotes: [
      "Requires sunny location",
      "Backup system included",
      "North-facing installation ideal"
    ],
    tips: [
      "Check local regulations",
      "Consider roof orientation",
      "Maintain backup system"
    ],
    lifespan: "15-20 years for panels, 8-12 years for tank"
  },
  heatpump: {
    title: "Heat Pump",
    description: "Heat pump systems extract heat from the air to warm water. They're energy-efficient and environmentally friendly, ideal for moderate climates.",
    brands: ["Sanden", "Rheem", "Dux", "Quantum"],
    advantages: [
      "Very energy efficient",
      "Low running costs",
      "Environmentally friendly",
      "Works in most weather",
      "Government rebates available",
      "No roof panels required"
    ],
    sizing: [
      { label: "Small (1-2 people)", value: "160L tank" },
      { label: "Medium (2-4 people)", value: "250L tank" },
      { label: "Large (4+ people)", value: "315L+ tank" }
    ],
    keyNotes: [
      "Works in temperatures above 5°C",
      "Requires good airflow",
      "Can be noisy"
    ],
    tips: [
      "Consider noise factor in placement",
      "Ensure adequate ventilation",
      "Regular maintenance important"
    ],
    lifespan: "10-15 years with proper maintenance"
  }
};

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="p-4 bg-red-50 rounded-lg">
    <h2 className="text-red-800 font-semibold mb-2">Something went wrong:</h2>
    <pre className="text-red-600 text-sm">{error.message}</pre>
  </div>
);

const LoadingFallback = () => (
  <div className="p-4 text-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mx-auto"></div>
    <p className="mt-2 text-gray-600">Loading system information...</p>
  </div>
);

const HotWater = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BaseServiceLayout serviceInfo={hotWaterServiceInfo}>
        <Suspense fallback={<LoadingFallback />}>
          <div className="max-w-[1120px] mx-auto px-4 pb-12">
            <SystemTabs systems={systems} />
          </div>
        </Suspense>
      </BaseServiceLayout>
    </ErrorBoundary>
  );
};

export default HotWater;