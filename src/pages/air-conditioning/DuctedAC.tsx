import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DuctedAC = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Ducted Air Conditioning"
      description="Comprehensive Solutions for Ducted Air Conditioning Systems. Ducted systems provide a discreet and powerful solution for whole-home climate control. We offer installation, design, and zoning options."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wind className="w-5 h-5 mr-2 text-teal-600" />
              Our Ducted Systems Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Custom System Design</li>
              <li>Professional Installation</li>
              <li>Zone Control Implementation</li>
              <li>Energy Recovery Integration</li>
              <li>Advanced Control Systems</li>
              <li>Duct Cleaning Services</li>
              <li>System Maintenance</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Whole-House Comfort</li>
              <li>Invisible Installation</li>
              <li>Energy-Efficient Zoning</li>
              <li>Expert System Design</li>
              <li>Long-Term Reliability</li>
              <li>Professional Service</li>
              <li>Satisfaction Guaranteed</li>
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
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default DuctedAC;