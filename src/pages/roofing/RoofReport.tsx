import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { ClipboardList, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofReport = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Report"
      description="Detailed Roof Reports for Informed Decisions. Our roof reports provide a comprehensive overview of your roof's condition, helping you make informed decisions on repairs or replacements."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <ClipboardList className="w-5 h-5 mr-2 text-teal-600" />
              Our Report Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Comprehensive condition assessment</li>
              <li>Detailed damage documentation</li>
              <li>Photographic evidence</li>
              <li>Written analysis</li>
              <li>Cost estimates for repairs</li>
              <li>Maintenance recommendations</li>
              <li>Safety compliance checks</li>
              <li>Future maintenance planning</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>In-depth analysis</li>
              <li>Clear, easy-to-understand reports</li>
              <li>Expert recommendations</li>
              <li>Helps in planning and budgeting</li>
              <li>Independent assessment</li>
              <li>Expertise in all roof types</li>
              <li>Timely report delivery</li>
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

export default RoofReport; 