import React from 'react';
import project_image from "../assets/project_image.png"
import project_image1 from "../assets/project.png"
import project_image2 from "../assets/pj-2.png"
import project_image3 from "../assets/pj-3.png"
import project_image4 from "../assets/pg_4.png"
const ProjectSection = ({ img, title, url }) => {
  return (

    <div className='flex flex-col mt-28 '>
      <h2 className="text-2xl font-bold text-center  text-gray-100 mb-4">Projects</h2>

      <div className="flex flex-col  lg:h-[80vh]   justify-center items-center mt-8 mb-8 relative">

        <div className="max-w-xl max-h-[600px]  bg-transparent p-4  sm:p-6 rounded-lg shadow-md relative z-10">
          <a href="http://recgenz.com" target='_blank' >
            <img src={project_image} alt="Project" className="w-full h-auto mb-4 rounded-lg" />
          </a>
          <h2 className="text-xl font-bold text-gray-600 mb-2">RecGenz Site</h2>
          <a href="http://recgenz.com" target='_blank' className="text-blue-600 text-xl  hover:underline">Visit Site</a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-cover rounded  bg-center filter blur-[35px]" style={{
          backgroundImage: `url(${project_image})`,
          objectFit: 'contain'
        }}></div>
      </div>
      {/* pj-2 */}
      <div className="flex flex-col h-[50vh] lg:h-[80vh]   justify-center items-center mt-8 mb-8 relative">
        <div className="max-w-xl max-h-[600px]   bg-transparent p-4  sm:p-6 rounded-lg shadow-xl relative z-10">
          <a href="https://umars-ecommerce.vercel.app/" target='_blank' >
            <img src={project_image2} alt="Project" className="w-full h-auto mb-4 rounded-lg" />
          </a>
          <h2 className="text-xl text-gray-900 font-bold text-gray-600 mb-2">SnapUp Site</h2>
          <a href="https://umars-ecommerce.vercel.app/" target='_blank' className="text-blue-600  text-xl  hover:underline">Visit Site</a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-cover rounded  bg-center filter blur-[35px]" style={{
          backgroundImage: `url(${project_image2}) `,
          objectFit: 'contain'

        }}></div>
      </div>
      {/* pj-3 */}

      <div className="flex flex-col h-[50vh] lg:h-[80vh]   justify-center items-center mt-8 mb-8 relative">
        <div className="max-w-xl max-h-[600px]   bg-transparent p-4  sm:p-6 rounded-lg shadow-xl relative z-10">
          <a href="https://password-picker.netlify.app/" target='_blank' >
            <img src={project_image3} alt="Project" className="w-full h-auto mb-4 rounded-lg" />
          </a>
          <h2 className="text-xl text-black  font-bold text-gray-600 mb-2">Password Generator</h2>
          <a href="https://password-picker.netlify.app/" target='_blank' className="text-blue-600  text-xl  hover:underline">Visit Site</a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-cover rounded  bg-center filter blur-[35px]" style={{
          backgroundImage: `url(${project_image3}) `,
          objectFit: 'contain'

        }}></div>
      </div>
      {/* pj-4 */}

      <div className="flex flex-col h-[50vh] lg:h-[80vh]   justify-center items-center mt-8 mb-8 relative">
        <div className="max-w-xl max-h-[600px]   bg-transparent p-4  sm:p-6 rounded-lg shadow-xl relative z-10">
          <a href="https://react18-todo.vercel.app/" target='_blank' >
            <img src={project_image4} alt="Project" className="w-full h-auto mb-4 rounded-lg" />
          </a>
          <h2 className="text-xl text-black  font-bold text-gray-600 mb-2">Todo App</h2>
          <a href="https://react18-todo.vercel.app/" target='_blank' className="text-blue-600  text-xl  hover:underline">Visit Site</a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-cover rounded  bg-center filter blur-[35px]" style={{
          backgroundImage: `url(${project_image4}) `,
          objectFit: 'contain'

        }}></div>
      </div>
    </div>
  );
};

export default ProjectSection;
