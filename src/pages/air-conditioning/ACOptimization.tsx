import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACOptimization = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="AC Optimization"
      description="Professional Air Conditioning Optimization Services. Maximize your system's efficiency and performance with our expert optimization services."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-teal-600" />
              Our Optimization Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Performance Analysis</li>
              <li>System Calibration</li>
              <li>Airflow Optimization</li>
              <li>Temperature Control Setup</li>
              <li>Energy Efficiency Tuning</li>
              <li>Smart Control Integration</li>
              <li>Zoning System Setup</li>
              <li>Seasonal Adjustments</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Enhanced System Performance</li>
              <li>Reduced Energy Costs</li>
              <li>Extended Equipment Life</li>
              <li>Improved Comfort Levels</li>
              <li>Expert Technicians</li>
              <li>Latest Optimization Tools</li>
              <li>Customized Solutions</li>
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
              className="bg-teal-500 hover:bg-teal-600 hover:scale-105 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 ease-in-out"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default ACOptimization;