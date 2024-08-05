
import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'
import FormSection from './sections/FormSection'
import FooterSection from './sections/FooterSection'
import TestimonialCard from './sections/TestimonialCard'

import { motion, useScroll, useSpring } from "framer-motion";
import Stats from './sections/StatsData'







function App() {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.01
  });



  return (
    <div>

      <motion.div style={{ scaleX }} className='fixed origin-left z-50  bg-blue-800 top-0 left-0 right-0 h-[4px] rounded-lg ' />

      <Navbar /><div className='sm:container  mx-4 sm:mx-auto'>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <Stats />
        <ProjectSection />
        <FormSection />
        {/* <TestimonialCard /> */}

      </div>
      <FooterSection />

    </div >
  )
}

export default App
