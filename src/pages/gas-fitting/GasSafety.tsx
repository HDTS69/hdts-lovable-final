import { GasServiceLayout } from "@/components/services/gas-fitting/GasServiceLayout";
import { Wrench, Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GasSafety = () => {
  const navigate = useNavigate();

  return (
    <GasServiceLayout
      title="Gas Safety Services"
      description="Professional gas safety inspection and testing services. We ensure your gas systems are operating safely and efficiently."
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
              Our Safety Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Comprehensive safety inspections</li>
              <li>Gas leak detection</li>
              <li>Carbon monoxide testing</li>
              <li>Pressure testing</li>
              <li>Safety device checks</li>
              <li>Ventilation assessment</li>
              <li>Emergency shutoff testing</li>
              <li>Safety certification</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Licensed safety inspectors</li>
              <li>Advanced testing equipment</li>
              <li>Thorough documentation</li>
              <li>Competitive pricing</li>
              <li>Emergency service available</li>
              <li>Expert recommendations</li>
              <li>Peace of mind guaranteed</li>
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

export default GasSafety;