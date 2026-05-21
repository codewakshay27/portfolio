import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20">
      
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          My Skills 🚀
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
           <motion.div
  key={index}
  whileHover={{ scale: 1.1 }}
  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-lg hover:shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-2 transition duration-300"
>
              <div className="text-4xl text-green-400">
                {skill.icon}
              </div>

              <p className="text-white font-semibold">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;