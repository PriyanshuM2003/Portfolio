import './App.css';
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
