import React, { useRef } from 'react'; import SkillCard from
'../components/SkillCard'; // Assuming you have a SkillCard
component import Slider from 'react-slick'; import
'slick-carousel/slick/slick.css'; import
'slick-carousel/slick/slick-theme.css'; import Marquee from
'react-fast-marquee'; import "../App.css"

const SkillsSection = () => { // List of skills

const skills = [ { name: 'HTML', description: 'Proficient in
Hypertext Markup Language (HTML), including semantic markup,
forms, and multimedia embedding.' }, { name: 'CSS',
description: 'Proficient in Cascading Style Sheets (CSS),
including layout techniques, responsive design, and CSS
frameworks.' }, { name: 'JavaScript', description: 'Strong
understanding of JavaScript fundamentals and ES6+ features,
including DOM manipulation and event handling.' }, { name:
'React.js', description: 'Experienced in building user
interfaces with React.js, including component-based
architecture, state management, and hooks.' }, { name:
'Tailwind CSS', description: 'Proficient in using Tailwind
CSS for rapid UI development, including utility-first
approach and responsive design principles.' }, { name:
'axios', description: 'Familiar with axios for making HTTP
requests from the browser and Node.js, including handling
asynchronous operations and error handling.' }, { name:
'Redux Toolkit', description: 'Experienced in using Redux
Toolkit for efficient state management in React
applications, including slice reducers and Redux Toolkit
APIs.' }, { name: 'SQL', description: 'Proficient in
Structured Query Language (SQL), including database
querying, data manipulation, and database design.' }, {
name: 'Oracle', description: 'Familiar with Oracle Database
management system, including SQL querying, PL/SQL
programming, and database administration.' }, { name:
'Styled Components', description: 'Proficient in using
Styled Components for styling React components with scoped
styles and dynamic styling capabilities.' }, { name:
'Responsive Design', description: 'Experienced in creating
responsive web designs that adapt to various screen sizes
and devices using CSS media queries and flexible layouts.'
}, { name: 'OOP', description: 'Strong understanding of
Object-Oriented Programming (OOP) principles, including
encapsulation, inheritance, and polymorphism.' }, { name:
'Basic DSA', description: 'Familiarity with basic Data
Structures and Algorithms (DSA), including arrays, linked
lists, sorting algorithms, and searching algorithms.' }, {
name: 'Node.js', description: 'Skilled in Node.js for
server-side app development, with event-driven architecture,
async programming, and package management.' }, { name:
'Express.js', description: 'Experienced in creating RESTful
APIs and web servers using Express.js, including routing,
middleware, and error handling.' }, { name: 'Data Modeling',
description: 'Skilled in designing data models for
databases, including entity-relationship diagrams (ERD),
database normalization, and database schema design.' },

    { name: 'REST API', description: 'Proficient in designing and implementing RESTful APIs, including defining endpoints, handling HTTP methods, and data serialization.' },
    { name: 'Effective Communication', description: 'Strong communication skills, both written and verbal, with the ability to effectively convey technical concepts and collaborate with team members.' },
    { name: 'MongoDB', description: 'Experience working with MongoDB databases, including data modeling, querying, and aggregation.' },

];

const backEndLogos = [ { name: "Snort" }, { name: "FireWal"
}, { name: "Wireshark" }, { name: "Nmap" }, { name:
"Metaspilot" }, { name: "Azur" }, { name: "sync" }, { name:
"cualys" }, { name: "splunk" }, { name: "Nessus" }, ];

const sliderRef = useRef();

const settings = { dots: true, speed: 300, infinite: true,
autoplay: true, // Enable autoplay autoplaySpeed: 1500,
slidesToShow: 3, slidesToScroll: 1, responsive: [ {
breakpoint: 1024, settings: { slidesToShow: 2, }, }, {
breakpoint: 768, settings: { slidesToShow: 1, dots: false },
}, ], };

const handleSliderClick = () => { // Pause autoplay when the
slider is clicked if (sliderRef.current) {
sliderRef.current.slickPause(); } };

return (
<section id="skillsection" className="py-12 lg:px-0 rounded-lg mb-[8%] overflow-hidden shadow-lg  bg-[#202a4c]">
<div >
<h2 className="text-3xl   font-bold text-center mb-8">Skills</h2>
<h2 className='rounded-lg mx-auto font-medium m-2 p-2 sm:p-2 text-center bg-[#274257] text-green-600  '>Currently
Building Mern Stack Projects</h2>

      </div>

      <div className="container mx-auto">

        <Marquee speed={120} pauseOnClick={true} pauseOnHover={true} className='mt-4' direction="left" gradientColor='#223a4b' gradientWidth={20} gradient>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-fuchsia-400">HTML</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-purple-600">CSS</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-amber-200">JavaScript</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-blue-500">React Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-green-500">Tailwind Css</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-yellow-400">es6+</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-red-300">axios</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-cyan-400">Redux</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-fuchsia-400">HTML</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-purple-600">CSS</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-amber-200">JavaScript</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-blue-500">React Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-green-500">Tailwind Css</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-yellow-400">es6+</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-red-300">axios</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-cyan-400">Redux</p>
        </Marquee>


        <Marquee className='' pauseOnClick={true} pauseOnHover={true} speed={110} direction="right" gradientColor='#223a4b' gradientWidth={20} gradient>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-fuchsia-400">Node Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-teal-400">Express Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-green-500">MongoDB</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-sky-400">Data Modeling</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-yellow-400">Rest API's</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-lime-600">API Integration</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-purple-700">OOP</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-sky-500">Deployment</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-fuchsia-400">Node Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-teal-400">Express Js</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-green-500">MongoDB</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-emerald-200 -500">SQL</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-sky-400">Data Modeling</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-yellow-400">Rest API's</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-lime-600">API Integration</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-purple-700">OOP</p>
          <p className="bg-[#223a4b] m-2 text-xl flex space-x-5 px-6 py-2 font-bold cursor-pointer rounded-md text-sky-500">Deployment</p>

        </Marquee>


      </div>

    </section >

); };

export default SkillsSection;

import React from 'react';

const SkillCard = ({ skill }) => { return (
<div className="bg-[#2a4357]   text-left  shadow-md rounded-lg overflow-hidden">
<div className="p-4">
<h3 className="text-lg text-center font-semibold mb-2">{skill.name}</h3>
<p className="text-sm sm:h-20  ">{skill.description}</p>
</div> </div> ); };

export default SkillCard;
