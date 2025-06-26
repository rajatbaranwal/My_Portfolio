import './Loading.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
];

const Loading = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // change every 5s for better read time

    return () => clearInterval(rotate);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <motion.h1
          key={quoteIndex}
          className="quote-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter
            words={[quotes[quoteIndex].text]}
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={2000}
          />
        </motion.h1>

        <motion.p
          key={`author-${quoteIndex}`}
          className="quote-author"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          – {quotes[quoteIndex].author}
        </motion.p>

        <div className="loading-bar">
          <div className="bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
