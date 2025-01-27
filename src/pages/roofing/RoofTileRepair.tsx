import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";
import { Shield, Hammer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoofTileRepair = () => {
  const navigate = useNavigate();

  return (
    <RoofingServiceLayout
      title="Roof Tile Repair"
      description="Expert Repair and Replacement of Roof Tiles. Whether it's fixing a few broken tiles or replacing an entire section, we ensure your tiled roof remains beautiful and functional."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Hammer className="w-5 h-5 mr-2 text-teal-600" />
              Our Tile Repair Services
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Precision repair of individual tiles</li>
              <li>Full or partial tile replacement</li>
              <li>Tile color matching</li>
              <li>Sourcing rare tiles</li>
              <li>Structural support assessment</li>
              <li>Waterproofing solutions</li>
              <li>Ridge capping repair</li>
              <li>Preventive maintenance</li>
            </ul>
          </div>
          
          <div className="bg-teal-50/50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-600" />
              Why Choose Our Services?
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Attention to detail</li>
              <li>Preserves original look</li>
              <li>Durable solutions</li>
              <li>Skilled craftsmen</li>
              <li>Quality materials</li>
              <li>Competitive pricing</li>
              <li>Satisfaction guaranteed</li>
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

export default RoofTileRepair; 