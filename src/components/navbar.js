import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("our work");

  return (
    <nav className="bg-black text-white flex pr-10 justify-end py-11 ">
      
      <div className="text-2xl font-bold ">
        <span className="text-white">mind</span>
        <span className="text-teal-400">space</span>
      </div>

      <div className="flex  space-x-8 ">
        {["about us", "our work", "our clients", "our team", "contact us"].map((link) => (
          <a
            key={link}
            href={`#${link.replace(/\s/g, "-")}`}
            onClick={() => setActiveLink(link)}
            className={`relative ${
              activeLink === link ? "text-white" : "text-gray-300"
            }`}
          >
            {link}
            {activeLink === link && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></span>
            )}
          </a>
        ))}
      </div>

     
      <div className="flex space-x-4">
        <button className="bg-gray-700 text-white py-1 px-3 rounded-full">FR</button>
        <button className="bg-gray-700 text-white py-1 px-3 rounded-full">EN</button>
      </div>
    </nav>
  );
}
