import React from "react";
import program1 from "/program-1.png";
import program2 from "/program-2.png";
import program3 from "/program-3.png";
import program_icon_1 from "/program-icon-1.png";
import program_icon_2 from "/program-icon-2.png";
import program_icon_3 from "/program-icon-3.png";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto my-20 w-[90%] flex flex-wrap lg:flex-nowrap justify-between items-center">
        {/* Program 1 */}
        <div className="relative flex-basis-[31%] lg:basis-[31%] mb-10 lg:mb-0">
          <img src={program1} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
            <img src={program_icon_1} alt="" className="w-15 mb-2" />
            <p>Real Estate Law</p>
          </div>
        </div>

        {/* Program 2 */}
        <div className="relative flex-basis-[31%] lg:basis-[31%] mb-10 lg:mb-0">
          <img src={program2} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
            <img src={program_icon_2} alt="" className="w-15 mb-2" />
            <p>Divorce Settlement</p>
          </div>
        </div>

        {/* Program 3 */}
        <div className="relative flex-basis-[31%] lg:basis-[31%]">
          <img src={program3} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center text-white rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
            <img src={program_icon_3} alt="" className="w-15 mb-2" />
            <p>Insurance Claims</p>
          </div>
        </div>
      </div>

      {/* Centered View More Button */}
      {/* Removed h-screen to remove the gap */}
      <div className="flex items-center justify-center my-10">
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-3 bg-[#212EA0] text-white font-semibold rounded-full hover:bg-[#1c2575] transition"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Program;
