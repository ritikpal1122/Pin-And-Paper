import React from "react";
import Group38Svg from "../assets/Group 38.svg";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex items-center justify-between pt-6 pb-4">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
          <img 
            src={Group38Svg} 
            alt="PinAndPaper Logo" 
            className="h-[62px] w-[273px]"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button 
            onClick={() => scrollToSection("home")}
            className="px-4 py-2 rounded-full bg-white/70 border border-slate-200 shadow-sm"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("modules")}
            className="text-slate-700 hover:text-papNavy"
          >
            Modules
          </button>
          <button 
            onClick={() => scrollToSection("community")}
            className="text-slate-700 hover:text-papNavy"
          >
            Community
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-slate-700 hover:text-papNavy"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("pricing")}
            className="text-slate-700 hover:text-papNavy"
          >
            Pricing
          </button>
          <button className="text-slate-700 hover:text-papNavy">Sign In</button>
        </nav>

        <a 
          href="https://www.linkedin.com/company/pinandpaper/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-5 py-2 rounded-full text-sm font-semibold bg-[#9CF592] text-papNavy shadow-soft border border-emerald-300 hover:bg-[#8BE582] transition-colors"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;


