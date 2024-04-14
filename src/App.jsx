import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar /><div className='container mx-auto'>
        <HeroSection />

        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
      </div></>
  )
}

export default App
