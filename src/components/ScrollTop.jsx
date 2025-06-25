import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);   // show after 400 px
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollTop;
