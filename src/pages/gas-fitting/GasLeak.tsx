import { GasServiceLayout } from "@/components/services/gas-fitting/GasServiceLayout";
import { Wrench, Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GasLeak = () => {
  const navigate = useNavigate();

  return (
    <GasServiceLayout
      title="Gas Leak Detection"
      description="Professional gas leak detection and repair services. Fast response times and expert solutions for all gas emergencies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <p className="text-red-700 text-sm font-medium">
                If you smell gas or suspect a gas leak, evacuate the area immediately and call emergency services on 000.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-teal-600" />
              Our Detection Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Gas leak detection</li>
              <li>Emergency repairs</li>
              <li>Pressure testing</li>
              <li>Gas line inspection</li>
              <li>Safety assessments</li>
              <li>Leak prevention</li>
              <li>24/7 emergency response</li>
              <li>System maintenance</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Fast response times</li>
              <li>Licensed gas fitters</li>
              <li>Latest detection equipment</li>
              <li>Thorough inspections</li>
              <li>Emergency service available</li>
              <li>Competitive pricing</li>
              <li>Satisfaction guaranteed</li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video bg-white mb-4" />
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
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
      </div>
    </GasServiceLayout>
  );
};

export default GasLeak;