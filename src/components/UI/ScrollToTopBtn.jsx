import { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";
import './stylesUI.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    isVisible && (
       <FaCircleArrowUp onClick={scrollToTop} className="top-scroll-btn"/>
    )
  );
};


export default ScrollToTopButton;
