import React from "react";
// Replace with the correct path to the image
import aboutImage from "/image1.jpg";

const About = () => {
  return (
    <div className="bg-slate-500 py-18">
      <section className="container mx-auto my-24 flex flex-col lg:flex-row items-center justify-between w-[90%]">
        {/* Left Section: Image */}
        <div className="basis-full lg:basis-2/5 flex justify-center items-center">
          <img
            src="/lawyer.jpg"
            alt="About Us"
            className="w-full h-auto max-h-[400px] m-6" // Adjusted for flexible height and width
          />
        </div>

        {/* Right Section: Text */}
        <div className="basis-full lg:basis-7/12 lg:pl-4 flex flex-col justify-center relative">
          {/* Vertical Line beside "About Us" title */}
          <div className="absolute left-[15px] top-0 h-[30px] w-[4px] bg-[#212EA0]"></div>

          <h3 className="font-semibold text-xl text-[#212EA0] flex items-center relative pl-3">
            <span>About Us</span>
          </h3>

          <h2 className="text-[35px] text-[#000F38] my-2 max-w-[400px]">
            Empowering Justice with Excellence
          </h2>
          <p className="text-[#121111] mb-4">
            At our law firm, we believe in delivering exceptional legal services
            tailored to meet the unique needs of our clients. Our team of
            experienced attorneys is committed to providing strategic counsel,
            innovative solutions, and unwavering advocacy. Whether you need
            assistance with corporate law, personal matters, or complex
            litigation, we prioritize your success and protection.
          </p>
          <p className="text-[#121111] mb-4">
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
