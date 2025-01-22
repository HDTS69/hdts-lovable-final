import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACRepairs = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="AC Repairs"
      description="Professional Air Conditioning Repair Services. Our expert technicians provide fast, reliable repairs for all types of AC systems to restore your comfort quickly."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-teal-600" />
              Our Repair Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Compressor Repairs</li>
              <li>Refrigerant Leaks</li>
              <li>Electrical Issues</li>
              <li>Fan Motor Replacement</li>
              <li>Thermostat Problems</li>
              <li>Ductwork Repairs</li>
              <li>Noise Reduction</li>
              <li>Performance Issues</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Fast Response Times</li>
              <li>Expert Diagnosis</li>
              <li>Quality Repairs</li>
              <li>Genuine Parts Used</li>
              <li>Warranty Coverage</li>
              <li>Competitive Pricing</li>
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
              className="bg-teal-500 hover:bg-teal-600 hover:scale-105 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 ease-in-out transform"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default ACRepairs; 