import React, { useState, useEffect } from "react";
import { slides } from "../../utils/assets";
const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-black flex flex-col md:flex-row w-full h-[600px] items-center p-2 my-5">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <img
            className="object-contain transition-all ease-in-out duration-700"
            width={600}
            height={650}
            src={slides[currentSlide].image}
            alt="Consultation"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-[2px] bg-[#FFD700] h-[70%]"></div>

        {/* Right Side: Text */}
        <div className="flex flex-col text-xl justify-normal w-full md:w-1/2 p-4 text-left font-mono max-w-[900px] sm:ml-6">
          <div>
            <h1 className="text-3xl font-bold mb-6 font-serif top-0 text-[#FFD700] z-10 py-4">
              Meet our Legal Team
            </h1>
          </div>
          {/* Fixed height container for text */}
          <div className="transition-all ease-in-out duration-700 sm:mb-2 mb-8 text-gray-200 h-[150px] max-w-[90%]  sm:max-w-[80%] text-base sm:text-base ">
            {slides[currentSlide].text}
          </div>

          {/* Name and Designation */}
          <div className="font-semibold text-lg mt-14 sm:mt-0 text-[#FFD700]">
            <p>- {slides[currentSlide].name}</p>
            <p className="text-sm text-slate-100">
              {slides[currentSlide].designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
