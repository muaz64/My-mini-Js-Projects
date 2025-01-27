import React from "react";


const ProjectsSection = () => {
  const projects = [
    {
      image: "/images/cashcalculator.jpeg",
      title: "Cash Calculator",
      description: "An app to calculate cash transactions efficiently.",
      liveLink: "https://muaz64.github.io/Cash-Counter/",
    },
    // {
    //   image: "https://via.placeholder.com/400",
    //   title: "Cool Scroll Effect",
    //   description: "A web project demonstrating smooth scrolling effects.",
    //   liveLink: "#",
    // },
    {
      image: "/images/Counter App.jpeg",
      title: "Counter App",
      description: "A simple counter application using React.",
      liveLink: "https://muaz64.github.io/Counter-app/",
    },
    {
      image: "/images/Curved Progress Bar.jpeg",
      title: "Curved Progress Bar",
      description: "A dynamic curved progress bar visualization.",
      liveLink: "https://muaz64.github.io/Curved-Progress-Bar/",
    },
    {
      image: "/images/Dictionary app.jpeg",
      title: "Dictionary App",
      description: "A dictionary app fetching word definitions via API.",
      liveLink: "https://muaz64.github.io/Dictionary-app/",
    },
    {
      image: "/images/Extract Text app.jpeg",
      title: "Extract Text App",
      description: "Extract and manipulate text with this app.",
      liveLink: "https://muaz64.github.io/Extract-Text-app/",
    },
    // {
    //   image: "https://via.placeholder.com/400",
    //   title: "Landing Page - Product Launch",
    //   description: "A stylish landing page for product launches.",
    //   liveLink: "#",
    // },
    {
      image: "/images/Loan Calculator app.jpeg",
      title: "Loan Calculator App",
      description: "Calculate and analyze loan details effortlessly.",
      liveLink: "https://muaz64.github.io/Loan-Calculator-app/",
    },
    {
      image: "/images/Mindful Breathing Timer app.jpeg",
      title: "Mindful Breathing Timer App",
      description: "A mindfulness timer to guide breathing exercises.",
      liveLink: "#",
    },
    // {
    //   image: "https://via.placeholder.com/400",
    //   title: "Paragraph Generating App",
    //   description: "Generate placeholder text for projects.",
    //   liveLink: "#",
    // },
    {
      image: "/images/Password Generator.jpeg",
      title: "Password Generator",
      description: "Generate secure passwords instantly.",
      liveLink: "https://muaz64.github.io/Password-Generator/",
    },
    {
      image: "/images/Pollsystem.png",
      title: "Poll System",
      description: "Create and manage polls for user feedback.",
      liveLink: "https://muaz64.github.io/Pollsystem/",
    },
    // {
    //   image: "",
    //   title: "Proposal Message",
    //   description: "Craft and send proposal messages easily.",
    //   liveLink: "#",
    // },
    {
      image: "/images/Random Color Generator.jpeg",
      title: "Random Color Generator",
      description: "Generate random colors for design inspiration.",
      liveLink: "https://muaz64.github.io/Random-Color-Generator/",
    },
    {
      image: "/images/dark-mode.jpeg",
      title: "Simple To-Do List",
      description: "A minimal to-do list app to track tasks.",
      liveLink: "https://muaz64.github.io/Simple-To-Do-List/",
    },
    {
      image: "/images/StopwatchTimer.jpeg",
      title: "Stopwatch Timer",
      description: "A stopwatch app for timing activities.",
      liveLink: "https://muaz64.github.io/StopwatchTimer/",
    },
    {
      image: "/images/Student Records.jpeg",
      title: "Student Records",
      description: "Manage student records with ease.",
      liveLink: "https://muaz64.github.io/Student-Records/",
    },
    {
      image: "/images/Vowelchecker.jpeg",
      title: "Vowel Checker",
      description: "An app to check and count vowels in text.",
      liveLink: "https://muaz64.github.io/Vowelchecker/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-black mb-4">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-semibold text-blue-900 hover:text-cyan-300"
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
