import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ModulesSection from "./components/ModulesSection.jsx";
import NotNotesBanner from "./components/NotNotesBanner.jsx";
import CommunitySection from "./components/CommunitySection.jsx";
import StorySection from "./components/StorySection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import PageFooter from "./components/PageFooter.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#dfe9ff] via-[#dde8ff] to-[#f6f3ff]" />

      {/* Navbar with its own container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0 pb-16 w-full relative z-10">
        <Navbar />
      </div>

      {/* Sections - each controls its own width/padding */}
      <Hero />
      <ModulesSection />
      <NotNotesBanner />
      <CommunitySection />
      <StorySection />
      <ServicesSection />

      <PageFooter />
    </div>
  );
};

export default App;
