// components/ContactUs.js
import { useState, useEffect } from 'react';

const ContactUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative flex items-center space-x-6">
        <div className={`animate-pulse bg-red-500 rounded-full p-8 ${animate ? 'scale-110' : ''}`}>
          <img src="/contactus.png" alt="character" className="h-16 w-16" />
        </div>
        <div className="relative">
          <div className="bg-conic-300 rounded-full p-16 w-32 h-32 animate-spin-slow">
            <span className="absolute inset-0 flex items-center justify-center font-bold text-white">contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
