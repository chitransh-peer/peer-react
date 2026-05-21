import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const timer = setTimeout(() => {
      const elementsToReveal = document.querySelectorAll('.card-hover, section h2, section > .container > p, section > .max-w-7xl > p, section .grid > div, .flex-wrap > span, .flex-wrap > div, .prose > p, .workflow-container');
      
      const parentGroups = new Map();
      
      elementsToReveal.forEach((el) => {
          if(el.closest('.animate-scroll') || el.closest('header') || el.closest('footer')) return;
          
          el.classList.add('reveal');
          
          const parent = el.parentElement;
          if (!parentGroups.has(parent)) {
              parentGroups.set(parent, []);
          }
          parentGroups.get(parent).push(el);
          observer.observe(el);
      });
      
      // Remove staggered delays as per user request for unified appearance
      /*
      parentGroups.forEach(group => {
          if (group.length > 1) {
              group.forEach((el, index) => {
                  const delay = Math.min(index * 100, 800) + 'ms';
                  el.style.transitionDelay = delay;
              });
          }
      });
      */
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);
}
