import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [location]); 

  return null; 
};

export default ScrollToTop;
