import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";

const Header = () => {
  return (
    <header className="w-full">
      
      {/* 1. TOP BAR - DARK NAVY BACKGROUND */}
      <div className="bg-[#2c3e50] text-white text-xs py-2.5"> 
        
        <div className={`${WRAPPER_CLASSES} flex justify-between items-center`}>

          {/* LEFT SIDE: Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors text-sm">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-sm">
              <FaTwitter />
            </a>
          </div>

          {/* RIGHT SIDE: Contact Details */}
          <div className="flex items-center gap-6">
            
            <a href="tel:+919884430594" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <FaPhone className="text-[10px]" /> 
              <span className="text-xs">12345677889</span>
            </a>

            <a href="mailto:selvalakshmandco@gmail.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <FaEnvelope className="text-[10px]" /> 
              <span className="text-xs">selvalakshmandco@gmail.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAV BAR - WHITE BACKGROUND */}
      <nav className="bg-white shadow-sm">
        
        <div className={`${WRAPPER_CLASSES} py-4 flex justify-between items-center`}>

          {/* Logo Area */}
          <a href="/" className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="Scaffolding Company Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              Services
            </a>
            <a href="#projects" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              Projects
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#2c3e50] transition-colors text-sm font-medium tracking-wide">
              Contact Us
            </a>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;