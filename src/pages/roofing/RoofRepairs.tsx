import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Hammer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofRepairs = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Repairs"
      description="Comprehensive Roof Repair Services for All Types of Roofs. From minor fixes to major overhauls, we handle all aspects of roof repairs to restore your roof's integrity and appearance."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Hammer className="w-5 h-5 mr-2 text-teal-600" />
              Our Repair Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Minor repairs and quick fixes</li>
              <li>Major structural repairs</li>
              <li>Emergency repair service</li>
              <li>Storm damage repair</li>
              <li>Hail damage repair</li>
              <li>Wind damage repair</li>
              <li>Leak repairs</li>
              <li>Preventive maintenance</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>24/7 availability for emergencies</li>
              <li>High-quality materials</li>
              <li>Skilled, certified roofers</li>
              <li>Satisfaction guaranteed</li>
              <li>Fair and upfront pricing</li>
              <li>Fast response times</li>
              <li>Comprehensive warranties</li>
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

export default RoofRepairs; 