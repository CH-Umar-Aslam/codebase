import { useState } from 'react'

import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'
import FormSection from './sections/FormSection'
import FooterSection from './sections/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar /><div className='sm:container  mx-4 sm:mx-auto'>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <FormSection />

      </div>
      <FooterSection /></>
  )
}

export default App
