import { motion } from "framer-motion";
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlight">Rajat</span>
      </motion.h1>

      


      <motion.p
  className="hero-subtitle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  <Typewriter
    words={[
      'Full Stack Developer',
      'Problem Solver',
      'Tech Enthusiast',
      'Open Source Contributor'
    ]}
    loop={0} // infinite
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</motion.p>


      <img
  src="https://camo.githubusercontent.com/8720e34720788284c87a51e1e438e814c756e197586d03148c53ab821d73994a/68747470733a2f2f632e74656e6f722e636f6d2f336254785a34486472797341414141642f706978656c732d6e656f6e2e676966"
  alt="Rajat Hacker Avatar"
  className="hero-avatar"
/>

      <div className="hero-buttons">
        <motion.a
          href="#projects"
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Work
        </motion.a>

        <motion.a
          href="/Rajat-Baranwal-Resume.pdf"
          download
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
