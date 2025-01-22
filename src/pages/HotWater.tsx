import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SystemCard } from "@/components/hot-water/SystemCard";
import { HeroSection } from "@/components/hot-water/HeroSection";
import { CTASection } from "@/components/hot-water/CTASection";
import { Battery, Flame, Sun, ThermometerSun } from "lucide-react";
import type { Systems } from "@/components/hot-water/types";
import './HotWaterTabs.css';

const HotWater = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>("electric");

  const systems: Systems = {
    electric: {
      title: "Electric Storage",
      description: "Electric storage systems use heating elements powered by electricity to heat and store water in an insulated tank. They're a common choice for homes without gas connections.",
      brands: ["Rheem", "Dux", "AquaMAX", "Thermann", "Vulcan", "Wilson", "Saxon"],
      advantages: [
        "Low upfront costs",
        "Simple installation",
        "Off-peak tariffs available",

        
        "Ideal for areas without gas"
      ],
      sizing: [
        { label: "1-2 people", value: "125L - 160L" },
        { label: "3-4 people", value: "160L - 250L" },
        { label: "4-5 people", value: "250L - 315L" },
        { label: "5+ people", value: "315L - 400L" }
      ],
      keyNotes: [
        "Regular maintenance required",
        "Best suited for off-peak electricity rates",
        "Consider insulation quality"
      ],
      tips: [
        "Install in a well-ventilated area",
        "Check temperature settings regularly",
        "Consider timer installation for off-peak usage"
      ],
      lifespan: "8-12 years"
    },
    gas: {
      title: "Gas Storage",
      description: "Gas storage hot water systems use natural gas or LPG to heat water stored in an insulated tank. They provide efficient heating and are cost-effective where gas is available.",
      brands: ["Rheem", "Rinnai", "Dux", "Thermann", "Vulcan", "Bosch", "Wilson"],
      advantages: [
        "Rapid water heating",
        "Lower emissions",
        "Economical operation",
        "Works during power outages"
      ],
      sizing: [
        { label: "1-2 people", value: "125L - 160L" },
        { label: "3-4 people", value: "160L - 250L" },
        { label: "4-5 people", value: "250L - 315L" },
        { label: "5+ people", value: "315L - 400L" }
      ],
      keyNotes: [
        "Regular safety checks important",
        "Requires proper ventilation",
        "Consider gas availability"
      ],
      tips: [
        "Annual maintenance recommended",
        "Check gas pressure regularly",
        "Keep area around unit clear"
      ],
      lifespan: "10-15 years"
    },
    solar: {
      title: "Solar Hot Water",
      description: "Solar hot water systems use roof-mounted solar collectors to heat water, storing it in an insulated tank. They can significantly reduce energy costs and environmental impact.",
      brands: ["Rheem", "Rinnai", "Chromagen", "Thermann", "Dux"],
      advantages: [
        "90% energy reduction possible",
        "Environmentally friendly",
        "Government rebates available",
        "Backup options available"
      ],
      sizing: [
        { label: "Small household", value: "160L - 200L" },
        { label: "Medium household", value: "200L - 250L" },
        { label: "Large household", value: "250L - 315L" }
      ],
      keyNotes: [
        "Requires good solar access",
        "Electric/gas boost available",
        "Roof structure assessment needed"
      ],
      tips: [
        "Regular panel cleaning",
        "Monitor backup system",
        "Check collector orientation"
      ],
      lifespan: "15-20 years"
    },
    heatpump: {
      title: "Heat Pump Systems",
      description: "Heat pump hot water systems extract heat from the surrounding air to heat water, similar to how a reverse-cycle air conditioner works. They're highly energy efficient.",
      brands: ["Rheem", "Rinnai", "Stiebel Eltron", "Thermann", "Dux"],
      advantages: [
        "3x more efficient",
        "Eligible for rebates",
        "Good in moderate climates",
        "Low emissions"
      ],
      sizing: [
        { label: "Small household", value: "150L - 200L" },
        { label: "Medium household", value: "200L - 250L" },
        { label: "Large household", value: "250L - 300L+" }
      ],
      keyNotes: [
        "Needs good air flow",
        "Works best in warm climates",
        "Consider noise factors"
      ],
      tips: [
        "Install away from bedrooms",
        "Regular filter cleaning",
        "Monitor performance in winter"
      ],
      lifespan: "10-15 years"
    }
  };

  const tabs = [
    { id: 'electric', label: 'Storage', icon: <Battery className="w-5 h-5" /> },
    { id: 'gas', label: 'Continuous Flow', icon: <Flame className="w-5 h-5" /> },
    { id: 'solar', label: 'Solar', icon: <Sun className="w-5 h-5" /> },
    { id: 'heatpump', label: 'Heat Pump', icon: <ThermometerSun className="w-5 h-5" /> },
  ];

  const getSystemTitle = () => {
    switch(selectedSystem) {
      case 'electric':
        return 'Storage Hot Water Systems';
      case 'gas':
        return 'Continuous Flow Hot Water Systems';
      case 'solar':
        return 'Solar Hot Water Systems';
      case 'heatpump':
        return 'Heat Pump Hot Water Systems';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      
      <section className="container mx-auto px-4 py-8">
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8 text-center leading-relaxed">
          When choosing the perfect hot water system for your home, it's essential to consider your household's size, available fuel, local climate, and budget. At HD Trade Services, we offer expert advice, professional installation, and reliable maintenance so you get a system that works exactly for you.
        </p>
        
        <div className="hot-water-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${selectedSystem === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedSystem(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-8"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-6">
              {getSystemTitle()}
            </h2>
            
            <AnimatePresence mode="wait">
              {selectedSystem && systems[selectedSystem as keyof Systems] && (
                <SystemCard 
                  key={selectedSystem}
                  {...systems[selectedSystem as keyof Systems]}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
};

export default HotWater;