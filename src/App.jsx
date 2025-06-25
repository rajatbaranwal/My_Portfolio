import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <ScrollTop /> 
    </div>
  );
}

export default App;
