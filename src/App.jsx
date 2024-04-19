import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

      <Navbar /><div className='container mx-auto'>
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
