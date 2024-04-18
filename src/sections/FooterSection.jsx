import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 lg:mb-0">
          <span className="text-lg font-bold mr-2"><CopyrightIcon /> created by Umar dev {currentYear}</span>

        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/CH-Umar-Aslam/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <GitHubIcon />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};





export default FooterSection;
