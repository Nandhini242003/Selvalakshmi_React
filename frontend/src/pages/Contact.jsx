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
import { useState } from "react";

const Contact = () => {
   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted!");
      // 👉 send to backend / API here later
    }
  };
  return (
       <>
      
      {/* Banner Section */}
      <div className="bg-[#0A1C63] py-16 text-center">
  <h1 className="text-4xl font-bold text-white tracking-wide">
    CONTACT US
  </h1>
  <p className="text-gray-200 mt-2">
    Take a look at our latest interior and design works.
  </p>
</div>
     <div>

     

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
              <a href="tel:+919884430594" className="hover:underline">+91 98844 30594</a>
           </p>

            <p className="flex items-start text-gray-700">
              <FaMapMarkerAlt className="text-[#0A1C63] mr-3 text-lg mt-1" />
              <span>
                Selvalakshmi & Co, Main Street, Coimbatore - 641001, Tamil Nadu.
              </span>
            </p>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="https://www.youtube.com/" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="https://www.twitter.com/" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="p-3 bg-gray-100 rounded-full hover:bg-[#0A1C63] hover:text-white transition">
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

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0A1C63]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your comment..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
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

    </>
  );
};

export default Contact;