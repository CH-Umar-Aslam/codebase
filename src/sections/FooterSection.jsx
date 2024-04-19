import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MailIcon from '@mui/icons-material/Mail';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        <div className="flex items-center  lg:mb-0">
          <span className="text-lg mr-2"><CopyrightIcon /> | {currentYear}</span>

        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/CH-Umar-Aslam/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <GitHubIcon />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <LinkedInIcon />
          </a>
          <a href="chumaraslam22@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};





export default FooterSection;
