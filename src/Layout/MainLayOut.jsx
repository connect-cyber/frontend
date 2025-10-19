import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
// max-w-[1440px] mx-auto
function MainLayOut() {
  return (
    <div className="">
      {/* Header */}
      <div>
        <Navbar />
      </div>

      {/* Content */}
      <div className="min-h-[100vh] overflow-hidden">
        <Outlet />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayOut;
