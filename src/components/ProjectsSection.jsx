import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cash Calculator",
      description: "Calculate cash easily.",
      image: "https://via.placeholder.com/150",
      liveLink: "https://example.com/cash-calculator"
    },
    {
      title: "Cool Scroll Effect",
      description: "Implement smooth scroll effects.",
      image: "https://via.placeholder.com/150",
      liveLink: "https://example.com/cool-scroll-effect"
    },
    {
      title: "Counter App",
      description: "A simple counter built with React.",
      image: "https://via.placeholder.com/150",
      liveLink: "https://example.com/counter-app"
    }
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
