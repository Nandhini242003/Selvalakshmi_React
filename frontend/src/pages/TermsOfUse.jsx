import Header from "../Components/Header";
import Footer from "../Components/Footer";
const TermsOfUse = () => {
  return (
     <>
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#0A1C63] mb-6">
        Terms of Use
      </h1>

      <p className="text-gray-600 mb-4">
        By using this website, you agree to follow these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6">Website Usage</h2>
      <p className="text-gray-600">
        You agree not to misuse the site or attempt unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mt-6">Content Ownership</h2>
      <p className="text-gray-600">
        All content belongs to us and cannot be copied without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6">Updates</h2>
      <p className="text-gray-600">
        We may update these terms at any time without prior notice.
      </p>
    </div>
    </>
  );
};

export default TermsOfUse;
