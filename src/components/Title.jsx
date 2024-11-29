import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-[#212EA0] text-sm font-semibold uppercase my-[70px]">
      <p>{subTitle}</p>
      <h2 className="text-[32px] text-[#000F38] mt-1 normal-case">{title}</h2>
    </div>
  );
};

export default Title;
