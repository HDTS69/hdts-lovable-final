import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACReplacement = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="System Upgrades & Replacement"
      description="Upgrade Your Air Conditioning for Enhanced Comfort and Efficiency. Upgrade your existing system to enjoy the latest in cooling technology, improving comfort, reducing costs, and increasing property value."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-teal-600" />
              Our System Upgrade Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>System Assessment</li>
              <li>Efficiency Analysis</li>
              <li>Unit Replacement</li>
              <li>Smart Thermostat Integration</li>
              <li>High-Efficiency Upgrades</li>
              <li>Renewable Energy Integration</li>
              <li>Ductwork Modification</li>
              <li>System Testing</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Latest Technology</li>
              <li>Energy Cost Savings</li>
              <li>Enhanced Comfort</li>
              <li>Expert Installation</li>
              <li>Professional Advice</li>
              <li>Financing Options</li>
              <li>Warranty Coverage</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="space-y-4 mb-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video bg-white" />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/booking')}
              className="bg-teal-500 hover:bg-teal-700 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default ACReplacement;