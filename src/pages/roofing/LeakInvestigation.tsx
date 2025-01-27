import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeakInvestigation = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Leak Investigation"
      description="Thorough Investigations to Uncover the Root Cause of Leaks. Our detailed investigations help in preventing future leaks by addressing the underlying issues."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Search className="w-5 h-5 mr-2 text-teal-600" />
              Our Investigation Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Source identification and tracking</li>
              <li>Comprehensive roof assessment</li>
              <li>Water path tracing</li>
              <li>Structural integrity checks</li>
              <li>Cause analysis and documentation</li>
              <li>Preventive measure planning</li>
              <li>Detailed inspection reports</li>
              <li>Solution recommendations</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Detailed reports for clarity</li>
              <li>Preventive solutions to save costs</li>
              <li>Expert analysis for complex issues</li>
              <li>Transparent process</li>
              <li>Advanced detection equipment</li>
              <li>Experienced investigators</li>
              <li>Tailored solutions</li>
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

export default LeakInvestigation; 