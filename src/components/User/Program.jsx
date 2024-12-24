import React from "react";
import { assets } from "../../utils/assets";

const Program = () => {
  // Select any 3 entries from the assets array
  const selectedPrograms = assets.slice(0, 3).map((item, index) => ({
    image: item.image,
    text: `Program ${index + 1}`,
    name: item.name,
    designation: item.designation,
  }));

  return (
    <div className="mx-auto my-16 px-4 sm:px-6 md:px-28">
      {/* Programs Grid */}
      <div className="flex flex-wrap justify-between items-center gap-y-8 gap-x-0">
        {selectedPrograms.map((program, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-full lg:w-[31%] mb-8 lg:mb-0 group"
          >
            {/* Image Container */}
            <div className="w-full max-w-fit h-[284.68px] flex justify-center items-center overflow-hidden">
              <img
                src={program.image}
                alt={program.text}
                className="w-full h-full object-contain shadow-md border-4 border-[#FFD700]"
              />
            </div>

            {/* Name and Designation */}
            <div className="text-center mt-4 px-2">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFD700] break-words">
                {program.name}
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg">
                {program.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
