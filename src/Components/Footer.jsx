import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt, } from "react-icons/fa";

function Footer() {
  return (
     <footer className="bg-[#0A1C63] text-white relative">
        {/* Top Section */}
        <div className="max-w-[1140px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10">
            {/* Email */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-4">
                <FaEnvelope className="text-[#0A1C63] text-2xl" />
              </div>
              <p className="text-sm md:text-base">
                selvalakshmiandco@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-4">
                <FaPhone className="text-[#0A1C63] text-2xl" />
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                +91 8300190888 / +91 9655190700
                <br /> +91 9655290888
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-4">
                <FaMapMarkerAlt className="text-[#0A1C63] text-2xl" />
              </div>
              <p className="font-semibold text-base">Selvalakshmi and Co</p>
              <p className="text-sm md:text-base leading-relaxed">
                34 A, Thiruvalluvar Street, G.N Mills, Coimbatore - 641029,
                <br /> Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Orange Divider */}
        <div className="border-t-4 border-[#F47C26]"></div>

        {/* Bottom Bar */}
        <div className="bg-white text-[#0A1C63] text-sm">
          <div className="max-w-[1140px] mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-center">
              Copyright © selvalakshmiandco.in. All Rights Reserved.
            </p>
            <div className="flex gap-5 text-sm">
              <a href="#" className="hover:text-[#F47C26]">
                FAQ
              </a>
              <a href="#" className="hover:text-[#F47C26]">
                Terms of Use
              </a>
              <a href="#" className="hover:text-[#F47C26]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
