import { PlumbingServiceLayout } from "@/components/services/plumbing/PlumbingServiceLayout";
import { useNavigate } from 'react-router-dom';
import { Shield, Flame, Wrench } from 'lucide-react';
import { SystemTabs } from "@/components/hot-water/SystemTabs";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const HotWater = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = () => {
    navigate("/", { state: { scrollToServices: true } });
  };

  const handleFaqClick = () => {
    navigate("/", { state: { scrollToFAQ: true } });
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader onBookingClick={() => navigate("/booking")} onServiceClick={handleServiceClick} onFaqClick={handleFaqClick} />
      
      <main className="flex-grow" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <article className="focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-500 rounded-lg p-4">
              <h1 className="text-3xl font-bold text-teal-600 mb-4" tabIndex={0}>
                Hot Water Services
              </h1>
              <p className="text-gray-600 mb-6" tabIndex={0}>
                Professional hot water system solutions for your home. From traditional storage systems to modern continuous flow units, we provide expert solutions for all your hot water needs.
              </p>

              <div className="space-y-4">
                <section 
                  className="bg-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  aria-labelledby="services-title"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    <h2 id="services-title" className="text-xl font-semibold text-teal-700">
                      Our Hot Water Services
                    </h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600" role="list">
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• System Installation</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Repairs & Maintenance</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Emergency Services</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• System Upgrades</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Efficiency Solutions</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Tank Replacements</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• System Assessment</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Preventive Care</li>
                  </ul>
                </section>

                <section 
                  className="bg-teal-50/50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  aria-labelledby="benefits-title"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    <h2 id="benefits-title" className="text-xl font-semibold text-teal-700">
                      Why Choose Our Services?
                    </h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600" role="list">
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Expert Technicians</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Licensed Plumbers</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Quality Products</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Guaranteed Work</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Competitive Pricing</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Fast Response</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Professional Service</li>
                  </ul>
                </section>
              </div>
            </article>

            {/* Right Column - Images and Button */}
            <aside className="space-y-6">
              <div className="space-y-4">
                <div 
                  className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-sm" 
                  role="img" 
                  aria-label="Hot water service illustration"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" 
                    role="img" 
                    aria-label="Additional hot water service illustration 1"
                  />
                  <div 
                    className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" 
                    role="img" 
                    aria-label="Additional hot water service illustration 2"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate("/booking")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Book hot water service online"
                >
                  Book Online
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Systems Information Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">
            Hot Water System Types
          </h2>
          <SystemTabs systems={systems} />
        </div>
      </main>

      <Footer 
        onServiceClick={handleServiceClick}
        onFaqClick={handleFaqClick}
      />
    </div>
  );
};

export default HotWater;