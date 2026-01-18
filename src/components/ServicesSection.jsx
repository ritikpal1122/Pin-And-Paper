import React from "react";
import CoreService1 from "../assets/core_service1.svg";
import CoreService2 from "../assets/core_service2.svg";
import CoreService3 from "../assets/core_service_3.svg";
import CoreService4 from "../assets/core_service4.svg";

const ServicesSection = () => {
  return (
    <section id="services" className="w-full lg:mt-[100px] mt-[250px] scroll-mt-20">
      <div className="w-full px-4 lg:px-8 " style={{ paddingBottom: "50px" }}>
        <h2 className="font-extrabold text-papNavy text-center lg:text-left lg:ml-24 text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
          Our Core Strengths
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12">
        <ServiceCard
          title="Deep Domain Expertise"
          body="2+ years building production-grade embedded systems and IP camera software, from drivers to application layers."
          icon="🧠"
          image={CoreService1}
        />
        <ServiceCard
          title="Teaching Built on Practice"
          body="Thousands of learners mentored through real engineering problems, with clarity, patience, and hands-on depth."
          icon="👩‍🏫"
          image={CoreService2}
        />
        <ServiceCard
          title="Original Handwritten IP"
          body="2,000+ pages of original, industry-tested handwritten notes developed over years of real-world work."
          icon="✍️"
          image={CoreService3}
        />
        <ServiceCard
          title="Proven Community Traction"
          body="30,000+ engineers, students, and career switchers actively learning and engaging with the platform."
          icon="📈"
          image={CoreService4}
        />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, body, icon, image }) => (
  <div 
    className="rounded-2xl bg-white shadow-sm px-5 flex flex-col items-start w-full max-w-[284px] "
    style={{ minHeight: "311px", border: "1px solid #050E3C" }}
  >
    {image ? (
      <div className="flex justify-center w-full mb-3">
        <img 
          src={image} 
          alt="Service" 
          style={{ width: "149px", height: "149px" }}
        />
      </div>
    ) : (
      <div className="h-10 w-10 rounded-xl bg-papSoft flex items-center justify-center text-lg mb-3">
        <span>{icon}</span>
      </div>
    )}
    <div className="flex flex-col justify-center items-center w-full mb-3 font-semibold">
    <h3 className=" font-semibold text-papNavy mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-center">{body}</p>
    </div>
  </div>
);

export default ServicesSection;


