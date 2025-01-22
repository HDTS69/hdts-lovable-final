import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Wrench, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACMaintenance = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="AC Maintenance"
      description="Reliable Repairs and Preventive Maintenance for Air Conditioning Units. Keep your air conditioning system running smoothly with our repair and maintenance services, designed to extend the life of your equipment."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-teal-600" />
              Our Maintenance Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Routine System Checks</li>
              <li>Filter Replacement</li>
              <li>Coil Cleaning</li>
              <li>Refrigerant Level Check</li>
              <li>Component Testing</li>
              <li>Electrical Inspection</li>
              <li>Performance Tuning</li>
              <li>Preventive Maintenance</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Prevents Breakdowns</li>
              <li>Extends System Life</li>
              <li>Improves Efficiency</li>
              <li>Certified Technicians</li>
              <li>Comprehensive Service</li>
              <li>Scheduled Maintenance</li>
              <li>Transparent Pricing</li>
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

export default ACMaintenance;