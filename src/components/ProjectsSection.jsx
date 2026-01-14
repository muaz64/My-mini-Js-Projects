
const ProjectsSection = () => {
  const projects = [
    {
      image: "/images/damuazcode.jpeg", 
      title: "DaMuazCode - Online Code Editor",
      description: "A lightweight, browser-based playground for web developers. Write HTML, CSS, and JavaScript in a tabbed environment and see results instantly in a live preview pane, complete with a built-in terminal console.",
      liveLink: "https://muaz64.github.io/DaMuazCode--Online-Code-Editor/",
    },
    {
      image: "/images/mcs.jpeg", 
      title: "MCS: My Code Separator",
      description: "A sleek, web-based utility designed for developers to quickly extract and decouple internal CSS and JavaScript from a single HTML file into separate, clean files.",
      liveLink: "https://muaz64.github.io/MCS--Online-code-separator/",
    },
    {
      image: "/images/cashcalculator.jpeg",
      title: "Cash Calculator",
      description: "A simple Cash Calculator built using HTML, CSS, and JavaScript. This tool allows users to input the number of currency notes, calculate the total cash, and display the total in both numerical and text format.",
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
      description: "A simple counter application built using HTML, CSS, and JavaScript. It allows users to increment and decrement a number using buttons.",
      liveLink: "https://muaz64.github.io/Counter-app/",
    },
    {
      image: "/images/Curved Progress Bar.jpeg",
      title: "Curved Progress Bar",
      description: "A dynamic curved progress bar built using HTML, CSS, and JavaScript. This component visually represents progress in a unique curved format with a customizable gradient design.",
      liveLink: "https://muaz64.github.io/Curved-Progress-Bar/",
    },
    {
      image: "/images/Dictionary app.jpeg",
      title: "Dictionary App",
      description: "A simple English Dictionary Web Application built using HTML, CSS, and JavaScript. This app fetches word definitions using the Free Dictionary API.",
      liveLink: "https://muaz64.github.io/Dictionary-app/",
    },
    {
      image: "/images/Extract Text app.jpeg",
      title: "Extract Text App",
      description: "A web-based Text Extraction Application that extracts text content from an uploaded image. Built with HTML, CSS, and JavaScript, this app uses OCR (Optical Character Recognition) to fetch text dynamically.",
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
      description: "A responsive Loan Calculator web application that computes monthly loan payments, total interest, and generates an amortization schedule. Built with HTML, CSS, and JavaScript.",
      liveLink: "https://muaz64.github.io/Loan-Calculator-app/",
    },
    {
      image: "/images/Mindful Breathing Timer app.jpeg",
      title: "Mindful Breathing Timer App",
      description: "A simple and responsive breathing timer application designed to guide users through mindful breathing exercises. Built with HTML, CSS, and JavaScript, it helps reduce stress and promote relaxation.",
      liveLink: "https://muaz64.github.io/Mindful-Breathing-Timer-app/",
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
      description: "A simple and visually appealing password generator built using HTML, CSS, and JavaScript. This tool allows users to generate strong and secure passwords based on customizable criteria.",
      liveLink: "https://muaz64.github.io/Password-Generator/",
    },
    {
      image: "/images/Pollsystem.png",
      title: "Poll System",
      description: "A dynamic poll system built using HTML, CSS, and JavaScript. This application allows users to vote on a specific topic and view real-time poll results.",
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
      description: "A Random Color Generator application built using HTML, CSS, and JavaScript. This tool allows users to generate random colors and view their corresponding color codes in multiple formats.",
      liveLink: "https://muaz64.github.io/Random-Color-Generator/",
    },
    {
      image: "/images/dark-mode.jpeg",
      title: "Simple To-Do List",
      description: "A responsive and user-friendly To-Do List application built with HTML, CSS, and JavaScript (jQuery). It allows users to add tasks, mark them as completed, and filter tasks based on their status (All, Active, Completed). The application also includes a Dark Mode toggle for better usability.",
      liveLink: "https://muaz64.github.io/Simple-To-Do-List/",
    },
    {
      image: "/images/StopwatchTimer.jpeg",
      title: "Stopwatch Timer",
      description: "A sleek and functional Stopwatch Timer application built with HTML, CSS (Bootstrap), and JavaScript. This application allows users to track time, pause, reset, and record lap times efficiently.",
      liveLink: "https://muaz64.github.io/StopwatchTimer/",
    },
    {
      image: "/images/Student Records.jpeg",
      title: "Student Records",
      description: "A dynamic web application for managing student records, created using HTML, CSS, and JavaScript.",
      liveLink: "https://muaz64.github.io/Student-Records/",
    },
    {
      image: "/images/Vowelchecker.jpeg",
      title: "Vowel Checker",
      description: "A sleek, neon-themed web application designed to count the number of vowels in a given text. Built with HTML, CSS, and JavaScript, this tool demonstrates modern web development techniques and thoughtful UI design.",
      liveLink: "https://muaz64.github.io/Vowelchecker/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-xl transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover rounded-t-lg mb-5"
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
