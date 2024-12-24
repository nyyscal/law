import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cardData } from "../../utils/assets";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
    const targetId = `#${formattedTitle}`;
    const targetElement = document.querySelector(targetId);

    if (window.innerWidth <= 768) {
      // Smooth scroll for mobile view
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate normally for desktop view
      navigate(`/services${targetId}`);
    }
  };

  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const loopedData = [...cardData, ...cardData];
  const totalCards = loopedData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (startIndex === cardData.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 500);
    } else if (startIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(cardData.length - 1);
      }, 500);
    }
  }, [startIndex, cardData.length]);

  return (
    <div className="flex flex-col items-center mx-6 mb-8">
      <div className="relative w-full overflow-hidden mt-6">
        <div
          className={`flex transition-transform ${
            isTransitioning ? "duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${(startIndex % cardData.length) * 25}%)`,
          }}
        >
          {loopedData.map((card, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div
                key={card.id}
                onClick={() => handleCardClick(card.title)}
                className="bg-black shadow-md rounded-2xl p-6 text-center border-4 border-white hover:shadow-xl transition-transform hover:border-[#FFD700] hover:scale-105"
                style={{ height: "auto" }} // Remove fixed height, let it adjust to content
              >
                {/* Image with fixed height */}
                <LazyLoadImage
                  src={card.image}
                  alt={card.title}
                  effect="blur"
                  className="w-full h-48 sm:h-56 object-cover rounded-t-lg mb-4"
                  style={{ objectFit: "cover" }} // Ensure image fits within the container
                />
                <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]">
                  {card.title}
                </h2>
                {/* Content that adjusts its height */}
                <p className="text-white text-base sm:text-lg">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex mx-4 py-4">
        {Array.from({ length: cardData.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => setStartIndex(index)}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              index === startIndex % cardData.length
                ? "bg-[#FFD700]"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Card;
