import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ScrollTop from './components/ScrollTop';
import Loading from './components/Loading';
import Certifications from "./components/Certifications";
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set timeout for loader duration (e.g., 3.8s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800); // Ensure at least 1 quote change

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <ScrollTop />
    </div>
  );
}

export default App;
