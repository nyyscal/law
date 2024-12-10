import React, { useEffect, useState } from "react";

const Logo = () => {
  const logos = [
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
  ];

  // We duplicate the logos array to create the illusion of an infinite loop
  const loopedLogos = [...logos, ...logos];

  const [currentLogo, setCurrentLogo] = useState(0);

  // Function to handle circular shifting of logos
  const handleNextLogo = () => {
    setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length); // Increment logo index
  };

  useEffect(() => {
    const interval = setInterval(handleNextLogo, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative text-white bg-black">
      {/* Desktop view: Circular carousel showing 5 logos */}
      <div className="hidden sm:block overflow-hidden w-full h-48">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-700 h-[250px]"
          style={{
            transform: `translateX(-${(currentLogo % logos.length) * 20}%)`, // Move 20% to show 5 logos
          }}
        >
          {loopedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-1/5 flex-shrink-0 flex justify-center items-center h-45 mx-auto bg-black"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view: Circular carousel showing 2 logos */}
      <div className="sm:hidden overflow-hidden w-full h-48">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-700 h-[250px]"
          style={{
            transform: `translateX(-${(currentLogo % logos.length) * 50}%)`, // Move 50% to show 2 logos at a time
          }}
        >
          {loopedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-1/2 flex-shrink-0 flex justify-center items-center h-45 mx-auto bg-black"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
