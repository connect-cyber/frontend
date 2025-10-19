import { assest } from "@/assets/assets";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      <div className="w-32 h-32">
        <img
          src={assest.loader}
          alt="Loading..."
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Loader;