

import React, { useRef } from 'react';

import Marquee from 'react-fast-marquee';
import "../App.css"
import MarqueeAnimation from '../components/MarqueeAnimation';
import HtmlIcon from "../assets/media/html.png";
import CssIcon from "../assets/media/css.svg"; // Assuming you have a CSS icon
import JsIcon from "../assets/media/javascript.svg"; // Assuming you have a JS icon
import ReactIcon from "../assets/media/react.png"; // Assuming you have a React icon
import TailwindIcon from "../assets/media/tailwind.png"; // Assuming you have a Tailwind icon
import NextJsIcon from "../assets/media/next-js.svg"; // Assuming you have a Next.js icon
import MaterialUiIcon from "../assets/media/material-ui-1.svg"; // Assuming you have a Material-UI icon
import NodeJsIcon from "../assets/media/node.png"; // Assuming you have a Node.js icon
import MongodbIcon from "../assets/media/mongodb.svg"; // Assuming you have a MongoDB icon
import PythonIcon from "../assets/media/python.png"; // Assuming you have a Python icon
import DjangoIcon from "../assets/media/django.png"; // Assuming you have a Django icon
import TypescriptIcon from "../assets/media/typescript-2.svg"; // Assuming you have a Django icon
import GitIcon from "../assets/media/git.svg"; // Assuming you have a Django icon
import SqlLiteIcon from "../assets/media/sqlite.svg"; // Assuming you have a Django icon
const SkillsSection = () => {
  // List of skills
  const techLogos2 = [
    { img: HtmlIcon, name: "HTML" },
    { img: CssIcon, name: "CSS" },
    { img: JsIcon, name: "JavaScript" },
    { img: ReactIcon, name: "React" },
    { img: TailwindIcon, name: "Tailwind" },
    { img: NextJsIcon, name: "Next.js" },
    { img: MaterialUiIcon, name: "MUI" },
    { img: NodeJsIcon, name: "Node.js" },
    { img: MongodbIcon, name: "MongoDB" },
    { img: PythonIcon, name: "Python" },
    { img: DjangoIcon, name: "Django" },
    { img: SqlLiteIcon, name: "SqLite" },
    { img: TypescriptIcon, name: "TypeScript" },
    { img: GitIcon, name: "Git" },
  ];
  const techLogos = [
    { img: HtmlIcon },
    { img: CssIcon },
    { img: JsIcon },
    { img: ReactIcon },
    { img: TailwindIcon },
    { img: NextJsIcon },
    { img: MaterialUiIcon },
    { img: NodeJsIcon },
    { img: MongodbIcon },
    { img: PythonIcon },
    { img: DjangoIcon },
    { img: TypescriptIcon },
    { img: GitIcon },
  ];










  return (
    <section id="skillsection" className="lg:px-0 rounded-lg mb-[8%] overflow-hidden shadow-lg  ">

      {/* bg-[#202a4c] */}
      <div className="container mx-auto">
        <MarqueeAnimation
          techLogo={techLogos2}
          direction="left"
          sectionName={"Expertise"} />

      </div>

    </section >

  );
};

export default SkillsSection;
