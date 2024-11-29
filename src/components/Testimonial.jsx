import React, { useRef } from "react";
import next_icon from "/next-icon.png";
import back_icon from "/back-icon.png";
import user1 from "/user-1.png";
import user2 from "/user-2.png";
import user3 from "/user-3.png";
import user4 from "/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="my-20 px-10 lg:px-20 relative">
      {/* Next Button */}
      <img
        src={next_icon}
        alt="Next"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 w-12 lg:w-16 rounded-full cursor-pointer bg-[#212EA0]"
        onClick={slideForward}
      />
      {/* Back Button */}
      <img
        src={back_icon}
        alt="Back"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 w-12 lg:w-16 rounded-full cursor-pointer bg-[#212EA0]"
        onClick={slideBackward}
      />

      {/* Slider */}
      <div className="overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] transition-transform duration-500"
        >
          {/* Slides */}
          {[user1, user2, user3, user4].map((user, index) => (
            <li
              key={index}
              className="list-none w-1/2 px-5 lg:px-10 py-5 lg:py-10"
            >
              <div className="shadow-lg p-10 lg:p-16 rounded-lg text-[#676767] leading-relaxed">
                <div className="flex items-center mb-5 text-sm lg:text-base">
                  <img
                    src={user}
                    alt="User"
                    className="w-16 lg:w-20 rounded-full mr-3 border-4 border-[#212EA0]"
                  />
                  <div>
                    <h3 className="text-[#212EA0] text-sm lg:text-lg font-semibold">
                      William Jackson
                    </h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
