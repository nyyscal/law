import React, { useEffect, useState } from "react";
import user1 from "/user-1.png";
import user2 from "/user-2.png";
import user3 from "/user-3.png";
import user4 from "/user-4.png";

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
  ];

  const slidesPerPage = 2; // Show 2 testimonials per page
  const totalSlides = Math.ceil(testimonials.length / slidesPerPage);

  // Auto-scroll to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop through slides
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalSlides]);

  // Slice testimonials into chunks of two for pagination
  const groupedTestimonials = testimonials.slice(
    currentSlide * slidesPerPage,
    (currentSlide + 1) * slidesPerPage
  );

  return (
    <div className="my-20 px-10 lg:px-20 relative">
      {/* Slider */}
      <div className="overflow-hidden">
        <ul className="flex transition-transform duration-500">
          <li className="list-none w-full px-5 lg:px-10 py-5 lg:py-10">
            <div className="flex space-x-10">
              {groupedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shadow-lg p-10 lg:p-16 rounded-lg text-[#676767] leading-relaxed w-1/2"
                >
                  <div className="flex items-center mb-5 text-sm lg:text-base">
                    <img
                      src={testimonial.image}
                      alt="User"
                      className="w-16 lg:w-20 rounded-full mr-3 border-4 border-[#212EA0]"
                    />
                    <div>
                      <h3 className="text-[#212EA0] text-sm lg:text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center space-x-2 mb-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-[#212EA0]" : "bg-[#676767]"
            } cursor-pointer transition-all duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
