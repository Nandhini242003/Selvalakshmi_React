import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React from "react";

const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";
function Header() {
  return (
         <header className="w-full">
        {/* 1. TOP BAR - DARK NAVY BACKGROUND */}
        <div className="bg-[#2c3e50] text-white text-xs py-2.5">
          <div
            className={`${WRAPPER_CLASSES} flex justify-between items-center`}
          >
            {/* LEFT SIDE: Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors text-sm"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-colors text-sm"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors text-sm"
              >
                <FaTwitter />
              </a>
            </div>
            {/* RIGHT SIDE: Contact Details */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+919884430594"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaPhone className="text-[10px]" />
                <span className="text-xs">1234567889</span>
              </a>
              <a
                href="mailto:selvalakshmandco@gmail.com"
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaEnvelope className="text-[10px]" />
                <span className="text-xs">selvalakshmandco@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAV BAR - WHITE BACKGROUND */}
        <nav className="bg-white shadow-sm">
          <div
            className={`${WRAPPER_CLASSES} py-4 flex justify-between items-center`}
          >
            {/* Logo Area */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Scaffolding Company Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
            {/* Navigation Menu */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                ABOUT US
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                SERVICES
              </Link>
              <Link
                to="/project"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                PROJECT
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                TESTIMONIALS
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium tracking-wide"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </nav>
      </header>

  );
}

export default Header;
