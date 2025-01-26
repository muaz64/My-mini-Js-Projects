import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ProjectSection />
      <BackToTopButton />
    </div>
  );
};

export default App;
