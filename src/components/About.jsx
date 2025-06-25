import './About.css';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-wrapper">
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm <strong>Rajat Baranwal</strong>, a passionate Full Stack Developer with hands-on experience in building responsive and scalable web applications. I enjoy solving real-world problems using technologies like <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, and <span className="highlight">MongoDB</span>.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’ve built and contributed to projects such as a <strong>Hospital Management System</strong>, an <strong>Online Quiz Platform</strong>, a <strong>Book Management App</strong>, and a <strong>Sentiment Analysis Tool</strong>. I love working on ideas that simplify lives and add real-world value.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          I'm always exploring new technologies and tools, and I’m especially enthusiastic about learning more in areas like blockchain, APIs, and UI/UX design. My goal is to continue growing as a developer and collaborate on impactful projects.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          I’m also passionate about problem solving and data structures. I've solved over <strong>250+ problems on LeetCode</strong> and <strong>200+ on CodeChef</strong>, strengthening my understanding of algorithms and core computer science concepts.
        </motion.p>

        {/* ✅ Move icon section outside of <p> */}
        <motion.div
          className="coding-icons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <a
            href="https://leetcode.com/u/rajat_bar/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <SiLeetcode className="icon" />
          </a>
          <a
            href="https://www.codechef.com/users/rajat_80"
            target="_blank"
            rel="noopener noreferrer"
            title="CodeChef"
          >
            <SiCodechef className="icon" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/AP22110011534"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
          >
            <SiHackerrank className="icon" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
