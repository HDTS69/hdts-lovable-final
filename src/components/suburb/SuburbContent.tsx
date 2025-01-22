import { MapPin, Star, Clock, Shield } from "lucide-react";

interface SuburbContentProps {
  suburb: {
    name: string;
    content: string;
    postcode: string;
    region: string;
  };
}

export const SuburbContent = ({ suburb }: SuburbContentProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-center mb-8">
            Professional Services in {suburb.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">{suburb.content}</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                  Local Service Area
                </h3>
                <p>
                  Servicing {suburb.name} {suburb.postcode} and surrounding areas in Brisbane.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Why Choose Us in {suburb.name}?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                  <span>Local expertise with deep knowledge of {suburb.name}'s unique requirements</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                  <span>24/7 emergency response for urgent issues</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                  <span>Quality assurance with satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};