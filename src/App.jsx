import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import {Element } from 'react-scroll'
//import './App.css'
import AboutSection from './Components/AboutSection'
import EducationSection from './Components/EducationSection'
import Footer from './Components/Footer'
// import ContactSection from './Components/ContactSection'
// import ExperienceSection from './Components/ExperienceSection'
import ProjectsSection from './Components/ProjectsSection'
// import DigitalSection from './Components/DigitalSection'
import TechStackSection from './Components/TechStackSection'

function App() {
    return(
      <>
        <NavBar/>
        <div className="p-0 mt-5 pt-2 p-md-5" style={{backgroundColor:"#1E3A8A", width:"100%"}}>
          <HeroSection/>
        </div>

        <AboutSection/>

        <div style={{backgroundColor:"#F9FAFB", marginBottom:"10px", padding:"5px"}}>
          <TechStackSection/>
        </div>

        <Element name="education" align="center" style={{backgroundColor:"#F9FAFB", marginBottom:"10px", padding:"25px"}}>
          <h2 className="text-center mb-5 fw-bold" style={{color:"#1F2937"}}>Education & Certifications</h2>
          <EducationSection/>
        </Element>

        

        <div style={{backgroundColor:"#FFFFFF", marginBottom:"10px", padding:"25px"}}>
          {/* <h2 className="text-center mb-5 fw-bold" style={{color:"#1F2937"}}>Education & Certifications</h2> */}
          <ProjectsSection/>
        </div>

        

        {/* <ContactSection/> */}
       
        <Footer/>
      </>
    )
}

export default App
