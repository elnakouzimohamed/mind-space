import React, { useState, useEffect, useContext } from "react";
import { useCursor } from "./cards";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
    
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
     
      <div
        className="fixed top-0 left-0 w-25 h-25 border border-gray-500 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-7 h-7 bg-white rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 14}px, ${position.y - 14}px)`,
        }}
      />
    </>
  );
};
