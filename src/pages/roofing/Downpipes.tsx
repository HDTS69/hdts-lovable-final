import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Downpipes = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Downpipes"
      description="Efficient Downpipe Services for Proper Water Management. Properly functioning downpipes are crucial for preventing water damage. We offer installation, repair, and maintenance to ensure they work effectively."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Droplets className="w-5 h-5 mr-2 text-teal-600" />
              Our Downpipe Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>New downpipe installation</li>
              <li>Downpipe replacement</li>
              <li>Leak repair and sealing</li>
              <li>Gutter connection fixes</li>
              <li>Underground drainage</li>
              <li>Rainwater harvesting setup</li>
              <li>Maintenance and cleaning</li>
              <li>Emergency repairs</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Prevents water damage</li>
              <li>Ensures proper water flow</li>
              <li>Custom solutions available</li>
              <li>Professional installation</li>
              <li>Regular maintenance</li>
              <li>Quality materials used</li>
              <li>Expert workmanship</li>
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

export default Downpipes; 