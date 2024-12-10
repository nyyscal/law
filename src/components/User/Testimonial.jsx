import React, { useEffect, useState } from "react";
import user1 from "/user-1.png";
import user2 from "/user-2.png";
import user3 from "/user-3.png";
import user4 from "/user-4.png";
import Title from "./Title";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      image: user1,
      name: "Jessica Thompson",
      company: "Thompson & Co., USA",
      text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
    },
    {
      image: user2,
      name: "Michael Rogers",
      company: "Rogers Law Group, UK",
      text: "I was in a tough legal situation, but the lawyers here guided me through every step with clarity and confidence. Their attention to detail and strategic advice were key to my case's success. I highly recommend their services.",
    },
    {
      image: user3,
      name: "Sophia Carter",
      company: "Carter Legal Services, Canada",
      text: "This law firm went above and beyond to ensure my case was handled professionally and with care. They worked tirelessly, and I felt truly supported from the moment I reached out. Their team is exceptional, and I am incredibly satisfied with the outcome.",
    },
    {
      image: user4,
      name: "David Brown",
      company: "Brown & Associates, Australia",
      text: "The legal team provided top-notch service and excellent advice during a complex legal matter. I always felt like a priority, and their communication was clear and timely. They made an otherwise stressful process manageable and ultimately successful.",
    },
    {
      image: user2,
      name: "Bart Simpson",
      company: "Thompson & Co., USA",
      text: "I was in a tough legal situation, but the lawyers here guided me through every step with clarity and confidence. Their attention to detail and strategic advice were key to my case's success. I highly recommend their services.",
    },
    {
      image: user1,
      name: "Peter Griffin",
      company: "Rogers Law Group, UK",
      text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
    },
  ];

  const slidesPerPageMobile = 1; // 1 testimonial per slide on mobile
  const slidesPerPageDesktop = 2; // 2 testimonials per slide on desktop

  const totalSlidesMobile = testimonials.length;
  const totalSlidesDesktop = Math.ceil(
    testimonials.length / slidesPerPageDesktop
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const totalSlides =
          window.innerWidth < 1024 ? totalSlidesMobile : totalSlidesDesktop;
        return (prevSlide + 1) % totalSlides;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlidesMobile, totalSlidesDesktop]);

  const groupedTestimonials =
    window.innerWidth < 1024
      ? testimonials.slice(currentSlide, currentSlide + 1) // Mobile view, show 1 testimonial
      : testimonials.slice(
          currentSlide * slidesPerPageDesktop,
          (currentSlide + 1) * slidesPerPageDesktop
        ); // Desktop view, show 2 testimonials

  return (
    <div className="my-20 px-4 sm:px-6 md:px-8">
      <Title subTitle="Testimonials" title="What our clients say?" />

      {/* Slider */}
      <div className="overflow-hidden">
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
                      <h3 className="text-[#ffffff] text-base sm:text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm sm:text-base">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-200 text-base sm:text-xl">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center space-x-2 mt-6">
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
