import { useState, useEffect } from "react";

const ScrollMeter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress =  (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-14 top-1/2 -translate-y-1/2 h-40 w-2  bg-gray-300  rounded-full">
      <div
        className="absolute top-0 w-full rounded-full  bg-red-500 transition-all duration-150"
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollMeter;
