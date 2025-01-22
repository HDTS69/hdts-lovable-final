import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Droplet, Wrench, Bath, Settings, Waves, Home, Gauge } from "lucide-react";
import { useEffect } from "react";

const PlumbingService = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader scrollToBooking={scrollToBooking} />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
          <h1 className="text-3xl font-bold text-teal-700 mb-4">Professional Plumbing Services</h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Trust our expert plumbers for all your plumbing needs. We provide comprehensive solutions with the highest standards of quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Hot Water Systems",
              description: "Installation and repairs for all hot water systems",
              icon: <Droplet className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/hot-water"
            },
            {
              title: "Drain Cleaning",
              description: "Professional drain cleaning and maintenance",
              icon: <Waves className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/drain-cleaning"
            },
            {
              title: "Fixtures & Taps",
              description: "Installation and repair of fixtures and taps",
              icon: <Bath className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/fixtures"
            },
            {
              title: "Toilet Plumbing",
              description: "Expert toilet installation and repairs",
              icon: <Wrench className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/toilet"
            },
            {
              title: "Pipe Services",
              description: "Comprehensive pipe repairs and maintenance",
              icon: <Settings className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/pipes"
            },
            {
              title: "Sewer Services",
              description: "Professional sewer line maintenance",
              icon: <Waves className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/sewer"
            },
            {
              title: "Renovations",
              description: "Complete bathroom and kitchen renovations",
              icon: <Home className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/renovations"
            },
            {
              title: "Water Pressure",
              description: "Water pressure solutions and repairs",
              icon: <Gauge className="w-6 h-6 text-teal-500" />,
              link: "/plumbing/pressure"
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

export default PlumbingService;
