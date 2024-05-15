import React, { useState } from 'react';
import logo from "../assets/logo.png"
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
    <nav className="bg-[#183247]  shadow-2xl shadow-yellow-100  ">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src={logo} className="font-bold w-24 mix-blend-screen h-16 bg-transparent text-lg" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center  justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only ">Open main menu</span>

            <MenuIcon />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden  sm:flex space-x-4 text-[#aca977] text-sm sm:text-[15px] font-medium">
          <a className='cursor-pointer' onClick={() => scrollSection("ES")}>About Us</a>
          <a className='cursor-pointer' onClick={() => scrollSection("SS")}>Services</a>
          <a className='cursor-pointer' onClick={() => scrollSection("FS")} >Contact Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute   inset-0 sm:hidden transition-transform duration-300 ${isOpen ? 'translate-y-2 items-center justify-center top-14  z-10' : '-translate-y-full top-0   z-10'
          }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2  pb-3  w-full h-[9rem] bg-[#2B3339] text-gray-300 space-y-1">

          <a onClick={() => scrollSection("ES")} className=" block px-3 py-2 text-base font-medium">About Me</a>
          <a onClick={() => scrollSection("SS")} className=" block px-3 py-2 text-base font-medium">Services</a>
          <a onClick={() => scrollSection("FS")} className=" block px-3 py-2 text-base font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
