import './About.css';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import CountUp from 'react-countup';


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

      <div className="about-grid">
        {/* Left Box - About Summary */}
        <motion.div
          className="about-box about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="about-text">
            I'm <strong>Rajat Baranwal</strong>, a passionate Full Stack Developer with hands-on experience in building responsive and scalable web applications. I enjoy solving real-world problems using technologies like <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>, and <span className="highlight">MongoDB</span>.
          </p>
          <p className="about-text">
            I’ve built and contributed to projects such as a <strong>Hospital Management System</strong>, an <strong>Online Quiz Platform</strong>, a <strong>Book Management App</strong>, and a <strong>Sentiment Analysis Tool</strong>. I love working on ideas that simplify lives and add real-world value.
          </p>
          <p className="about-text">
            I'm always exploring new technologies and tools, and I’m especially enthusiastic about learning more in areas like <strong>blockchain</strong>, <strong>APIs</strong>, and <strong>UI/UX design</strong>. My goal is to keep growing as a developer and collaborate on impactful projects.
          </p>
        </motion.div>

        {/* Right Box - Coding Profiles & Stats */}
        <motion.div
          className="about-box about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="about-subheading">Coding Profiles</h3>
          <div className="coding-icons">
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
          </div>

          <h3 className="about-subheading">Quick Stats</h3>
          <ul className="quick-stats">
  <li>
    💡 <span className="count-highlight">
      <CountUp start={0} end={250} duration={5} enableScrollSpy />
    </span>+ Problems Solved on LeetCode
  </li>
  <li>
    ⚡ <span className="count-highlight">
      <CountUp start={0} end={200} duration={5} enableScrollSpy />
    </span>+ Questions on CodeChef
  </li>
  <li>🚀 Continuously Building & Improving Projects</li>
  <li>🛠 Always Exploring New Tech & Frameworks</li>
  <li>👨‍💻 Passionate About Learning by Building Real Projects</li>
  <li>🌱 Always Exploring DSA & Backend</li>
</ul>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
