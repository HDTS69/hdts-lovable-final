import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofVentilation = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Ventilation"
      description="Optimal Roof Ventilation for Healthier Homes. Proper ventilation is key to extending roof life and improving indoor air quality. Our services ensure your roof breathes correctly."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wind className="w-5 h-5 mr-2 text-teal-600" />
              Our Ventilation Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Ventilation system installation</li>
              <li>Whirlybird installation</li>
              <li>Ridge vent solutions</li>
              <li>Soffit vent installation</li>
              <li>Ventilation inspection</li>
              <li>System efficiency checks</li>
              <li>Repairs and maintenance</li>
              <li>Airflow optimization</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Enhances roof longevity</li>
              <li>Improves energy efficiency</li>
              <li>Reduces condensation</li>
              <li>Prevents mold growth</li>
              <li>Expert installation</li>
              <li>Quality materials used</li>
              <li>Customized solutions</li>
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

export default RoofVentilation;