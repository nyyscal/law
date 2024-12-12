import React, { useState, useEffect } from "react";
import Title from "./Title.jsx";

const About = () => {
  const slides = [
    {
      image: "/lawyer1.jpg",
      text: `"As a proud member of this firm, I can confidently say that we are dedicated to providing the highest standard of legal representation. Our team is built on a foundation of integrity, professionalism, and respect for our clients. Every case we handle is approached with the utmost care, ensuring our clients receive tailored solutions. It's an honor to help protect the rights and interests of those we serve."`,
      name: "Theresa May",
      designation: "Senior Lawyer",
    },
    {
      image: "/lawyer2.jpg",
      text: `"At our firm, we believe in justice and fairness, and we work tirelessly to achieve the best outcomes for our clients. Whether in the courtroom or through legal counsel, we strive to make complex matters simple and manageable. Our team’s expertise spans a variety of legal fields, allowing us to offer diverse solutions. We are here to stand by you through every step of the legal process."`,
      name: "Jane Smith",
      designation: "Legal Consultant",
    },
    {
      image: "/lawyer3.1.jpg",
      text: `"I am proud to be part of a firm that prioritizes the well-being and success of its clients. We approach each case with dedication and a commitment to excellence. From legal consultation to representation, we offer comprehensive services that meet the needs of individuals and businesses alike. It’s rewarding to be part of a team that truly makes a difference in people’s lives.We are here to stand by you through every step of the legal process"`,
      name: "Alex Brown",
      designation: "Managing Partner",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="Our Legal Assets" subTitle="Nepal's Finest" />
      <div className="bg-black flex flex-col md:flex-row w-full h-[700px] items-center  p-2">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <img
            className="object-contain transition-all ease-in-out duration-700"
            width={700}
            height={700}
            src={slides[currentSlide].image}
            alt="Consultation"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-[2px] bg-[#FFD700] h-[70%]"></div>

        {/* Right Side: Text */}
        <div className="flex flex-col text-xl justify-normal w-full md:w-1/2 p-4 text-left font-mono max-w-[900px] sm:ml-6">
          <div>
            <h1 className="text-3xl font-bold mb-6 font-serif top-0 text-[#FFD700] z-10 py-4">
              Meet our Legal Team
            </h1>
          </div>
          <p className="transition-all ease-in-out duration-700 mb-4 text-gray-200">
            {slides[currentSlide].text}
          </p>

          {/* Name and Designation */}
          <div className="font-semibold text-lg mt-4 text-[#FFD700]">
            <p>- {slides[currentSlide].name}</p>
            <p className="text-sm text-slate-100">
              {slides[currentSlide].designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
