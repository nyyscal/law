import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-white bg-black py-4 px-6">
      <p className="text-sm md:text-base">{subTitle}</p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#FFD700] normal-case break-words">
        {title}
      </h2>
    </div>
  );
};

export default Title;
