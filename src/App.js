import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';
import Projects from './Components/Projects';

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
