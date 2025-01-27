import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SplitSystem = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Split System Installation"
      description="Efficient and Professional Split System Air Conditioning Installation. Our experts ensure your split system is installed with precision, offering optimal cooling or heating tailored to your space."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Thermometer className="w-5 h-5 mr-2 text-teal-600" />
              Our Split System Installation Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Site Assessment and Planning</li>
              <li>Indoor and Outdoor Unit Installation</li>
              <li>Multi-split System Installations</li>
              <li>High Wall Unit Installation</li>
              <li>Floor Console Installation</li>
              <li>Ceiling Cassette Installation</li>
              <li>Home Automation Integration</li>
              <li>System Testing and Optimization</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Expert Installation Team</li>
              <li>Energy-Efficient Solutions</li>
              <li>Customized Room Layout Design</li>
              <li>Quick and Clean Installation</li>
              <li>Comprehensive Warranty</li>
              <li>Professional Testing</li>
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
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default SplitSystem;
