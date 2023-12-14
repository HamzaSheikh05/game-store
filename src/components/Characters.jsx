import React, { useState } from "react";
import { items } from "../database/item";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import "./Characters.css"; // Import a CSS file for styling (create this file if it doesn't exist)

export default function Characters() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  const onPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="flex flex-col bg-[#000500] justify-center items-center px-8">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full my-16">
        <div className="flex flex-col my-6">
          <h1 className="font-Eremitage font-semibold text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] text-white text-center md:text-left">
            Real-time multiplayer fighters
          </h1>
          <h2 className="font-Oyko font-normal text-lg md:text-2xl text-[#EAECF0] text-center md:text-left">
            Join the fight and pick one of the top fighters in Cyber Arena.
          </h2>
        </div>
        <button className="flex justify-center items-center py-2 md:py-4 px-4 md:px-7 w-full md:w-[185px] h-[60px] bg-[#AEFF00] text-black shadow-sm shadow-[#101828] rounded-[16px] md:rounded-[32px]">
          JOIN THE FIGHT
        </button>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-evenly md:justify-between w-full flex-wrap gap-10 overflow-x-auto">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`character ${index}`}
              className={`w-[240px] h-[320px] md:w-[320px] md:h-[400px] ${
                currentSlide === index ? "border-4 border-blue-300" : "blur"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 my-12">
          <BsArrowLeftSquare
            className="text-[#AEFF00] w-10 h-10 md:w-14 md:h-14"
            onClick={onPrev}
          />
          <BsArrowRightSquare
            className="text-[#AEFF00] w-10 h-10 md:w-14 md:h-14"
            onClick={onNext}
          />
        </div>
      </div>
    </section>
  );
}
