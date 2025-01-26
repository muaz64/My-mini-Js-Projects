import React from "react";
import ProjectCard from "./components/ProjectsSection";
import "./App.css"

const App = () => {
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
