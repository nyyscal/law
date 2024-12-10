import React from "react";
// Replace with the correct path to the image
import aboutImage from "/image1.jpg";

const About = () => {
  return (
    <div className="bg-black">
      <section className="container mx-auto my-24 flex flex-col lg:flex-row items-center justify-between px-4 w-full">
        {/* Left Section: Image */}
        <div className="basis-full lg:basis-2/5 flex justify-center items-center mb-6 lg:mb-0">
          <img
            src="/lawyer.jpg"
            alt="About Us"
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="basis-full lg:basis-7/12 lg:pl-4 flex flex-col justify-center relative text-center lg:text-left">
          {/* Vertical Line beside "About Us" title */}
          <div className="absolute left-[15px] top-0 h-[30px] w-[4px] bg-[#FFD700] hidden lg:block"></div>

          <h3 className="font-semibold text-3xl text-[#FFD700] flex items-center justify-center lg:justify-start relative pl-3 mb-4 mx-4 sm:mx-0">
            <span>About Us</span>
          </h3>

          <h2 className="text-[28px] sm:text-[35px] text-white my-2 max-w-full sm:max-w-[500px] mx-auto lg:mx-0">
            Empowering Justice with Excellence
          </h2>

          <p className="text-gray-200 mb-4 text-xl px-4 lg:px-0 ">
            At our law firm, we believe in delivering exceptional legal services
            tailored to meet the unique needs of our clients. Our team of
            experienced attorneys is committed to providing strategic counsel,
            innovative solutions, and unwavering advocacy. Whether you need
            assistance with corporate law, personal matters, or complex
            litigation, we prioritize your success and protection.
          </p>
          <p className="text-gray-200 mb-4 text-xl px-4 lg:px-0">
            Our law firm company website is designed to provide easy access to
            essential legal services and information. Explore our expertise,
            meet our team, and connect with us to address your legal needs
            seamlessly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
