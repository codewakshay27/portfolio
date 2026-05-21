import { motion } from "framer-motion";
import { useState } from "react";


const projects = [
  {
    title: "Library Management System",
    desc: "System to manage books, users, and borrowing records.",
    img: "https://editor.analyticsvidhya.com/uploads/82860library-management-system.jpg",
    link: "https://library-management-system-tz33.onrender.com/",
    github: "https://github.com/codewakshay27", 
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Fire Crackers",
    desc: "Buy and explore a wide range of firecrackers online",
    img: "https://cdn.pixabay.com/photo/2014/12/26/01/16/flame-580185_1280.jpg",
    link: "https://saiashray-firecrackers.vercel.app/",
    github: "https://github.com/codewakshay27",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Stayora – Find Your Perfect Stay",
    desc: "Online platform for exploring and listing rental stays with ease",
    img: "https://tse4.mm.bing.net/th/id/OIP.SBmitxrSPirPaQMePDy7ogHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://github.com/codewakshay27/MajorProject.git",
    github: "https://github.com/codewakshay27/MajorProject",
    tech: ["React", "Express", "MongoDB"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* IMAGE */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  {project.desc}
                </p>

                {/* OPEN MODAL */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 px-4 py-2 bg-green-500 text-black rounded-lg"
                >
                  View Details
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
    onClick={() => setSelectedProject(null)}
  >
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative"
    >

      {/* CLOSE */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-3 right-3 text-white text-xl"
      >
        ✕
      </button>

      {/* IMAGE */}
      <img
        src={selectedProject.img}
        alt=""
        className="rounded-xl mb-4"
      />

      {/* TITLE */}
      <h2 className="text-white text-2xl font-bold">
        {selectedProject.title}
      </h2>

      {/* DESC */}
      <p className="text-gray-400 mt-2">
        {selectedProject.desc}
      </p>

      {/* TECH STACK */}
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedProject.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex gap-4 flex-wrap">

        <a
          href={selectedProject.link}
          target="_blank"
          className="px-4 py-2 bg-green-500 text-black rounded-lg"
        >
          Live Project 🚀
        </a>

        <a
          href={selectedProject.github}
          target="_blank"
          className="px-4 py-2 border border-gray-600 text-white rounded-lg"
        >
          GitHub 💻
        </a>

      </div>

    </motion.div>
  </div>
)}

      </div>
    </section>
  );
};

export default Projects;