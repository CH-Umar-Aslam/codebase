

import React, { useRef } from 'react';
import SkillCard from '../components/SkillCard'; // Assuming you have a SkillCard component
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SkillsSection = () => {
  // List of skills

  const skills = [
    { name: 'HTML', description: 'Proficient in Hypertext Markup Language (HTML), including semantic markup, forms, and multimedia embedding.' },
    { name: 'CSS', description: 'Proficient in Cascading Style Sheets (CSS), including layout techniques, responsive design, and CSS frameworks.' },
    { name: 'JavaScript', description: 'Strong understanding of JavaScript fundamentals and ES6+ features, including DOM manipulation and event handling.' },
    { name: 'React.js', description: 'Experienced in building user interfaces with React.js, including component-based architecture, state management, and hooks.' },
    { name: 'Tailwind CSS', description: 'Proficient in using Tailwind CSS for rapid UI development, including utility-first approach and responsive design principles.' },
    { name: 'axios', description: 'Familiar with axios for making HTTP requests from the browser and Node.js, including handling asynchronous operations and error handling.' },
    { name: 'Redux Toolkit', description: 'Experienced in using Redux Toolkit for efficient state management in React applications, including slice reducers and Redux Toolkit APIs.' },
    { name: 'SQL', description: 'Proficient in Structured Query Language (SQL), including database querying, data manipulation, and database design.' },
    { name: 'Oracle', description: 'Familiar with Oracle Database management system, including SQL querying, PL/SQL programming, and database administration.' },
    { name: 'Styled Components', description: 'Proficient in using Styled Components for styling React components with scoped styles and dynamic styling capabilities.' },
    { name: 'Responsive Design', description: 'Experienced in creating responsive web designs that adapt to various screen sizes and devices using CSS media queries and flexible layouts.' },
    { name: 'OOP', description: 'Strong understanding of Object-Oriented Programming (OOP) principles, including encapsulation, inheritance, and polymorphism.' },
    { name: 'Basic DSA', description: 'Familiarity with basic Data Structures and Algorithms (DSA), including arrays, linked lists, sorting algorithms, and searching algorithms.' },
    { name: 'Node.js', description: 'Skilled in Node.js for server-side app development, with event-driven architecture, async programming, and package management.' },
    { name: 'Express.js', description: 'Experienced in creating RESTful APIs and web servers using Express.js, including routing, middleware, and error handling.' },
    { name: 'Data Modeling', description: 'Skilled in designing data models for databases, including entity-relationship diagrams (ERD), database normalization, and database schema design.' },
    { name: 'REST API', description: 'Proficient in designing and implementing RESTful APIs, including defining endpoints, handling HTTP methods, and data serialization.' },
    { name: 'Fluent Communicator', description: 'Strong communication skills, both written and verbal, with the ability to effectively convey technical concepts and collaborate with team members.' },
  ];


  const sliderRef = useRef();

  const settings = {
    dots: true,
    speed: 300,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false
        },
      },
    ],
  };

  const handleSliderClick = () => {
    // Pause autoplay when the slider is clicked
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  return (
    <section id="skillsection" className="py-12 lg:px-0 mb-[8%] overflow-hidden bg-gray-100">
      <div >
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <h2 className='rounded-lg  p-2 text-center bg-gray-200 text-green-700  '>Currently Learning Backend Development</h2>
        <Slider ref={sliderRef} {...settings} onClick={handleSliderClick} className="slick-slider ">
          {skills.map((skill, index) => (
            <div key={index} className="px-2 sm:px-1">
              <SkillCard skill={skill} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsSection;
