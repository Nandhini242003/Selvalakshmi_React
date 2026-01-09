import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
              <a
                href="mailto:selvalakshmiandco@gmail.com"
                className="hover:underline"
              >
                selvalakshmiandco@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-4">
              <FaPhone className="text-[#0A1C63] text-2xl" />
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              <a href="tel:+918300190888" className="hover:underline">
                +91 8300190888
              </a>{" "}
              /{" "}
              <a href="tel:+919655190700" className="hover:underline">
                +91 9655190700
              </a>
              <br />
              <a href="tel:+919655290888" className="hover:underline">
                +91 9655290888
              </a>
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
             <NavLink
    to="/faq"
    className={({ isActive }) =>
      `text-sm font-medium tracking-wide transition-colors
       ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`
    }
  >
    FAQ
  </NavLink>
   <NavLink
    to="/terms-of-use"
    className={({ isActive }) =>
      `text-sm font-medium tracking-wide transition-colors
       ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`
    }
  >
    Terms of Use
  </NavLink>
   <NavLink
    to="/privacy-policy"
    className={({ isActive }) =>
      `text-sm font-medium tracking-wide transition-colors
       ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`
    }
  >
    Privacy Policy
  </NavLink>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
