import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofMaintenance = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Maintenance"
      description="Proactive Maintenance to Extend the Life of Your Roof. Regular maintenance ensures your roof remains in top condition, preventing costly repairs and extending its lifespan."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-teal-600" />
              Our Maintenance Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Routine roof inspections</li>
              <li>Gutter and downpipe cleaning</li>
              <li>Moss and algae removal</li>
              <li>Sealant application</li>
              <li>Preventive treatments</li>
              <li>Minor repairs and fixes</li>
              <li>Regular maintenance contracts</li>
              <li>Detailed condition reports</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Prolongs roof life</li>
              <li>Reduces emergency repair needs</li>
              <li>Customized maintenance plans</li>
              <li>Professional and thorough service</li>
              <li>Cost-effective solutions</li>
              <li>Scheduled maintenance reminders</li>
              <li>Comprehensive service records</li>
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

export default RoofMaintenance; 