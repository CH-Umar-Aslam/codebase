import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeAnimation = ({ techLogo, direction, sectionName }) => {
  return (
    <>
      <div className="heading container mx-auto">
        <h1 className="text-2xl pl-1 font-semibold mt-5 mb-3">{sectionName}</h1>
      </div>
      <div className="container mx-auto">
        <Marquee speed={140} direction={direction} gradientWidth={10} gradient gradientColor="lightblue">
          {techLogo &&
            techLogo.map((logo) => (
              <div className="border-2 border-blue-600 mx-4 rounded-xl max-h-16 max-w-auto px-6 py-8 flex  justify-between gap-2 items-center">
                <img src={logo.img} alt="Logo 1" className="max-w-12 max-h-12" />
                <p className=" text-sm md:text-lg">{logo?.name}</p>
              </div>
            ))}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeAnimation;
