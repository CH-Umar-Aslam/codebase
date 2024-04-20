import React from 'react';

const Experience = () => {
  return (
    <div id="experiencesection" className="bg-gray-100 mb-[8%] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-semibold text-gray-800">React.js Developer at <a href="https://site.recgenz.com" className="text-blue-600 hover:underline">RecGenz</a></h3>
        <p className="text-gray-600 mb-2">January 2024 - Present</p>

        <ul className='pl-1 text-pretty'>
          <li> <span className='mx-2 '>- </span> Led the development of RecGenz’s company website using React and Tailwind CSS for optimal functionality and design consistency.</li>
          <li> <span className='mx-2 '>- </span>Designed dynamic user interfaces with advanced React techniques to enhance site interactivity and speed.</li>
          <li> <span className='mx-2 '>- </span>Ensured website maintained a cohesive visual style through Tailwind CSS.</li>
          <li> <span className='mx-2 '>- </span>Prioritized thorough testing and diligent bug fixing to guarantee a flawless user experience.</li>
          <li> <span className='mx-2 '>- </span>Collaborated effectively with cross-functional teams, leveraging tools like Figma to streamline project workflows.</li>
          <li> <span className='mx-2 '>- </span>Engaged deeply with the full front-end development lifecycle, significantly improving React skills.</li>
          <li> <span className='mx-2 '>- </span>Contributions instrumental in establishing and upholding RecGenz's strong online presence.</li>
        </ul>


      </div>
    </div>
  );
};

export default Experience;
