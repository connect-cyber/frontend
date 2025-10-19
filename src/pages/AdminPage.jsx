import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div>
     <div>
        <Navbar/>
     </div>

      <div className="min-h-[100vh]">
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default AdminPage;