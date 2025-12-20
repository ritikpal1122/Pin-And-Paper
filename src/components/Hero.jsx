import React from "react";
import Svg1 from "../assets/svg-1.jsx";

const Hero = () => {
  return (
    <main id="home" className="mt-10 lg:mt-16 relative overflow-hidden scroll-mt-20">
      {/* Full Screen SVG Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Svg1 className="w-full h-full" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-0 relative z-10" style={{ paddingBottom: "50px" }}>
        <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">
          OPEN-SOURCE EMBEDDED EDUCATION
        </p>
        <h1 className="font-black tracking-tight text-papNavy leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px]">
          The Open-Source
          <br />
          Path to Embedded Mastery
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 px-4">
          Democratizing embedded education through handwritten fundamentals, real‑world projects, and community‑driven learning.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="relative">
            <a 
              href="https://www.linkedin.com/in/rakesh-embedded/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs md:text-sm font-semibold bg-[#8BF18E] text-papNavy border border-emerald-300 relative z-10 hover:bg-[#7AE17D] transition-colors inline-block"
            >
              Join us with our 30,000+ learners
            </a>
            <div 
              className="absolute top-full left-0 right-0 mt-2 rounded-full"
              style={{
                height: "40px",
                background: "linear-gradient(to bottom, rgba(139, 241, 142, 0.3), rgba(139, 241, 142, 0.1), transparent)",
                transform: "scaleY(-1)",
                transformOrigin: "top",
                filter: "blur(8px)",
                zIndex: 0
              }}
            />
          </div>
          <div className="relative">
            <button 
              className="px-6 py-3 rounded-full text-xs md:text-sm font-semibold bg-[#FF7A5C] text-white border border-orange-400 relative z-10"
            >
              Start Learning
            </button>
            <div 
              className="absolute top-full left-0 right-0 mt-2 rounded-full"
              style={{
                height: "40px",
                background: "linear-gradient(to bottom, rgba(255, 122, 92, 0.3), rgba(255, 122, 92, 0.1), transparent)",
                transform: "scaleY(-1)",
                transformOrigin: "top",
                filter: "blur(8px)",
                zIndex: 0
              }}
            />
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;


