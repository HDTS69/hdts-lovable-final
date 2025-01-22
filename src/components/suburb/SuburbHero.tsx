import { Button } from "@/components/ui/button";
import { PhoneCall, Clock, Shield, Timer } from "lucide-react";
import { motion } from "framer-motion";

interface SuburbHeroProps {
  suburbName: string;
  scrollToBooking: () => void;
}

export const SuburbHero = ({ suburbName, scrollToBooking }: SuburbHeroProps) => {
  return (
    <section className="relative bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Emergency Services in {suburbName}
          </h1>
          <p className="text-xl text-gray-300">Where Quality Meets Urgency</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center space-x-2 bg-white/10 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-teal-500" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 p-4 rounded-lg">
              <Timer className="w-6 h-6 text-teal-500" />
              <span>30min Response Time*</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-teal-500" />
              <span>100% Workmanship Guarantee</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600"
              onClick={() => window.location.href = 'tel:1300420911'}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-teal-500 hover:bg-gray-100"
              onClick={scrollToBooking}
            >
              Book Online
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};