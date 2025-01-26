import React from "react";
import ProjectCard from "./components/ProjectsSection";
import "./App.css"



  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Mini JS Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
