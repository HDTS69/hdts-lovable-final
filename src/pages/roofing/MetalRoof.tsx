import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, HardHat } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetalRoof = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Metal Roofing"
      description="Durable and Stylish Metal Roofing Solutions. Metal roofing offers longevity, energy efficiency, and aesthetic appeal. We provide installation, repair, and maintenance for all metal roof types."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <HardHat className="w-5 h-5 mr-2 text-teal-600" />
              Our Metal Roofing Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Installation of new metal roofs</li>
              <li>Expert repairs and maintenance</li>
              <li>Custom metal roof designs</li>
              <li>Coating and painting services</li>
              <li>Corrosion prevention treatments</li>
              <li>Regular inspections</li>
              <li>Emergency repairs</li>
              <li>System upgrades</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>High-quality materials</li>
              <li>Experienced in various metal types</li>
              <li>Energy-efficient solutions</li>
              <li>Long-term durability</li>
              <li>Aesthetic options available</li>
              <li>Professional installation</li>
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

export default MetalRoof; 