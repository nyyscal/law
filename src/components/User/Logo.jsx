import React from "react";

const Logo = () => {
  const DESKTOP_SPEED = 15;
  const MOBILE_SPEED = DESKTOP_SPEED * (2 / 5);

  const logos = [
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
  ];

  // Seamless looping with dynamic duplication
  const seamlessLogos = [...logos, ...logos]; // Duplicate logos for seamless looping

  return (
    <div className="relative text-white bg-black">
      {/* Desktop view */}
      <div className="hidden sm:block overflow-hidden w-full h-48 relative">
        <div className="flex absolute animate-infinite-scroll">
          {seamlessLogos.map((logo, index) => (
            <div
              key={`desktop-${index}`}
              className="w-[20%] flex-shrink-0 flex justify-center items-center h-48"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden overflow-hidden w-full h-48 relative">
        <div className="flex absolute animate-infinite-scroll-mobile">
          {seamlessLogos.map((logo, index) => (
            <div
              key={`mobile-${index}`}
              className="w-[50%] flex-shrink-0 flex justify-center items-center h-48"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .animate-infinite-scroll {
          animation: infiniteScroll ${DESKTOP_SPEED}s linear infinite;
        }

        .animate-infinite-scroll-mobile {
          animation: infiniteScroll ${MOBILE_SPEED}s linear infinite;
        }

        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-infinite-scroll:hover,
        .animate-infinite-scroll-mobile:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Logo;
