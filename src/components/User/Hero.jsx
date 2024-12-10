import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // List of image URLs for the slideshow
  const images = [
    "/lawyer1.jpg", // Replace with your actual image URLs
    "/lawyer2.jpg",
  ];

  useEffect(() => {
    // Set an interval to change the image every 7 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change image every 7 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full h-[800px] flex items-center justify-center bg-black">
      {/* Outer container */}
      <div className="w-[90%] h-[700px] flex flex-col items-center justify-center border px-4 sm:px-10 lg:px-14 border-black">
        {/* First inner div with left and right content */}
        <div className="flex flex-col lg:flex-row w-full h-full p-4">
          {/* Left side */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-4">
            {/* Flex container to hold vertical line and heading */}
            <div className="relative flex items-center group cursor-default flex-wrap max-w-full">
              {/* Quote Icon Positioned Above "G" on Mobile */}
              <FaQuoteLeft
                size={18}
                className="text-[#FFD700] absolute top-[-2px] left-[-12px] sm:size-[20px] sm:static mb-4 sm:mb-6"
              />
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl ml-2 font-bold text-[#FFD700] transition-all duration-300 max-w-full overflow-hidden">
                GC Law Chamber
              </h1>
            </div>

            {/* Vertical Line */}
            <div className="border border-l-8 w-[90%] mt-2"></div>

            <p className="text-xl sm:text-2xl mb-4 mt-6 text-white max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] overflow-hidden">
              "At Law Nepal, our mission is to offer exceptional legal terms
              services with a focus on integrity, professionalism, and client
              satisfaction. We are dedicated to understanding the unique needs
              of each client and providing tailored solutions across various
              areas of law."
            </p>

            <button
              className="border border-white mt-3 -ml-3 flex items-center justify-center text-xl text-white px-8 py-5 rounded-full group hover:scale-105 hover:transition-all hover:text-[#FFD700] hover:border-[#FFD700] "
              onClick={() => navigate("/about")}
            >
              Explore!
              <FaArrowCircleRight
                size={20}
                className="ml-3 group-hover:translate-x-3 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Vertical Line */}
          <div className="w-[2px] rounded-full bg-white h-[100%] mx-4 lg:flex my-8 hidden"></div>

          {/* Right side - Image Slideshow (only visible on larger screens) */}
          <div className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center p-4 ml-4">
            <img
              src={images[currentImageIndex]}
              alt="description"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;