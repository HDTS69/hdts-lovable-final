import { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you service my area?",
    answer: "We primarily service Brisbane but also Ipswich and Morten bay and Gold Coast. Please ask to confirm if we can reach your location."
  },
  {
    question: "Do you have a call-out fee?",
    answer: "Yes, we have a $120 attendance fee. This covers travel in one of our fully stocked vans and the first 15 minutes for you to show the technician your issue."
  },
  {
    question: "What are your operating hours?",
    answer: "We operate Monday to Friday from 7:00 AM to 5:00 PM. Emergency services may be available outside these hours—just ask!"
  },
  {
    question: "What types of air conditioning systems do you install?",
    answer: "We install split systems, ducted systems, and reverse cycle air conditioners. We can also recommend the best system for your home based on your needs and budget."
  },
  {
    question: "What services do you offer?",
    answer: "At HD Trade Services, we specialize in plumbing, gas fitting, roofing, and air conditioning installations and maintenance. Whether you need a quick repair, regular servicing, or a complete installation, we've got you covered."
  },
  {
    question: "Can you install hot water systems?",
    answer: "Yes, we install and repair all types of hot water systems, including gas, electric, and solar. Let us know your requirements, and we can recommend the best solution for your home."
  },
  {
    question: "Do you do gas fitting and appliance installation?",
    answer: "Yes, we provide professional gas fitting services, including the installation and maintenance of gas appliances like stoves, ovens, and heaters."
  },
  {
    question: "Can you replace my roof or fix a roof leak?",
    answer: "We handle both small roof repairs and full roof replacements. We work with all types of roofing materials, including metal, tile, and more."
  },
  {
    question: "What should I do if I smell gas?",
    answer: "If you smell gas, turn off your gas supply at the main valve immediately and call us or your local gas emergency service. Avoid using electrical devices or lighting any flames."
  },
  {
    question: "Do you provide warranties for your work?",
    answer: "Yes, we provide warranties on both our workmanship and the materials we use. The specific terms depend on the type of service, so feel free to ask for details."
  },
  {
    question: "How can I book a service?",
    answer: "You can book a service by calling us directly or using the contact form on our website. We'll get back to you promptly to confirm the details."
  },
  {
    question: "Do you handle insurance work?",
    answer: "Yes, we can assist with insurance claims for plumbing, roofing, or other damage-related work. We'll provide all necessary documentation and liaise with your insurer if needed."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We ask for at least 24 hours' notice if you need to cancel or reschedule your appointment. This helps us manage our schedule and accommodate other customers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, card payments, and bank transfers. For larger jobs, we can discuss payment plans or financing options."
  },
  {
    question: "Do you offer maintenance packages?",
    answer: "Yes, we offer regular maintenance packages for air conditioning, plumbing, and roofing to keep your systems running smoothly and prevent costly repairs."
  },
  {
    question: "Can you help me choose the right air conditioning system for my home?",
    answer: "We'll assess your home's size, layout, and insulation to recommend the best air conditioning system for your needs and budget."
  },
  {
    question: "How long will the job take?",
    answer: "The time required depends on the complexity of the job. For standard repairs, it's often resolved within a few hours. Installations or larger projects may take a day or longer."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Customer satisfaction is our top priority. If you're not happy with our work, let us know, and we'll do our best to make it right."
  }
];

export type FAQSectionRef = {
  toggleFAQ: () => void;
};

export const FAQSection = forwardRef<FAQSectionRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  useImperativeHandle(ref, () => ({
    toggleFAQ
  }));

  return (
    <section id="faq" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 space-y-4">
        <div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 space-x-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors duration-200"
          onClick={toggleFAQ}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-teal-700 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-9 p-0">
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle FAQ</span>
          </div>
        </div>
        {isOpen && (
          <div className="space-y-2 transition-all duration-300 ease-in-out">
            <div className="rounded-md border px-4 py-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-zinc-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';
