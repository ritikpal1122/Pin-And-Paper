import React from "react";
import Group38Svg from "../assets/Group 38.svg";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between pt-6 pb-4">
      <div className="flex items-center">
        <img 
          src={Group38Svg} 
          alt="PinAndPaper Logo" 
          className="h-[62px] w-[273px]"
        />
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <button className="px-4 py-2 rounded-full bg-white/70 border border-slate-200 shadow-sm">
          Home
        </button>
        <button className="text-slate-700 hover:text-papNavy">Modules</button>
        <button className="text-slate-700 hover:text-papNavy">Community</button>
        <button className="text-slate-700 hover:text-papNavy">Services</button>
        <button className="text-slate-700 hover:text-papNavy">Sign In</button>
      </nav>

      <button className="ml-4 px-5 py-2 rounded-full text-sm font-semibold bg-[#9CF592] text-papNavy shadow-soft border border-emerald-300">
        Let&apos;s Talk
      </button>
    </header>
  );
};

export default Navbar;


