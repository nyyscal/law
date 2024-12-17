import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-white bg-black px-6 py-2">
      <p className="text-sm md:text-xl">{subTitle}</p>
      <h2 className="text-2xl md:text-3xl lg:text-3xl text-[#FFD700] normal-case break-words">
        {title}
      </h2>
    </div>
  );
};

export default Title;
