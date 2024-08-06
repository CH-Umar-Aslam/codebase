import React from 'react';

const Experience = () => {
  return (
    <div id="experiencesection" className=" sm:border border-blue-200 mb-[60px] md:mb-[60px] p-2 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold  text-gray-100 mb-4">Experience</h2>

      <div className="border-l-2 border-blue-500 pl-4">
        <h3 className="text-xl font-semibold text-gray-400">FrontEnd Engineer at <a href="https://recgenz.com" className="text-blue-600 hover:underline">RecGenz</a></h3>
        <p className="text-slate-300 mb-2 font-thin">January 2024 - April 2024</p>

        <ul className='pl-1text-[15px] sm:text-[16px] text-white p-1 '>
          <li> <span className='sm:mx-2 '>- </span> Led the development of <b> RecGenz’s company website </b> using React and Tailwind CSS for optimal functionality and design consistency.</li>
          <li> <span className='sm:mx-2 '>- </span>Designed dynamic user interfaces with advanced React techniques to enhance site interactivity and speed.</li>
          <li> <span className='sm:mx-2 '>- </span>Ensured website maintained a cohesive visual style through Tailwind CSS.</li>
          <li> <span className='sm:mx-2 '>- </span>Prioritized thorough testing and diligent bug fixing to guarantee a flawless user experience.</li>
          <li> <span className='sm:mx-2 '>- </span>Collaborated effectively with cross-functional teams, leveraging tools like Figma to streamline project workflows.</li>
          <li> <span className='sm:mx-2 '>- </span>Engaged deeply with the full front-end development lifecycle, significantly improving React skills.</li>
          <li > <span className='sm:mx-2 '>- </span>Implemented <b>Nodemailer functionality</b> using Node.js and Express.js, contributing to a seamless user experience.
          </li>
          <li> <span className='sm:mx-2 '>- </span>Contributions instrumental in establishing and upholding RecGenz's strong online presence.</li>
        </ul>


      </div>
      <li className='font-bold text-center max-w-lg my-3 text-blue-300 border border-teal-300 text-bse sm:text-lg  rounded-lg p-1 md:p-3'>Working at Tmr Consulting as Django Developer</li>
    </div>
  );
};

export default Experience;
