import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmergencyAC = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Emergency AC Services"
      description="24/7 Emergency Air Conditioning Services for Urgent Needs. When your AC system fails unexpectedly, our emergency services are here to restore your comfort promptly."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-teal-600" />
              Our Emergency Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>24/7 Emergency Response</li>
              <li>Rapid On-Site Diagnosis</li>
              <li>Immediate Repairs</li>
              <li>Temporary Cooling Solutions</li>
              <li>After-Hours Service</li>
              <li>Priority Scheduling</li>
              <li>Emergency Parts Sourcing</li>
              <li>System Restoration</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Rapid Response Time</li>
              <li>Experienced Emergency Team</li>
              <li>24/7 Availability</li>
              <li>Efficient Problem Resolution</li>
              <li>Transparent Pricing</li>
              <li>Professional Service</li>
              <li>Peace of Mind</li>
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

export default EmergencyAC;