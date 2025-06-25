import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h04xkwq',       // Your service ID
        'template_x08k6rp',      // Your template ID
        form.current,
        'ZWSGwpf7Ib7bYmllk'      // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Oops! Something went wrong.');
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>

      {/* Social Media Links */}
      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/rajat-baranwal/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://github.com/rajatbaranwal"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://x.com/RajatBaran58997"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter className="icon" />
        </a>

        <a href="mailto:rajat123baranwal@gmail.com" title="Email">
          <MdEmail className="icon" />
        </a>

        <a href="tel:+91-9934275919" title="Call Me">
          <FaPhoneAlt className="icon" />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
