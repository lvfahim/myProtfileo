import React from "react";
import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import Footer from "../Component/Footer";

const Root = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A2E] to-[#16213E] text-gray-200">
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft neon gradient glows */}
        <div className="w-72 h-72 bg-[#7F00FF]/20 blur-[120px] rounded-full absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-[#00DBDE]/20 blur-[120px] rounded-full absolute bottom-10 right-10"></div>
      </div>

      <Navber />

      <div className="relative z-10 pt-6 pb-12 px-5">
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;