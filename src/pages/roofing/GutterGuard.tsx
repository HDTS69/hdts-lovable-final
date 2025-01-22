import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GutterGuard = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Gutter Guard"
      description="Protective Gutter Guard Solutions for Efficient Water Flow. Gutter guards prevent leaves, debris, and pests from clogging your gutters, ensuring they function effectively and reducing the need for frequent cleaning."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Filter className="w-5 h-5 mr-2 text-teal-600" />
              Our Gutter Guard Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Professional guard installation</li>
              <li>Custom gutter guard solutions</li>
              <li>Micro-mesh guard installation</li>
              <li>Reverse-curve guard fitting</li>
              <li>Regular inspections</li>
              <li>Maintenance and cleaning</li>
              <li>Guard repair and replacement</li>
              <li>System upgrades</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Reduces cleaning frequency</li>
              <li>Prevents water overflow</li>
              <li>Extends gutter lifespan</li>
              <li>Expert installation</li>
              <li>Quality materials</li>
              <li>Customized solutions</li>
              <li>Satisfaction guaranteed</li>
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

export default GutterGuard; 