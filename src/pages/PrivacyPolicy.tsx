import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-zinc-200">
            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including name, contact information, and service details when you book our services.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, communicate with you about bookings, and send service updates.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;