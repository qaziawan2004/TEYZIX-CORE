import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#6C63FF] to-[#5A52D5] text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50 group"
        aria-label="Back to top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>
    )
  );
};

export default BackToTop;