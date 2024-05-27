import React from 'react';
import project_image from "../assets/project_image.png"
import bg_image from "../assets/project.png"
const ProjectSection = ({ img, title, url }) => {
  return (

    <div>
      <h2 className="text-2xl font-bold text-center  text-gray-100 mb-4">Projects</h2>

      <div className="flex flex-col h-[70vh] justify-center items-center mt-8 mb-8 relative">

        <div className="max-w-md bg-transparent p-8 rounded-lg shadow-md relative z-10">
          <a href="http://recgenz.com" target='_blank' >
            <img src={project_image} alt="Project" className="w-full h-auto mb-4 rounded-lg" />
          </a>
          <h2 className="text-xl font-bold text-gray-800 mb-2">RecGenz Site</h2>
          <a href="http://recgenz.com" target='_blank' className="text-blue-600 hover:underline">Visit Site</a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-[5px]" style={{ backgroundImage: `url(${bg_image})` }}></div>
      </div>  </div>
  );
};

export default ProjectSection;
