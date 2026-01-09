import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        <p className="text-sm text-gray-600">
          © {currentYear} Selvalakshmi and Co. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <a href="#" className="hover:text-[#001f54] transition-colors">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-[#001f54] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;