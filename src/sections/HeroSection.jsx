import React from 'react';
import heroImage from "../assets/crop2.png";
import resume from "../assets/Resume.pdf"
import "../index.css"
const HeroSection = () => {
  return (
    <div

      className="px-4 lg:px-0"
    >

      <div className={`hero-section  sm:max-w-7xl h-[400px]   px-4 sm:px-12 mx-auto flex flex-col md:flex-row  lg:gap-0 items-center justify-center`}>
        {/*Text Section */}
        <div className="lg:w-1/2 lg:mr-8 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl lg:text-6xl text-gray-300 font-bold mb-4 text-center lg:text-left">Hello, I'm Umar Aslam</h1>
          <p className="text-lg font-medium lg:text-[22px] text-gray-100 mb-8  text-center lg:text-left">Full Stack Developer</p>
          {/* bg-[#3e464c] */}
          <a download="Resume_UmarAslam" href={resume} className=" bg-blue-500 text-[#ffffff] hover:bg-blue-600 font-bold py-3 px-6 rounded inline-block shadow-lg transition duration-300 ease-in-out transform hover:scale-105">Download CV</a>
        </div>

        {/* Image Section */}
        <div className="  sm:max-w-[400px] 2xl:max-w-[700px] h-[17rem] w-[17rem] mt-8 lg:mt-0 rounded-[100%]  border-2 border-blue-400  overflow-hidden  flex justify-center">
          <img src={heroImage} alt="Hero" className='object-fit  object-cover w-[270px] h-full' />
        </div>



      </div>
    </div >
  );
}

export default HeroSection;