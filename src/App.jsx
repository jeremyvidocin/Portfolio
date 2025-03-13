/**
 * @copyright 2024 Jeremyvidocin
 * @license Apache-2.0
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);



import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Certifications from './components/Certification';
import Education from './components/Education';
import { element } from 'prop-types';

const App = ()=>{

  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end:"bottom 80%",
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.in-out'
      })
    })
  });

  return (
  <ReactLenis root>
  <Header/>
  <main>
    <Hero/>
    <About/>
    <Education/>
    {/* <Skill/> */}
    <Experience/> 
    <Certifications/>
    <Work/>
    {/* <Review/> */}
    <Contact/>
    
  </main>
  <Footer/>
  </ReactLenis>
  
  )

}


export default App;
