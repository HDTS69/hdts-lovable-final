import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-6 text-zinc-200">
            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using HD Trade Services' website and services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">2. Services</h2>
              <p className="mb-4">
                HD Trade Services provides plumbing, gas fitting, air conditioning, and roofing services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">3. Booking and Payments</h2>
              <p className="mb-4">
                All bookings are subject to availability. Prices are in Australian dollars and include GST. Payment terms and conditions will be specified at the time of booking.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">4. Cancellation Policy</h2>
              <p className="mb-4">
                Cancellations must be made at least 24 hours before the scheduled service. Late cancellations may incur a fee.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">5. Liability</h2>
              <p className="mb-4">
                While we strive to provide the highest quality service, HD Trade Services is not liable for any indirect, incidental, or consequential damages.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;