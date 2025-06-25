import './Skills.css';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaPhp,
  FaGitAlt, FaGithub, FaLinux, FaWindows, FaDatabase, FaCode
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiXampp, SiPostman, SiJquery, SiBootstrap, SiExpress
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
        { name: 'C', icon: <FaCode /> },
        { name: 'C++', icon: <FaCode /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'PHP', icon: <FaPhp /> }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'ReactJS', icon: <FaReact /> },
      { name: 'NodeJS', icon: <FaNodeJs /> },
      { name: 'ExpressJS', icon: <SiExpress /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'JQuery', icon: <SiJquery /> }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'XAMPP', icon: <SiXampp /> },
      { name: 'Postman', icon: <SiPostman /> }
    ]
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Windows', icon: <FaWindows /> },
      { name: 'MacOS' }
    ]
  }
];

const Skills = () => {
  return (
    <motion.section id="skills" className="skills-section">
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="skills-container">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-items">
              {group.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
