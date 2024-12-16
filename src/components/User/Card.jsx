import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const Card = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      title: "Real Estate Law",
      content:
        "In real estate law, a closing refers to the final step in a property transaction, where the buyer formally takes ownership, and the title is transferred.You may need a lawyer.",
      image: "/card/Tax.jpg",
    },
    {
      id: 2,
      title: "Divorce Settlement",
      content:
        "In a divorce, property division isn't always equal; some states follow the equitable distribution model, which means assets are divided fairly but not necessarily 50/50.",
      image: "/card/Divorce.png",
    },
    {
      id: 3,
      title: "Insurance Claims",
      content:
        "Insurance companies are required by law to act in good faith when processing claims, and failing to do so can result in penalties for bad faith claims handling.",
      image: "/card/Insurance.jpg",
    },
    {
      id: 4,
      title: "Tax Law",
      content:
        "The U.S. tax code is over 74,000 pages long, and tax law changes frequently, with over 4,000 amendments made in just the last decade.You may need a lawyer to fix the issue.",
      image: "/card/Tax.jpg",
    },
    {
      id: 5,
      title: "Immigration Law",
      content:
        "U.S. immigration law is complex, with more than 50 different visa categories for foreign nationals seeking entry to the U.S., including work, family, and student visas.",
      image: "/card/Immigration.jpg",
    },
    {
      id: 6,
      title: "Employment Law",
      content:
        "The Fair Labor Standards Act mandates that employees who work more than 40 hours in a week must be paid overtime unless they meet specific exemption criteria.",
      image: "/card/Employment.jpg",
    },
  ];

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
    <div className="flex flex-col items-center mx-6">
      <Title subTitle="Our Services" title="GET THE BEST ADVICE!" />
      <h1 className="text-2xl font-bold mb-6">Card Slider</h1>
      <div className="relative w-full overflow-hidden">
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
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2 text-[#FFD700]">
                  {card.title}
                </h2>
                <p className="text-white text-base sm:text-lg">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
