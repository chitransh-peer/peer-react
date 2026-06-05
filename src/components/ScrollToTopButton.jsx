import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-[#4DA3FF] hover:bg-[#3b82f6] text-white rounded-full shadow-[0_4px_15px_rgba(77,163,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(77,163,255,0.5)] focus:outline-none flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <span className="material-icons text-xl leading-none">arrow_upward</span>
      </button>
    </div>
  );
}
