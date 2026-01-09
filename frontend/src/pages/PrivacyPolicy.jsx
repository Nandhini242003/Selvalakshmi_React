import Header from "../Components/Header";
import Footer from "../Components/Footer";
const PrivacyPolicy = () => {
  return (
     <>
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#0A1C63] mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-4">
        We respect your privacy and are committed to protecting your personal
        information.
      </p>

      <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
      <p className="text-gray-600">
        We collect information you provide when filling forms or contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6">How We Use Information</h2>
      <p className="text-gray-600">
        We use your information only to respond to inquiries and improve our
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6">Data Security</h2>
      <p className="text-gray-600">
        We take reasonable measures to protect your data.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
