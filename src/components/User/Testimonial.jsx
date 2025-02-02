import React, { useEffect, useState } from "react";
import Title from "./Title";
import { testimonials } from "../../utils/assets";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeEnd, setSwipeEnd] = useState(0);

  const slidesPerPageMobile = 1; // 1 testimonial per slide on mobile
  const slidesPerPageDesktop = 2; // 2 testimonials per slide on desktop

  const totalSlidesMobile = testimonials.length;
  const totalSlidesDesktop = Math.ceil(
    testimonials.length / slidesPerPageDesktop
  );

  // Handle next slide change
  const handleNext = () => {
    setCurrentSlide((prevSlide) => {
      const totalSlides =
        window.innerWidth < 1024 ? totalSlidesMobile : totalSlidesDesktop;
      return (prevSlide + 1) % totalSlides;
    });
  };

  // Handle previous slide change
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => {
      const totalSlides =
        window.innerWidth < 1024 ? totalSlidesMobile : totalSlidesDesktop;
      return (prevSlide - 1 + totalSlides) % totalSlides;
    });
  };

  // Swipe handlers
  const handleSwipeStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    setSwipeEnd(e.touches[0].clientX);
  };

  const handleSwipeEnd = () => {
    if (swipeStart - swipeEnd > 50) {
      handleNext(); // Swipe Left (next)
    } else if (swipeEnd - swipeStart > 50) {
      handlePrev(); // Swipe Right (previous)
    }
    setSwipeStart(0); // Reset swipe positions
    setSwipeEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Auto slide every 4 seconds
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalSlidesMobile, totalSlidesDesktop]);

  const groupedTestimonials =
    window.innerWidth < 1024
      ? testimonials.slice(currentSlide, currentSlide + 1) // Mobile view, show 1 testimonial
      : testimonials.slice(
          currentSlide * slidesPerPageDesktop,
          (currentSlide + 1) * slidesPerPageDesktop
        ); // Desktop view, show 2 testimonials

  return (
    <div className="mb-4 my-6 px-4 sm:px-6 md:px-8">
      <Title subTitle="Testimonials" title="What our clients say?" />

      {/* Slider */}
      <div
        className="overflow-hidden relative"
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
      >
        <ul className="flex transition-transform duration-500">
          <li className="list-none w-full px-4 py-5 sm:px-6 lg:px-10 lg:py-8">
            <div className="flex flex-wrap justify-between gap-4 sm:gap-4 lg:gap-3 xl:gap-3">
              {groupedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shadow-lg p-6 rounded-lg text-[#676767] leading-relaxed w-full sm:w-[48%] lg:w-[48%] xl:w-[48%] border-4 border-[#FFD700] overflow-hidden"
                >
                  <div className="flex items-center mb-4 text-sm lg:text-base">
                    <img
                      src={testimonial.image}
                      alt="User"
                      className="w-16 sm:w-20 lg:w-24 rounded-full mr-3 border-4 border-[#FFD700]"
                    />
                    <div>
                      <h3 className="text-[#ffffff] text-base sm:text-base font-semibold">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm sm:text-base">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-200 text-base sm:text-base">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </li>
        </ul>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 w-full transform -translate-y-1/2 sm:hidden flex justify-between px-4 mt-44">
          <button
            className="text-[#FFD700] text-2xl"
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="text-[#FFD700] text-2xl "
            onClick={handleNext}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center space-x-2 mt-2 mb-14">
        {window.innerWidth < 1024
          ? Array.from({ length: totalSlidesMobile }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-[#FFD700]" : "bg-[#676767]"
                } cursor-pointer transition-all duration-300`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))
          : Array.from({ length: totalSlidesDesktop }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-[#FFD700]" : "bg-[#676767]"
                } cursor-pointer transition-all duration-300`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default Testimonials;
