import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Certification from './components/Certification/Certification'
import CodingProfiles from './components/CodingProfiles/CodingProfiles'
import BlurBlob from './BlurBlob'

function App() {
  return (
    <div className="bg-[#000000]">

      {/* Vibrant BlurBlob accent for visibility on black */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* Grid pattern overlay - dark gray grid lines, visible on black */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f462e_1px,transparent_1px),linear-gradient(to_bottom,#3f3f462e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work />
        <Education />
        <Certification />
        <CodingProfiles />
        <Contact />
        <Footer /> 
      </div>
    </div>
  )
}

export default App
