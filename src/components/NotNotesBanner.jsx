import React from "react";
import Svg3 from "../assets/svg-3.jsx";
import Nan1 from "../assets/nan1.svg";
import Nan2 from "../assets/nan2.svg";
import Nan3 from "../assets/nan3.svg";

const NotNotesBanner = () => {
  return (
    <section className="mt-12 md:mt-16 relative overflow-hidden">
      {/* Full Screen SVG Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Svg3 className="w-full h-full" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
      </div>
    <div className="relative z-10 px-4 lg:px-0" >
      <div className="mx-auto relative mb-10 w-full max-w-[1185px]">
        {/* Second border - shifted bottom and left */}
        <div 
          className="hidden lg:block absolute rounded-3xl border-2 border-slate-400"
          style={{ 
            width: "100%", 
            maxWidth: "1185px",
            height: "auto",
            minHeight: "439px",
            bottom: "-30px",
            left: "-35px",
            zIndex: 0
          }}
        />
        {/* First border - same width as box */}
        <div 
          className="relative rounded-3xl border-2 border-slate-400 overflow-hidden w-full"
          style={{ 
            maxWidth: "1185px",
            minHeight: "439px",
            zIndex: 1
          }}
        >
          <div className="rounded-3xl bg-gradient-to-r from-papNavy/90 via-[#02052a]/90 to-[#0b1730]/90 backdrop-blur-sm text-white p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-4 lg:gap-6 items-center shadow-soft relative z-10" style={{ minHeight: "435px" }}>
        <div className="flex-1 w-full">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2">
            Not Just Notes.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            A Carefully Built Foundation for Embedded Engineers.
          </p>
          <span className="inline-block text-[10px] uppercase tracking-[0.35em] bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
            EXCLUSIVE
          </span>
          <p className="text-xs text-slate-200">
            These are not copied slides or surface-level explanations. Every page is
            engineered from first principles, refined through real-world usage, and
            structured to reduce cognitive overload.
          </p>
          <p className="mt-3 text-[11px] text-slate-200 font-semibold uppercase tracking-[0.2em]">
            Built for:
          </p>
          <ul className="mt-2 text-xs text-slate-200 space-y-1 list-disc list-inside">
            <li>Students struggling with fragmented learning</li>
            <li>Engineers revisiting fundamentals</li>
            <li>Professionals preparing for system-level roles</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <button className="px-5 py-2 rounded-full bg-[#ff7a5c] text-white font-semibold shadow-soft">
              Prototype Edition – Limited Release
            </button>
            <a 
              href="https://www.linkedin.com/company/pinandpaper/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-transparent border border-white/30 text-slate-100 font-semibold hover:bg-white/10 transition-colors"
            >
              Wishlist for Full Release
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: "200px", maxHeight: "400px" }}>
            {/* Left image - nan3.svg (behind, partially visible) - Desktop */}
            <img 
              src={Nan3} 
              alt="Left illustration" 
              className="hidden lg:block absolute z-10 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-auto"
              style={{ 
                left: "50%",
                transform: "translateX(-120%) translateY(50px)",
                opacity: 0.9
              }}
            />
            {/* Left image - nan3.svg - Mobile */}
            <img 
              src={Nan3} 
              alt="Left illustration" 
              className="lg:hidden absolute z-10 h-auto"
              style={{ 
                width: "120px",
                left: "50%",
                transform: "translateX(-125%) translateY(36px)",
                opacity: 0.9
              }}
            />
            {/* Main image - nan1.svg (on top, center) */}
            <img 
              src={Nan1} 
              alt="Main illustration" 
              className="relative z-30 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[480px] h-auto translate-y-5 lg:translate-y-0"
            />
            {/* Right image - nan2.svg (behind, partially visible) - Desktop */}
            <img 
              src={Nan2} 
              alt="Right illustration" 
              className="hidden lg:block absolute z-10 w-[140px] sm:w-[170px] md:w-[210px] lg:w-[270px] h-auto"
              style={{ 
                left: "50%",
                transform: "translateX(15%) translateY(50px)",
                opacity: 0.9
              }}
            />
            {/* Right image - nan2.svg - Mobile */}
            <img 
              src={Nan2} 
              alt="Right illustration" 
              className="lg:hidden absolute z-10 h-auto"
              style={{ 
                width: "120px",
                left: "50%",
                transform: "translateX(29%) translateY(35px)",
                opacity: 0.9
              }}
            />
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default NotNotesBanner;


