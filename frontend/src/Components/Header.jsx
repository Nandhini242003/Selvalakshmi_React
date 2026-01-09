import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { getInitials } from "../utils/avatar";

const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#2c3e50] text-white text-xs py-2.5">
        <div className={`${WRAPPER_CLASSES} flex justify-between items-center`}>
          {/* Social */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone className="text-[10px]" />
              <span>1234567889</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[10px]" />
              <span>selvalakshmandco@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white shadow-sm">
        <div
          className={`${WRAPPER_CLASSES} py-4 flex justify-between items-center`}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </NavLink>

          {/* Menu */}
          <div className="flex items-center gap-8">
            {[
              { path: "/", label: "HOME" },
              { path: "/about", label: "ABOUT" },
              { path: "/services", label: "SERVICES" },
              { path: "/project", label: "PROJECT" },
              { path: "/testimonials", label: "TESTIMONIALS" },
              { path: "/contact", label: "CONTACT" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* AUTH SECTION */}
          <div className="flex items-center gap-4 relative">
            {!user ? (
              <NavLink
                to="/login"
                className="text-sm font-medium text-gray-700 px-4 py-2 border rounded hover:bg-orange-50"
              >
                LOGIN
              </NavLink>
            ) : (
              <div className="relative">
                {/* Avatar */}
                <div
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full bg-orange-500 text-white
                             flex items-center justify-center font-bold cursor-pointer select-none"
                >
                  {getInitials(user.name)}
                </div>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded z-50">
                    <NavLink
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </NavLink>

                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
