import React, { useState } from "react";

const PricingSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="pricing" className="w-full mt-[100px] scroll-mt-20">
      <div className="w-full px-4 lg:px-8" style={{ paddingBottom: "50px" }}>
        <h2 className="font-extrabold text-papNavy text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-center text-slate-600 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Select the plan that best fits your embedded systems learning journey
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <PricingCard
            id="card-1"
            title="Embedded Systems Book"
            price="$8.86"
            priceInr="₹800"
            period="one-time"
            description="The Communication Backbone of Automobiles. A practical, industry-focused guide for embedded engineers."
            features={[
              "Fully Handwritten",
              "Automotive embedded communication fundamentals",
              "ECU interaction and vehicle networks",
              "Real-world system thinking",
              "Structured, beginner-friendly learning",
              "Ideal for self-learning and quick reference"
            ]}
            buttonText="👉 Start with Fundamentals"
            buttonLink="https://www.linkedin.com/company/pinandpaper/"
            isPopular={false}
            bestFor="Students, freshers, and engineers entering automotive embedded systems."
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
          <PricingCard
            id="card-2"
            title="Pro Learner"
            price="$49"
            priceInr="₹4,423"
            period="per month"
            description="For serious individual learners."
            features={[
              "All core embedded modules",
              "Beginner → Intermediate learning path",
              "Full handwritten notes (PDF + digital)",
              "Practical examples and use cases",
              "Community access (priority support)",
              "Monthly live doubt-clearing sessions",
              "Mini projects and assignments"
            ]}
            buttonText="👉 Build Strong Foundations"
            buttonLink="https://www.linkedin.com/company/pinandpaper/"
            isPopular={true}
            bestFor="Learners building strong embedded fundamentals through self-study."
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
          <PricingCard
            id="card-3"
            title="Advanced (Mentor-Guided)"
            price="$99"
            priceInr="₹8,217"
            period="per month"
            description="For career-focused embedded engineers."
            features={[
              "Everything in Pro Learner, plus:",
              "Advanced modules (Automotive, RTOS, Protocols)",
              "Mentor-guided learning path",
              "Industry-grade case studies",
              "Capstone projects with documentation",
              "Code reviews and architecture feedback",
              "Weekly live mentor sessions",
              "Interview-focused project portfolio support"
            ]}
            buttonText="👉 Learn with a Mentor"
            buttonLink="https://www.linkedin.com/company/pinandpaper/"
            isPopular={false}
            isComingSoon={true}
            bestFor="Engineers targeting automotive, product, or advanced embedded roles."
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        </div>

        {/* Founder Note */}
        <div className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-8 sm:pl-10 border-l-4 border-papNavy">
            <p className="text-papNavy text-base sm:text-lg md:text-xl leading-relaxed font-light">
              Embedded systems are not learned by shortcuts. They are built through fundamentals, structure, and real system thinking. PinAndPaper exists to bring clarity back to how engineers actually learn. Start where your understanding needs it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ id, title, price, priceInr, period, description, features, buttonText, buttonLink, isPopular, isComingSoon, bestFor, hoveredCard, setHoveredCard }) => {
  const isHovered = hoveredCard === id;
  const isBlurred = hoveredCard !== null && hoveredCard !== id;

  return (
    <div 
      className="rounded-2xl bg-white shadow-sm px-5 py-5 flex flex-col items-start w-full max-w-[350px] relative"
      style={{ 
        border: `2px solid ${isPopular ? "#050E3C" : "#E2E8F0"}`,
        transform: isHovered ? "scale(1.1)" : (isPopular && !isBlurred ? "scale(1.05)" : "scale(1)"),
        transition: "transform 0.3s ease, filter 0.3s ease",
        filter: isBlurred ? "blur(4px)" : "blur(0px)",
        zIndex: isHovered ? 50 : (isPopular ? 10 : 1),
        opacity: isBlurred ? 0.7 : 1
      }}
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#050E3C] text-white px-4 py-1 rounded-full text-xs font-semibold">
        Most Popular
      </div>
    )}
    {isComingSoon && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-400 text-white px-4 py-1 rounded-full text-xs font-semibold">
        Coming Soon
      </div>
    )}
    
    <div className="w-full mb-4">
      <h3 className="font-extrabold text-papNavy text-xl mb-1">{title}</h3>
      <p className="text-slate-500 text-xs mb-3">{description}</p>
      <div className="flex items-baseline gap-2 flex-wrap">
        <div className="flex items-baseline gap-2">
          <span className="font-black text-3xl text-papNavy">{price}</span>
        </div>
        {priceInr && (
          <div className="flex items-baseline gap-1">
            <span className="text-slate-500 text-sm">({priceInr})</span>
          </div>
        )}
      </div>
    </div>

    <ul className="flex-1 space-y-2 mb-4 w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <svg 
            className="w-4 h-4 text-papGreen flex-shrink-0 mt-0.5" 
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
          <span className="text-slate-600 text-xs leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>

    {bestFor && (
      <div className="w-full mb-4">
        <p className="font-semibold text-papNavy text-xs mb-1">Best for:</p>
        <p className="text-slate-600 text-xs leading-relaxed">{bestFor}</p>
      </div>
    )}

    <a
      href={isComingSoon ? "#" : buttonLink}
      target={isComingSoon ? "_self" : (buttonLink.startsWith("mailto:") ? "_self" : "_blank")}
      rel={isComingSoon ? "" : (buttonLink.startsWith("mailto:") ? "" : "noopener noreferrer")}
      className={`w-full text-center px-5 py-2 rounded-full text-xs font-semibold transition-colors ${isComingSoon ? "cursor-not-allowed" : ""}`}
      style={{
        backgroundColor: isComingSoon ? "#E2E8F0" : (isPopular ? "#050E3C" : "#EAF0FF"),
        color: isComingSoon ? "#94A3B8" : (isPopular ? "white" : "#050E3C"),
        border: `1px solid ${isComingSoon ? "#CBD5E1" : (isPopular ? "#050E3C" : "#C5D8FF")}`,
        pointerEvents: isComingSoon ? "none" : "auto",
      }}
      onClick={(e) => {
        if (isComingSoon) {
          e.preventDefault();
        }
      }}
      onMouseEnter={(e) => {
        if (!isComingSoon) {
          if (isPopular) {
            e.currentTarget.style.backgroundColor = "#0C1A4F";
          } else {
            e.currentTarget.style.backgroundColor = "#C5D8FF";
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!isComingSoon) {
          if (isPopular) {
            e.currentTarget.style.backgroundColor = "#050E3C";
          } else {
            e.currentTarget.style.backgroundColor = "#EAF0FF";
          }
        }
      }}
    >
      {buttonText}
    </a>
  </div>
  );
};

export default PricingSection;

