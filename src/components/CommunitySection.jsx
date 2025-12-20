import React from "react";
import Svg4 from "../assets/svg-4.jsx";

const CommunitySection = () => {
  return (
    <section className="mt-16 relative overflow-hidden">
      {/* Full Screen SVG Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Svg4 className="w-full h-full" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
      </div>
      
      <div className="relative z-10" style={{ paddingBottom: "50px" }}>
        <div className="flex justify-center lg:justify-end px-4 lg:px-0">
          <div className="w-full max-w-[1415px] lg:ml-8" style={{ borderTop: "1px solid #050E3C", borderRight: "0px", borderBottom: "1px solid #050E3C", borderLeft: "1px solid #050E3C", borderRadius: "16px 16px 16px 16px", padding: "20px 30px", textAlign: "left" }}>
            <p className="font-extrabold text-papNavy text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center lg:text-left" >
              Join us with our Embedded learning
              <br />
              Community
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-[21px] font-light text-[#050E3C]">
              PinAndPaper helps you build strong fundamentals through handwritten
              learning, real‑world examples, and industry‑aligned practice.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-8 lg:gap-16 justify-center flex-wrap px-4 lg:px-8" style={{ width: "100%" }}>
          <CommunityCard
            from="#f97316"
            via="#f97316"
            to="#ffffff"
            label="Beginner to Pro"
          />
          <CommunityCard
            from="#020617"
            via="#1e293b"
            to="#ffffff"
            label="Hands-on Projects"
          />
          <CommunityCard
            from="#22c55e"
            via="#86efac"
            to="#ffffff"
            label="Peer Community"
          />
        </div>
      </div>
    </section>
  );
};

const CommunityCard = ({ from, via, to, label }) => (
  <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col w-full max-w-[379px] mx-auto" style={{ height: "311px" }}>
    <div
      className="h-28 w-full"
      style={{
        background: `linear-gradient(to bottom, ${from}, ${via}, ${to})`,
      }}
    />
    <div className="p-4">
      <p className="text-xs font-semibold text-slate-600">{label}</p>
    </div>
  </div>
);

export default CommunitySection;


