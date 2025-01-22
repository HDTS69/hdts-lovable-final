import { useNavigate } from "react-router-dom";
import { Wrench, Shield } from "lucide-react";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Pressure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader scrollToBooking={handleBooking} />
      
      <main className="flex-grow" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <article className="focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-500 rounded-lg p-4">
              <h1 className="text-3xl font-bold text-teal-600 mb-4" tabIndex={0}>
                Water Pressure Services
              </h1>
              <p className="text-gray-600 mb-6" tabIndex={0}>
                Expert water pressure solutions for your property. From pressure testing to system optimization, we ensure consistent and reliable water pressure throughout your home.
              </p>

              <div className="space-y-4">
                <section 
                  className="bg-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  aria-labelledby="services-title"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    <h2 id="services-title" className="text-xl font-semibold text-teal-700">
                      Our Pressure Services
                    </h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600" role="list">
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Pressure Testing</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• System Optimization</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Pump Installation</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Pressure Valve Repairs</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• System Upgrades</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Emergency Solutions</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Preventive Maintenance</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Performance Monitoring</li>
                  </ul>
                </section>

                <section 
                  className="bg-teal-50/50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  aria-labelledby="benefits-title"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    <h2 id="benefits-title" className="text-xl font-semibold text-teal-700">
                      Why Choose Our Services?
                    </h2>
                  </div>
                  <ul className="space-y-1.5 text-gray-600" role="list">
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Expert Diagnostics</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Licensed Technicians</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Advanced Equipment</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Long-lasting Solutions</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Competitive Pricing</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Fast Response Times</li>
                    <li className="hover:text-teal-700 transition-colors duration-200" tabIndex={0}>• Professional Service</li>
                  </ul>
                </section>
              </div>
            </article>

            {/* Right Column - Images and Button */}
            <aside className="space-y-6">
              <div className="space-y-4">
                <div 
                  className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-sm" 
                  role="img" 
                  aria-label="Water pressure service illustration"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" 
                    role="img" 
                    aria-label="Additional pressure service illustration 1"
                  />
                  <div 
                    className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" 
                    role="img" 
                    aria-label="Additional pressure service illustration 2"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleBooking}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  aria-label="Book water pressure service online"
                >
                  Book Online
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
    </div>
  );
};

export default Pressure;