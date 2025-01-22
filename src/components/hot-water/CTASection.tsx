import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our expert team today for a consultation and quote on your hot water system needs.
          </p>
          <Button 
            size="lg"
            className="bg-teal-600 hover:bg-teal-700"
            onClick={() => window.location.href = '/booking'}
          >
            <PhoneCall className="mr-2" />
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};