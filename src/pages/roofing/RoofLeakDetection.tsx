import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofLeakDetection = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Leak Detection"
      description="Expert Detection Services for Identifying Roof Leaks. Our team uses advanced technology to pinpoint the source of leaks, ensuring minimal damage and efficient repairs."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Search className="w-5 h-5 mr-2 text-teal-600" />
              Our Leak Detection Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Advanced tools to find even the smallest leaks</li>
              <li>Detailed mapping to understand moisture infiltration</li>
              <li>Thermal imaging for hidden leak detection</li>
              <li>Moisture meter analysis</li>
              <li>Drone inspections for hard-to-reach areas</li>
              <li>Non-invasive detection techniques</li>
              <li>Comprehensive roof assessment</li>
              <li>Detailed documentation of findings</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Precision in detection</li>
              <li>Non-invasive techniques</li>
              <li>Quick response to prevent damage</li>
              <li>Experienced technicians</li>
              <li>Advanced detection equipment</li>
              <li>Transparent pricing</li>
              <li>Comprehensive reporting</li>
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
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-colors duration-200"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default RoofLeakDetection; 