import React, { createContext, useState, useContext } from "react";
import Image from "next/image";


const CursorContext = createContext();


  



export const useCursor = () => useContext(CursorContext);

const Card = ({ key, image, title, description}) => {
  const { setIsHoveringImage } = useCursor(); // Use context from provider

  return (
    <div className="overflow-hidden text-white">
      <div className="overflow-hidden">
        <Image
          src={image}
          className="transform transition-transform duration-2000 hover:scale-120 w-full h-full"
          alt={title}
          width={400}
          height={150}
          onMouseEnter={() => setIsHoveringImage(true)} // Update context
          onMouseLeave={() => setIsHoveringImage(false)}
        />
      </div>
      <h2 className="text-[18px] font-bold mt-2">{title}</h2>
      <p className="text-white text-[14px] mt-2">{description}</p>
    </div>
  );
};

const CardsContainer = ({data}) => {
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  console.log(data)
  


  return (
    <CursorContext.Provider value={{ isHoveringImage, setIsHoveringImage }}>
      <section className="bg-black m-auto">
        <div className="m-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-auto sm:p-[200px] p-[70px]">
            {data.map((card, index) => (
                <Card
                key={index}
                image={card.details.image}
                title={card.title}
                description={card.details.text}
              />
            ))}
          </div>
        </div>
      </section>
    </CursorContext.Provider>
  );
};

export default CardsContainer;
