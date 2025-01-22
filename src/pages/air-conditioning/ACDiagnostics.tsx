import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACDiagnostics = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="AC Diagnostics"
      description="Professional Air Conditioning Diagnostic Services. Our expert technicians use advanced diagnostic tools to identify and resolve AC issues quickly and accurately."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Search className="w-5 h-5 mr-2 text-teal-600" />
              Our Diagnostic Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Comprehensive System Analysis</li>
              <li>Performance Testing</li>
              <li>Refrigerant Level Checks</li>
              <li>Electrical System Testing</li>
              <li>Airflow Measurement</li>
              <li>Temperature Differential Tests</li>
              <li>Component Inspection</li>
              <li>Efficiency Assessment</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Advanced Diagnostic Tools</li>
              <li>Expert Technicians</li>
              <li>Accurate Problem Detection</li>
              <li>Detailed Reports</li>
              <li>Cost-Effective Solutions</li>
              <li>Quick Turnaround</li>
              <li>Preventive Recommendations</li>
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

export default ACDiagnostics;