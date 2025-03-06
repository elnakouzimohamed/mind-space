import React, { useState, useEffect } from "react";

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
      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border border-gray-500 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
    </>
  );
};
