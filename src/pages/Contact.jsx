import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
       <>
      <Header />
     <div>
      {/* Top Banner Section */}
      <div className="bg-[#0A1C63] text-white py-16 text-center">
        <h1 className="text-4xl font-bold tracking-wide">Contact</h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0A1C63] mb-6">
            Get in touch!
          </h2>

          <div className="mb-6">
            <p className="flex items-center text-gray-700 mb-3">
              <FaPhone className="text-[#0A1C63] mr-3 text-lg" />
              <span>+91 98765 43210</span>
            </p>

            <p className="flex items-start text-gray-700">
              <FaMapMarkerAlt className="text-[#0A1C63] mr-3 text-lg mt-1" />
              <span>
                Selvalakshmi & Co, Main Street, Coimbatore - 641001, Tamil Nadu.
              </span>
            </p>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaXTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#0A1C63] mb-2">
            Make an Online Enquiry
          </h3>
          <p className="text-gray-500 mb-6">
            Fill out the form below to get our proposal.
          </p>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Enter your comment..."
                rows="5"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0A1C63] text-white px-8 py-3 rounded-md hover:bg-[#0c2a9e] transition w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
     <Footer />
    </>
  );
};
export default Contact;
