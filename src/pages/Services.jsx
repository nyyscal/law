import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { topics } from "../utils/assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Services = () => {
  const location = useLocation();
  const sectionRefs = useRef({});

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash].scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black px-8 lg:px-20 py-10">
      <header className="text-center mb-16">
        <h1 className="text-4xl lg:text-3xl font-bold text-[#FFD700]">
          Legal Topics
        </h1>
        <p className="text-lg lg:text-lg text-white mt-2">
          Explore the essentials of various legal fields.
        </p>
      </header>

      <main>
        {topics.map((topic) => (
          <>
            <div
              key={topic.id}
              id={topic.id}
              ref={(el) => (sectionRefs.current[topic.id] = el)}
              className="flex flex-col lg:flex-row items-center mb-16 min-h-[400px]"
              style={{ minHeight: "400px" }} // Set a consistent height
            >
              {/* Parent Wrapper */}
              <div className="flex flex-col lg:flex-row items-center w-full">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-auto rounded-lg shadow-md mb-6 lg:mb-0 ml-10">
                  <LazyLoadImage
                    effect="blur"
                    src={topic.image}
                    alt={topic.title}
                    className="w-[90%] h-auto rounded-lg"
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col lg:ml-10 lg:mr-10 items-start w-full lg:w-1/2">
                  {/* Vertical Line */}
                  <div>
                    <div className="flex">
                      <div className="w-1 h-6 bg-[#FFD700] mr-2 mt-1"></div>
                      <h2 className="text-2xl lg:text-2xl font-semibold text-[#FFD700]">
                        {topic.title}
                      </h2>
                    </div>

                    <div className="mt-4 text-white lg:text-base max-h-96 overflow-y-hidden max-w-[95%]">
                      <p>{topic.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-8 border-t-2 border-[#FFD700] w-full" />
          </>
        ))}
      </main>
    </div>
  );
};

export default Services;
