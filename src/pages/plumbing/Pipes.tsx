import { useNavigate } from "react-router-dom";
import { Wrench, Shield } from "lucide-react";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";

const Pipes = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/', { 
      state: { 
        previousPath: '/plumbing',
        openService: 'plumbing'
      }
    });
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faq');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader scrollToBooking={() => navigate('/booking')} />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-3xl font-bold text-teal-600 mb-4">
                Pipe Installation & Repairs
              </h1>
              <p className="text-gray-600 mb-6">
                Expert pipe installation, repair, and maintenance services. From fixing leaks to installing new plumbing systems, we ensure reliable solutions for all your piping needs.
              </p>

              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-semibold text-teal-700">Our Pipe Services</h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600">
                    <li>• Pipe Installation</li>
                    <li>• Leak Detection & Repair</li>
                    <li>• Pipe Replacement</li>
                    <li>• Drain Cleaning</li>
                    <li>• Water Line Services</li>
                    <li>• Emergency Repairs</li>
                    <li>• Preventive Maintenance</li>
                    <li>• System Upgrades</li>
                  </ul>
                </div>

                <div className="bg-teal-50/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-semibold text-teal-700">Why Choose Our Services?</h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600">
                    <li>• 24/7 Emergency Service</li>
                    <li>• Licensed Plumbers</li>
                    <li>• Quality Materials</li>
                    <li>• Warranty Backed</li>
                    <li>• Competitive Rates</li>
                    <li>• Professional Service</li>
                    <li>• Satisfaction Guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Images and Button */}
            <div>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => navigate("/booking")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
    </div>
  );
};

export default Pipes;