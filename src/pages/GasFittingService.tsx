import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Flame, Wrench, AlertTriangle, Settings, Home, Construction } from "lucide-react";

const GasFittingService = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set state for back navigation
    window.history.pushState({ openService: 'gas-fitting' }, '', location.pathname);
  }, [location.pathname]);

  const scrollToBooking = () => {
    navigate('/booking');
  };

  const handleServiceClick = (service: string) => {
    navigate(`/${service}`);
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faq');
  };

  const handleBackClick = () => {
    navigate('/', { 
      state: { 
        previousPath: '/gas-fitting',
        openService: 'gas-fitting'
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <button 
        onClick={handleBackClick}
        className="fixed top-24 left-4 z-50 p-2 text-teal-600 hover:text-teal-700"
      >
        ← Back
      </button>
      <StickyHeader scrollToBooking={scrollToBooking} />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
          <h1 className="text-3xl font-bold text-teal-700 mb-4">Gas Fitting Services</h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Professional gas fitting solutions for your home. We provide expert installation, maintenance, and safety services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Gas Line Installation",
              description: "Professional gas line installation services",
              icon: <Construction className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/line-installation"
            },
            {
              title: "Gas Appliance Installation",
              description: "Expert appliance installation and setup",
              icon: <Wrench className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/appliance-installation"
            },
            {
              title: "Gas Heater Services",
              description: "Installation and repair of gas heaters",
              icon: <Flame className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/heater-services"
            },
            {
              title: "Gas Cooktop Installation",
              description: "Professional cooktop installation",
              icon: <Home className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/cooktop"
            },
            {
              title: "Gas Leak Detection",
              description: "Thorough gas leak detection services",
              icon: <AlertTriangle className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/leak-detection"
            },
            {
              title: "Gas Safety Inspections",
              description: "Comprehensive safety checks",
              icon: <Settings className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/safety"
            },
            {
              title: "Gas Compliance",
              description: "Gas compliance certification services",
              icon: <Settings className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/compliance"
            },
            {
              title: "Emergency Gas Services",
              description: "24/7 emergency gas fitting services",
              icon: <AlertTriangle className="w-6 h-6 text-teal-500" />,
              link: "/gas-fitting/emergency"
            }
          ].map((service, index) => (
            <div 
              key={service.title} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 p-4">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 bg-teal-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-teal-700">{service.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{service.description}</p>
                  <button
                    onClick={() => navigate(service.link)}
                    className="mt-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-all duration-300 flex items-center space-x-1 hover:translate-x-0.5"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards" style={{ animationDelay: '800ms' }}>
          <button
            onClick={scrollToBooking}
            className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            Book a Service
          </button>
        </div>
      </div>
      <Footer handleServiceClick={handleServiceClick} handleFaqClick={handleFaqClick} />
    </div>
  );
};

export default GasFittingService;