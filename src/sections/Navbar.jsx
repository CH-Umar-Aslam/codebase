import React, { useState } from 'react';
// import { MenuIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="font-bold text-lg">Portfolio</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <MenuIcon className="h-6 w-6" aria-hidden="true" />
             */}
            <h1>Menu</h1>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-4">
          <a href="#services" className="text-gray-900 text-sm font-medium">Home</a>
          <a href="#services" className="text-gray-900 text-sm font-medium">About Us</a>

          <a href="#services" className="text-gray-900 text-sm font-medium">Services</a>
          <a href="#contact" className="text-gray-900 text-sm font-medium">Contact Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#contact" className="text-gray-900 block px-3 py-2 text-base font-medium">Home </a>
            <a href="#contact" className="text-gray-900 block px-3 py-2 text-base font-medium">About Us</a>
            <a href="#services" className="text-gray-900 block px-3 py-2 text-base font-medium">Services</a>
            <a href="#contact" className="text-gray-900 block px-3 py-2 text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
