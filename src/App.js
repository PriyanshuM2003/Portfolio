import './App.css';
import AOS from 'aos';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import PortfolioCom from './Components/PortfolioCom';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';

import { BrowserRouter as Router } from "react-router-dom";

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <PortfolioCom />
        <Experience />
        <Contact />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
