import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/400",
      title: "Cash Calculator",
      description: "An app to calculate cash transactions efficiently.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Cool Scroll Effect",
      description: "A web project demonstrating smooth scrolling effects.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Counter App",
      description: "A simple counter application using React.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Curved Progress Bar",
      description: "A dynamic curved progress bar visualization.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Dictionary App",
      description: "A dictionary app fetching word definitions via API.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Extract Text App",
      description: "Extract and manipulate text with this app.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Landing Page - Product Launch",
      description: "A stylish landing page for product launches.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Loan Calculator App",
      description: "Calculate and analyze loan details effortlessly.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Mindful Breathing Timer App",
      description: "A mindfulness timer to guide breathing exercises.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Paragraph Generating App",
      description: "Generate placeholder text for projects.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Password Generator",
      description: "Generate secure passwords instantly.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Poll System",
      description: "Create and manage polls for user feedback.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Proposal Message",
      description: "Craft and send proposal messages easily.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Random Color Generator",
      description: "Generate random colors for design inspiration.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Simple To-Do List",
      description: "A minimal to-do list app to track tasks.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Stopwatch Timer",
      description: "A stopwatch app for timing activities.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Student Records",
      description: "Manage student records with ease.",
      liveLink: "#",
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Vowel Checker",
      description: "An app to check and count vowels in text.",
      liveLink: "#",
    },
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
