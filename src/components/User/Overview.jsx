import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col md:flex-row w-full h-auto items-center gap-6 p-4 md:p-6 overflow-hidden">
      {/* Left Side: Image */}
      <div className="flex items-center justify-center w-full pl-4 md:w-1/2 h-[250px] sm:h-[350px] md:h-[350px] lg:h-[400px]">
        <img
          className="object-cover border border-white rounded-3xl w-full h-full md:w-[70%] md:h-[80%] lg:w-[70%] lg:h-[100%]"
          src="/overview.jpg"
          alt="Overview"
        />
      </div>

      {/* Vertical Golden Line (Visible on md and larger screens) */}
      <div className="hidden md:block border-l-2 border-[#FFD700] h-auto mx-2 md:h-[300px] lg:h-[400px]"></div>

      {/* Right Side: Text */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-4 text-center font-mono">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-serif text-white text-center">
          Why Choose Our Law Firm?
        </h1>
        <ul className="space-y-4 text-left text-sm sm:text-base md:text-lg text-white">
          <li className="flex items-center">
            <FaCircleCheck size={20} className="text-[#FFD700] mr-2" />
            <b>Experienced Team</b>
            <p className="hidden sm:flex">
              :&nbsp; Over 7+ years of experience.
            </p>
          </li>
          <li className="flex items-center">
            <FaCircleCheck size={20} className="text-[#FFD700] mr-2" />
            <b>Personalized Service</b>{" "}
            <p className="hidden sm:blcok">
              :&nbsp; Every client is unique, we treat you as such.
            </p>
          </li>
          <li className="flex items-center">
            <FaCircleCheck size={20} className="text-[#FFD700] mr-2" />
            <b>Transparent Pricing</b>{" "}
            <p className="hidden sm:block">
              :&nbsp; No hidden fees or unexpected charges.
            </p>
          </li>
          <li className="flex items-center">
            <FaCircleCheck size={20} className="text-[#FFD700] mr-2" />
            <b>Award-Winning</b>{" "}
            <p className="hidden sm:block">
              :&nbsp; Our attorneys have been recognized by legal bodies.
            </p>
          </li>
        </ul>
        <button
          className="w-[60%] sm:w-[70%] md:w-[60%] mt-6 max-w-[250px] px-2 py-3 bg-[#FFD700] text-black font-serif rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          onClick={() => navigate("/contact")}
        >
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Overview;
