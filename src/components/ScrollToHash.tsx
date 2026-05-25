import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick for the route content to render
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }
  }, [pathname, hash]);
  return null;
}