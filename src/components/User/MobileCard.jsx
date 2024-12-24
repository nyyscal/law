import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MobileCard = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeEnd, setSwipeEnd] = useState(0);
  const cardRef = useRef(null);

  // Function to go to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  // Function to go to the previous card
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  // Function to start swipe
  const handleSwipeStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };

  // Function to move the swipe
  const handleSwipeMove = (e) => {
    setSwipeEnd(e.touches[0].clientX);
  };

  // Function to end swipe
  const handleSwipeEnd = () => {
    if (swipeStart - swipeEnd > 50) {
      handleNext(); // Swipe Left (next)
    } else if (swipeEnd - swipeStart > 50) {
      handlePrev(); // Swipe Right (previous)
    }
    setSwipeStart(0); // Reset swipe positions
    setSwipeEnd(0);
  };

  // Automatically go to the next card every 7 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 7000); // Change every 7 seconds

    return () => {
      clearInterval(interval); // Cleanup interval when component unmounts
    };
  }, [cardData.length]); // Re-run if cardData changes

  return (
    <div className="flex flex-col items-center mx-6">
      <h1 className="text-2xl font-bold mb-6">Card Slider</h1>
      <div
        className="relative w-full max-w-sm overflow-hidden"
        ref={cardRef}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
      >
        <div className="transition-all duration-300 transform p-4 bg-black shadow-md rounded-2xl border-4 border-white">
          <LazyLoadImage
            src={cardData[currentIndex].image}
            alt={cardData[currentIndex].title}
            effect="blur"
            className="w-full h-[200px] md:h-48 object-fit rounded-t-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]">
            {cardData[currentIndex].title}
          </h2>
          <p className="text-white text-base">
            {cardData[currentIndex].content}
          </p>
        </div>
      </div>

      {/* Pagination and navigation buttons */}
      <div className="flex justify-between items-center w-full max-w-sm mt-4">
        <button
          className="text-[#FFD700] text-2xl"
          onClick={handlePrev}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="flex space-x-2">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#FFD700]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <button
          className="text-[#FFD700] text-2xl"
          onClick={handleNext}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MobileCard;
