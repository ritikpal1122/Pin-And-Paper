import React from "react";
import Book from "../assets/book.svg";

const StorySection = () => {
  return (
    <section className="w-full mt-[100px]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]" style={{ paddingBottom: "50px" }}>
        <div className="grid lg:grid-cols-[auto_auto] gap-6 lg:gap-10 items-start relative">
      <div className="w-full" style={{ maxWidth: "800px" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-papNavy">
          Democratizing Embedded Education,
          <br />
          One Handwritten Note at a Time
        </h2>
        <p className="mt-4 font-light text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed break-words overflow-wrap-anywhere w-full lg:w-[500px] text-center lg:text-left mx-auto">
          PinAndPaper exists to make embedded systems learning clear,
          accessible, and career‑relevant. We transform deeply researched
          handwritten engineering notes into structured, visual, and practical
          learning experiences.
        
          
          Built by engineers for engineers, our focus is on strong
          fundamentals, real‑world applications, and long‑term skill
          development—so learners don&apos;t just study embedded systems, they
          truly understand them.
        </p>
      </div>

      <div className="relative lg:absolute lg:right-0 lg:top-[50%] lg:translate-y-[-45%] mt-6 lg:mt-0">
        <img 
          src={Book} 
          alt="Book illustration" 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[657px] h-auto mx-auto lg:mx-0"
        />
        </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;


