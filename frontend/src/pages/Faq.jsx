import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Faq = () => {
  return (
     <>
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#0A1C63] mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold text-lg">
            1. How can I contact your team?
          </h3>
          <p className="text-gray-600">
            You can reach us through our Contact page or call us directly.
          </p>
        </div>

        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold text-lg">
            2. How long does project delivery take?
          </h3>
          <p className="text-gray-600">
            Delivery time depends on project size — usually 2 to 6 weeks.
          </p>
        </div>

        <div className="p-5 border rounded-lg">
          <h3 className="font-semibold text-lg">
            3. Do you provide customization?
          </h3>
          <p className="text-gray-600">
            Yes — we customize based on your needs and budget.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Faq;
