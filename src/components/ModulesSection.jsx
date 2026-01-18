import React, { useState } from "react";
import Svg1 from "../assets/svg-1.jsx";
import Logo3d from "../assets/3d_logo.svg";
import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpeg";
import Image3 from "../assets/image3.jpeg";
import Image4 from "../assets/image4.jpeg";

const ModulesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="modules" className="relative overflow-hidden scroll-mt-20">
      {/* Full Screen SVG Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Svg1 className="w-full h-full" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
      </div>
      
      <div className="relative z-10" style={{ paddingBottom: "50px" }}>
        {/* Text and Logo Section */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-10 items-center px-4 lg:px-0 lg:h-[350px]">
          <div className="text-left flex flex-col pt-[10px] w-full lg:w-auto px-0 lg:pl-20 lg:pr-8 lg:border-t lg:border-r lg:border-b lg:border-l-0 lg:rounded-r-2xl" style={{ maxWidth: "784px", alignItems: "flex-start", borderColor: "#050E3C" }}>
            <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ textAlign: "left", lineHeight: "1.2", color: "#050E3C" }}>
              Core Embedded Systems Modules
            </h2>
            <p className="mt-3 mb-3 text-sm sm:text-base md:text-lg lg:text-xl" style={{ textAlign: "left", color: "#050E3C", fontWeight: "300" }}>
              Each module is built from first principles and handwritten reasoning. No surface-level tutorials. No fragmented topics. Just structured systems knowledge that compounds.
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
        <div className="mx-auto px-0 md:px-4 lg:px-0" style={{ maxWidth: "1185px" }}>
          <div className="pt-4">
            {/* <p className="mb-2 text-lg sm:text-lg text-slate-600 text-left px-4 lg:px-0">
              Modules are released progressively to maintain depth, quality, and technical integrity.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 text-left px-4 lg:px-0">
              Designed for students, professionals, and engineers who want to understand systems, not just use tools.
            </p> */}
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start">
            <ModuleCard
              id="c-cpp"
              title="C & C++ Programming"
              subtitle="Foundation Layer"
              description="Understand how software interacts with hardware at the lowest level. This module focuses on memory, pointers, compilation, execution flow, and writing predictable code for constrained systems."
              outcome="Write efficient, readable C and C++ code that behaves deterministically on embedded targets."
              accentFrom="#f97316"
              accentTo="#fed7aa"
              isFirst={true}
              image={Image1}
              isExpanded={expandedCard === "c-cpp"}
              onToggle={() =>
                setExpandedCard((prev) => (prev === "c-cpp" ? null : "c-cpp"))
              }
            />
            <ModuleCard
              id="arm"
              title="ARM & Microprocessor Architecture"
              subtitle="Hardware Thinking"
              description="Learn how processors actually work under the hood. From registers and instruction cycles to interrupts, memory maps, and peripheral control."
              outcome="Read datasheets with confidence and reason about execution, timing, and system behavior."
              accentFrom="#0f172a"
              accentTo="#6366f1"
              image={Image2}
              isExpanded={expandedCard === "arm"}
              onToggle={() =>
                setExpandedCard((prev) => (prev === "arm" ? null : "arm"))
              }
            />
            <ModuleCard
              id="linux"
              title="Embedded Linux"
              subtitle="System-Level Engineering"
              description="Move beyond bare metal into full system design. Understand kernels, boot flow, device trees, drivers, and how Linux fits into embedded products."
              outcome="Build and debug embedded Linux systems with clarity, not guesswork."
              accentFrom="#0f172a"
              accentTo="#22c55e"
              image={Image3}
              isExpanded={expandedCard === "linux"}
              onToggle={() =>
                setExpandedCard((prev) => (prev === "linux" ? null : "linux"))
              }
            />
            <ModuleCard
              id="networking"
              title="Networking Protocols"
              subtitle="Communication Layer"
              description="Embedded systems do not operate in isolation. This module breaks down communication protocols, data flow, and real-world networking use cases."
              outcome="Design reliable communication between devices, systems, and services."
              accentFrom="#0f172a"
              accentTo="#22c55e"
              image={Image4}
              isExpanded={expandedCard === "networking"}
              onToggle={() =>
                setExpandedCard((prev) => (prev === "networking" ? null : "networking"))
              }
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ModuleCard = ({ title, subtitle, description, outcome, accentFrom, accentTo, isFirst = false, image, isExpanded, onToggle }) => {
  const shortDescription = description.includes(". ")
    ? `${description.split(". ")[0]}.`
    : description;

  return (
    <div 
      className={`rounded-2xl bg-white shadow-sm flex flex-col w-full max-w-[280px] mx-auto group relative self-start ${isExpanded ? "lg:h-auto" : "lg:h-[350px]"}`}
      style={{ border: "1px solid #050E3C" }}
    >
      <div
        className="w-full relative overflow-hidden rounded-t-2xl"
        style={{
          height: "180px",
          backgroundColor: "#F4F4F4",
        }}
      >
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:object-contain transition-all duration-700 ease-out"
            style={{
              transform: "scale(1)",
              transformOrigin: "center center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1), object-fit 700ms ease-out";
              e.currentTarget.style.transform = "scale(0.88)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transition = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1), object-fit 700ms ease-out";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        )}
      </div>
      <div className="w-full flex-1 flex flex-col p-4 rounded-b-2xl gap-3" style={{ backgroundColor: "#050E3C" }}>
        <div>
          <h3 className="text-sm font-bold text-[#93DA97] text-left w-full">
            {title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-white/70 text-left w-full">{subtitle}</p>
        </div>
        <div className="text-[11px] text-white/80 leading-relaxed text-left">
          <p>
            {isExpanded ? description : shortDescription}
          </p>
          {isExpanded && (
            <p className="mt-3 text-white/90">
              <span className="font-semibold text-white">Outcome:</span> {outcome}
            </p>
          )}
        </div>
        <button
          type="button"
          className="w-full mt-auto py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          onClick={onToggle}
        >
          {isExpanded ? "Show less" : "See more"}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModulesSection;


