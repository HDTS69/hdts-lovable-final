import { RoofingServiceLayout } from "@/components/services/roofing/RoofingServiceLayout";

const RoofSealant = () => {
  return (
    <RoofingServiceLayout
      title="Roof Sealing Services"
      description="Professional roof sealing and waterproofing solutions. We protect your property from water damage."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700">Professional Roof Sealing</h2>
          <p className="text-gray-600">
            Our expert roof sealing services provide comprehensive protection for your property. We use high-quality sealants and professional application techniques to ensure long-lasting results.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Premium quality roof sealants</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Professional application</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Long-lasting protection</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Prevents water damage</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700">Why Choose Our Service</h2>
          <p className="text-gray-600">
            With years of experience in roof sealing, we provide reliable and effective solutions for all types of roofs. Our team ensures proper application and lasting results.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Expert technicians</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Comprehensive service</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Quality materials</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-teal-500">✓</span>
              <span>Satisfaction guaranteed</span>
            </li>
          </ul>
        </div>
      </div>
    </RoofingServiceLayout>
  );
};

export default RoofSealant;