import React, { useState } from 'react';
import SegmentIcon from '@mui/icons-material/Segment';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollSection = (val) => {
    if (val == "FS") {
      document.getElementById("FTS").scrollIntoView()
    }
    else if (val == "SS") {
      document.getElementById("skillsection").scrollIntoView()
    }
    else if (val == "ES") {
      document.getElementById("experiencesection").scrollIntoView()
    }

  }
  return (
    <nav className="bg-white shadow-lg  ">
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
            <MenuIcon />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden  sm:flex space-x-4 text-gray-900 text-sm font-medium">
          <a onClick={() => scrollSection("ES")}>About Us</a>
          <a onClick={() => scrollSection("SS")}>Services</a>
          <a onClick={() => scrollSection("FS")} >Contact Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute   inset-0 sm:hidden transition-transform duration-300 ${isOpen ? 'translate-y-0 items-center justify-center top-14  z-10' : '-translate-y-full top-0   z-10'
          }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2  pb-3  w-full h-[43%] bg-gray-100 space-y-1">

          <a onClick={() => scrollSection("ES")} className="text-gray-900 block px-3 py-2 text-base font-medium">About Us</a>
          <a onClick={() => scrollSection("SS")} className="text-gray-900 block px-3 py-2 text-base font-medium">Services</a>
          <a onClick={() => scrollSection("FS")} className="text-gray-900 block px-3 py-2 text-base font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
