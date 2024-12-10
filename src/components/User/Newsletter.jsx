import React from "react";
import { IoSend } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div
      className="bg-[url('/background5.jpg')] bg-cover bg-center bg-opacity-60 w-full"
      style={{
        backgroundImage: "url('/background5.jpg')",
        height: "400px", // Set height for the background image
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto rounded-lg p-8 md:p-20 gap-6 h-full">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3 text-center md:text-left max-w-lg">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-[#FFD700] relative pl-6">
            <span className="absolute left-0 top-0 bottom-0 w-2 bg-[#FFD700]"></span>
            Are you in Trouble with any Cases?
          </h1>
          <p className="text-white text-sm sm:text-lg leading-relaxed">
            Welcome to <span className="font-bold">GC Law Chamber</span>, your
            trusted partner in legal matters. With a renowned team of lawyers,
            we provide the best service you need in Pokhara and beyond.
          </p>
        </div>

        {/* Right Side: Input and Button */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="flex border border-black rounded-lg overflow-hidden w-full">
            <input
              className="flex-grow px-4 py-3 text-lg sm:text-xl focus:outline-none focus:border-[#212EA0] focus:ring-0"
              type="email"
              placeholder="info@example.com"
            />
            <button className="bg-[#212EA0] text-white px-6 py-3 rounded-r-lg font-medium transition-all flex justify-center items-center ">
              <IoSend size={25} /> {/* Adjust size of the icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
