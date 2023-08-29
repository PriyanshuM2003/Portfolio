import './App.css';
import AOS from 'aos';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';
import Projects from './Components/Projects';

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});


function App() {

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
