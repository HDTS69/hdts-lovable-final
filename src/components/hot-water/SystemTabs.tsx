import { useState } from "react";
import { Battery, Flame, Sun, ThermometerSun, ChevronDown, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import './SystemTabs.css';

interface SystemCardProps {
  title: string;
  description: string;
  brands: string[];
  advantages: string[];
  sizing?: {
    label: string;
    value: string;
  }[];
  keyNotes?: string[];
  tips?: string[];
  lifespan?: string;
}

interface StorageSystem {
  title: string;
  description: string;
  subtypes: {
    [key: string]: SystemCardProps;
  };
}

interface Systems {
  [key: string]: SystemCardProps | StorageSystem;
}

interface SystemTabsProps {
  systems: Systems;
}

const SystemCard = ({ 
  title, 
  description, 
  brands, 
  advantages,
  sizing,
  keyNotes,
  tips,
  lifespan
}: SystemCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-teal-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Trusted Brands</h4>
          <p className="text-gray-600">{brands.join(", ")}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Advantages</h4>
              <ul className="space-y-2">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            {sizing && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Tank Sizing Guide</h4>
                <div className="space-y-2 text-gray-600">
                  {sizing.map((size, index) => (
                    <p key={index}>{size.label}: {size.value}</p>
                  ))}
                </div>
              </div>
            )}

            {(keyNotes || tips || lifespan) && (
              <div className="col-span-2 mt-4">
                {keyNotes && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Key Notes</h4>
                    <ul className="space-y-2">
                      {keyNotes.map((note, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-teal-500 mr-2" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tips && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Tips</h4>
                    <ul className="space-y-2">
                      {tips.map((tip, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-teal-500 mr-2" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {lifespan && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Expected Lifespan</h4>
                    <p className="text-gray-600">{lifespan}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SystemTabs = ({ systems }: SystemTabsProps) => {
  const [selectedSystem, setSelectedSystem] = useState("storage");
  const [selectedSubtype, setSelectedSubtype] = useState("electric");
  const [showFAQs, setShowFAQs] = useState(false);

  const mainTabs = [
    { id: 'storage', label: 'Storage Systems', icon: <Battery className="w-5 h-5" /> },
    { id: 'continuous', label: 'Continuous Flow', icon: <Flame className="w-5 h-5" /> },
    { id: 'solar', label: 'Solar', icon: <Sun className="w-5 h-5" /> },
    { id: 'heatpump', label: 'Heat Pump', icon: <ThermometerSun className="w-5 h-5" /> },
  ];

  const subtypes = {
    storage: [
      { id: 'electric', label: 'Electric Storage' },
      { id: 'gas', label: 'Gas Storage' },
    ],
  };

  const faqs = [
    {
      question: "How do I decide which type of hot water system is best for my home?",
      answer: "Consider your household size, available fuel (electricity, gas, or solar), energy costs, and local climate. At HD Trade Services, we offer expert consultations to help determine the ideal system tailored to your specific requirements."
    },
    {
      question: "What is the average lifespan of a hot water system?",
      answer: "The lifespan varies by type: Electric and gas storage systems typically last 8-12 years, continuous flow systems 15-20 years, and solar systems 15-20 years with proper maintenance."
    },
    {
      question: "How can I improve my hot water system's efficiency?",
      answer: "Regular maintenance, proper insulation, temperature optimization, and timely repairs are key to maximizing efficiency. Our technicians can provide personalized recommendations for your system."
    }
  ];

  const isStorageSystem = selectedSystem === 'storage';
  const currentSystem = systems[selectedSystem] as (SystemCardProps | StorageSystem);

  return (
    <div className="w-full">
      <div className="tabs-container">
        <div className="hot-water-tabs">
          {mainTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${selectedSystem === tab.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSystem(tab.id);
                if (tab.id === 'storage') {
                  setSelectedSubtype('electric');
                }
              }}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </div>
          ))}
        </div>

        {isStorageSystem && (
          <div className="subtabs-container">
            {subtypes.storage.map((subtype) => (
              <div
                key={subtype.id}
                className={`subtab-item ${selectedSubtype === subtype.id ? 'active' : ''}`}
                onClick={() => setSelectedSubtype(subtype.id)}
              >
                {subtype.label}
              </div>
            ))}
          </div>
        )}

        <div className="system-content">
          {isStorageSystem ? (
            <SystemCard {...(currentSystem as StorageSystem).subtypes[selectedSubtype]} />
          ) : (
            <SystemCard {...(currentSystem as SystemCardProps)} />
          )}
        </div>

        <div className="faq-section">
          <button 
            className="faq-toggle"
            onClick={() => setShowFAQs(!showFAQs)}
          >
            <span>Frequently Asked Questions</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showFAQs ? 'rotate-180' : ''}`} />
          </button>
          
          {showFAQs && (
            <div className="faq-content">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};