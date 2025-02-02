import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const SmoothScrollBar = ({ children }) => {
  useEffect(() => {
    // Optionally scroll to the top when the component mounts
    scroll.scrollToTop();
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrollBar;
