import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ProjectSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
