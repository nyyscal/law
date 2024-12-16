import React from "react";
import lawyer1 from "/lawyer1.jpg";
import lawyer2 from "/lawyer2.jpg";
import lawyer3 from "/lawyer3.png";
import program_icon_1 from "/program-icon-1.png";
import program_icon_2 from "/program-icon-2.png";
import program_icon_3 from "/program-icon-3.png";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Program = () => {
  const navigate = useNavigate();

  // Program Data
  const programs = [
    {
      image: lawyer1,
      icon: program_icon_1,
      text: "Real Estate Law",
      name: "John Doe",
      designation: "Senior Lawyer",
      fact: "I’ll ensure your property transactions are legally sound and protect your investments.",
    },
    {
      image: lawyer2,
      icon: program_icon_2,
      text: "Divorce Settlement",
      name: "Jane Smith",
      designation: "Family Law Expert",
      fact: "I can help you achieve a fair settlement while minimizing stress during this challenging time.",
    },
    {
      image: lawyer3,
      icon: program_icon_3,
      text: "Insurance Claims",
      name: "Mark Johnson",
      designation: "Insurance Specialist",
      fact: "Let me negotiate with the insurance company to get you the compensation you deserve.",
    },
  ];

  return (
    <div className="mx-auto my-20 px-4 sm:px-6 md:px-8">
      {/* Programs Grid */}
      <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-12">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-full lg:w-[31%] mb-8 lg:mb-0 group"
          >
            <img
              src={program.image}
              alt={program.text}
              className="w-full h-66 object-contain rounded-lg" // Ensure images are properly scaled
            />

            {/* Name and Designation */}
            <div className="text-center mt-6">
              <p className="text-2xl font-semibold text-[#FFD700]">
                {program.name}
              </p>
              <p className="text-white text-lg">{program.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
