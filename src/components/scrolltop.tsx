import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: ReactNode;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
  }, [location]);

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        setIsNavigating(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  return <>{children}</>;
};

export default ScrollToTop;
