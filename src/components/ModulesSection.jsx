import React from "react";
import Svg1 from "../assets/svg-1.jsx";
import Logo3d from "../assets/3d_logo.svg";

const ModulesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full Screen SVG Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Svg1 className="w-full h-full" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
      </div>
      
      <div className="relative z-10" style={{ paddingBottom: "50px" }}>
        {/* Upper Text - Full Width */}
        <p className="text-slate-600  mt-6 text-center italic font-light px-4" style={{ fontSize: "16px" }}>
          Transforming 2,000+ handwritten embedded notes into the open-source learning platform
          <br />
          for future engineers—practical, visual, and built for real careers.
        </p>
        
        {/* Text and Logo Section */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-10 items-center mb-12 px-4 lg:px-0">
          <div className="text-left flex flex-col w-full lg:w-auto px-5 lg:pl-20 lg:pr-8" style={{ maxWidth: "784px", borderTop: "1px solid #050E3C", borderRight: "1px solid #050E3C", borderBottom: "1px solid #050E3C", borderLeft: "0", borderRadius: "0 16px 16px 0", alignItems: "flex-start" }}>
            <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ textAlign: "left", lineHeight: "1.2", color: "#050E3C" }}>
              Learn essential embedded system skills for real engineering careers
            </h2>
            <p className="mt-3 mb-3 text-sm sm:text-base md:text-lg lg:text-xl" style={{ textAlign: "left", color: "#050E3C", fontWeight: "300" }}>
              PinAndPaper helps you build strong fundamentals through handwritten
              learning, real‑world examples, and industry‑aligned practice.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
            <img 
              src={Logo3d} 
              alt="3D Logo" 
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[679px] h-auto"
            />
          </div>
        </div>

        {/* Module Cards */}
        <div className="mx-auto px-4 lg:px-0" style={{ maxWidth: "1185px" }}>
          <div className="">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            <ModuleCard
              title="C & C++ Programming"
              subtitle="Module Details"
              accentFrom="#f97316"
              accentTo="#fed7aa"
              isFirst={true}
            />
            <ModuleCard
              title="ARM & Microprocessor"
              subtitle="Module Details"
              accentFrom="#0f172a"
              accentTo="#6366f1"
            />
            <ModuleCard
              title="Embedded Linux"
              subtitle="Module Details"
              accentFrom="#0f172a"
              accentTo="#22c55e"
            />
            <ModuleCard
              title="Networking Protocols"
              subtitle="Module Details"
              accentFrom="#0f172a"
              accentTo="#22c55e"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ModuleCard = ({ title, subtitle, accentFrom, accentTo, isFirst = false }) => (
  <div 
    className="rounded-2xl bg-white overflow-hidden shadow-sm flex flex-col w-full max-w-[243px] mx-auto"
    style={{ height: "308px", border: "1px solid #050E3C" }}
  >
    <div
      className="w-full"
      style={{
        height: "calc(308px - 114px)",
        backgroundColor: "#F4F4F4",
      }}
    >
      <div className={`p-4 h-full flex flex-col justify-between ${isFirst ? 'text-left' : ''}`}>
       
      </div>
    </div>
    <div 
      className="w-full flex flex-col p-4"
      style={{ height: "114px", backgroundColor: "#050E3C", justifyContent: "space-between" }}
    >
      <div>
        <h3 className="text-sm font-bold text-[#93DA97] text-left w-full">
          {title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-white/70 text-left w-full">{subtitle}</p>
      </div>
      <button 
        className="w-full py-2 rounded-full text-xs font-semibold"
        style={{ backgroundColor: "#93DA97", color: "#050E3C" }}
      >
        Show more
      </button>
    </div>
  </div>
);

export default ModulesSection;


