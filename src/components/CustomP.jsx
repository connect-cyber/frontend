import React from "react";

function CustomP({ content }) {
  return (
    <p className="text-[15px] px-1 mt-[11px] md:px-2 md:text-[18px] lg:mt-[13px] lg:text-xl">
      {content}
    </p>
  );
}

export default CustomP;
