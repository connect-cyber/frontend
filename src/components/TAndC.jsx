import React from "react";

function TAndC({ heading, description }) {
  return (
    <div>
      <h1 className="font-semibold mt-5 text-[15px] px-1 md:px-2 md:text-[20px] lg:text-[22px]">{heading}</h1>
      <p className="text-[15px] px-1 md:px-2 md:text-[18px] lg:text-xl">{description}</p>
    </div>
  );
}

export default TAndC;
