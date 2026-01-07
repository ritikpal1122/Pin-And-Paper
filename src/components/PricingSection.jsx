import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full mt-[100px] scroll-mt-20">
      <div className="w-full px-4 lg:px-8" style={{ paddingBottom: "50px" }}>
        <h2 className="font-extrabold text-papNavy text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-center text-slate-600 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Select the plan that best fits your embedded systems learning journey
        </p>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          <PricingCard
            title="Free"
            price="$0"
            period="Forever"
            description="Perfect for getting started"
            features={[
              "Access to basic modules",
              "Community forum access",
              "Sample handwritten notes",
              "Weekly learning tips"
            ]}
            buttonText="Get Started"
            buttonLink="https://www.linkedin.com/company/pinandpaper/"
            isPopular={false}
          />
          <PricingCard
            title="Pro"
            price="$29"
            period="per month"
            description="For serious learners"
            features={[
              "All premium modules",
              "Full handwritten notes library",
              "Priority community support",
              "Hands-on project access",
              "Monthly live sessions"
            ]}
            buttonText="Start Learning"
            buttonLink="https://www.linkedin.com/company/pinandpaper/"
            isPopular={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            period="Contact us"
            description="For teams and institutions"
            features={[
              "Everything in Pro",
              "Custom curriculum design",
              "Dedicated support",
              "Team analytics dashboard",
              "On-demand training sessions"
            ]}
            buttonText="Contact Us"
            buttonLink="mailto:info.pinandpaper.team@gmail.com"
            isPopular={false}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, period, description, features, buttonText, buttonLink, isPopular }) => (
  <div 
    className="rounded-2xl bg-white shadow-sm px-6 py-8 flex flex-col items-start w-full max-w-[350px] relative"
    style={{ 
      minHeight: "450px", 
      border: `2px solid ${isPopular ? "#050E3C" : "#E2E8F0"}`,
      transform: isPopular ? "scale(1.05)" : "scale(1)",
      transition: "transform 0.3s ease"
    }}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#050E3C] text-white px-4 py-1 rounded-full text-xs font-semibold">
        Most Popular
      </div>
    )}
    
    <div className="w-full mb-6">
      <h3 className="font-extrabold text-papNavy text-2xl mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-4">{description}</p>
      <div className="flex items-baseline gap-2">
        <span className="font-black text-4xl text-papNavy">{price}</span>
        {period !== "Contact us" && (
          <span className="text-slate-500 text-sm">/{period}</span>
        )}
        {period === "Contact us" && (
          <span className="text-slate-500 text-sm">{period}</span>
        )}
      </div>
    </div>

    <ul className="flex-1 space-y-3 mb-6 w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <svg 
            className="w-5 h-5 text-papGreen flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
          <span className="text-slate-600 text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href={buttonLink}
      target={buttonLink.startsWith("mailto:") ? "_self" : "_blank"}
      rel={buttonLink.startsWith("mailto:") ? "" : "noopener noreferrer"}
      className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold transition-colors"
      style={{
        backgroundColor: isPopular ? "#050E3C" : "#EAF0FF",
        color: isPopular ? "white" : "#050E3C",
        border: `1px solid ${isPopular ? "#050E3C" : "#C5D8FF"}`,
      }}
      onMouseEnter={(e) => {
        if (isPopular) {
          e.currentTarget.style.backgroundColor = "#0C1A4F";
        } else {
          e.currentTarget.style.backgroundColor = "#C5D8FF";
        }
      }}
      onMouseLeave={(e) => {
        if (isPopular) {
          e.currentTarget.style.backgroundColor = "#050E3C";
        } else {
          e.currentTarget.style.backgroundColor = "#EAF0FF";
        }
      }}
    >
      {buttonText}
    </a>
  </div>
);

export default PricingSection;

