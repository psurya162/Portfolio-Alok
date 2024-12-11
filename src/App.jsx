import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Education/>
        <Experience />
        <Project/>
        <Contact/>
      </div>

    </div>
  )
}

export default App