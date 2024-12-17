import React from "react";
import aboutImage from "/image1.jpg";

const About = () => {
  return (
    <div className="bg-black">
      <section className="container mx-auto my-20 flex flex-col lg:flex-row items-center justify-between px-4 w-[80%]">
        {/* Left Section: Image */}
        <div className="basis-full lg:basis-2/5 flex justify-center items-center mb-6 lg:mb-0 lg:mt-8">
          <img
            src="/image1.jpg"
            alt="About Us"
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="basis-full lg:basis-7/12 lg:pl-4 flex flex-col justify-center relative text-center lg:text-left mt-8">
          {/* Vertical Line beside "About Us" title */}
          <div className="absolute left-[15px] top-1 h-[25px] w-[4px] bg-[#FFD700] hidden lg:block"></div>

          <h3 className="font-semibold text-2xl text-[#FFD700] flex items-center justify-center lg:justify-start relative pl-3  mx-4 sm:mx-0">
            <span>About Us</span>
          </h3>

          <h2 className="text-[28px] sm:text-3xl text-[#FFD700] my-2 mt-2 max-w-full sm:max-w-[500px] mx-auto lg:mx-0">
            Empowering Justice with Excellence
          </h2>

          <p className="text-gray-200 mb-4 text-xl px-4 lg:px-0 ">
            G.C. Law Chamber is the best Law Firm in Nepal which provide
            exceptional legal services in various Sector with a commitment to
            integrity, professionalism, and client satisfaction. With a team of
            experienced and dedicated lawyers, we offer strategic legal
            solutions.
          </p>
          <p className="text-gray-200 mb-4 text-xl px-4 lg:px-0">
            We believe in building strong, long-lasting relationships with our
            clients. At G.C. Law Chamber, your success is our priority. Let us
            be your trusted partner in achieving the best legal outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
