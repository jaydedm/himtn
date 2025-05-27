import { useState, useEffect, useRef } from 'react';

const useScrollDownFast = (threshold = 1, interval = 100) => {
  const [isScrollingFast, setIsScrollingFast] = useState(false);
  const checkScroll = useRef(true); // Flag to control scroll checking
  const lastScrollY = useRef(document.body.scrollTop);
  const lastTimestamp = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = document.body.scrollTop;
      const currentTime = Date.now();

      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTime - lastTimestamp.current;

      const scrollSpeed = deltaY / deltaTime;

      // Check scroll direction
      const scrollDirection = deltaY > 0 ? 'down' : 'up';

      // Reset flag if scrolling up after scrolling fast
      if (isScrollingFast && scrollDirection === 'up') {
        checkScroll.current = true;
        setIsScrollingFast(false);
      }

      // Check if scroll speed exceeds the threshold
      if (!isScrollingFast && scrollSpeed > threshold) {
        setIsScrollingFast(true);
        checkScroll.current = false; // Set flag to stop further checks
      }

      // Update last values for next calculation
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTime;
    };

    const scrollInterval = setInterval(handleScroll, interval);

    return () => clearInterval(scrollInterval);
  }, [threshold, interval, isScrollingFast]);

  return isScrollingFast;
};

export default useScrollDownFast;
