import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-24 bg-gradient-to-br from-[#0a0f1f] via-[#0c1b2a] to-[#071018]"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gray-400 text-lg mb-2">
            Hi, I'm
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Akshay
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Satpute
            </span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-3 text-green-400 font-medium">
            🚀 Full Stack Developer | React | Java
          </p>

          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            I build modern, fast and user-friendly websites with clean UI and smooth experience.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">

            <a href="#projects">
              <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="px-6 py-3 border border-gray-600 text-white rounded-xl hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200">
                Contact Me
              </button>
            </a>

            {/* RESUME BUTTON */}
            <button
              onClick={() => window.open("/resume", "_blank")}
              className="group relative px-7 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-green-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                📄 Download Resume
              </span>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></div>
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-5">
            <a href="https://github.com/codewakshay27" target="_blank">
              <FaGithub className="text-gray-400 hover:text-white text-xl cursor-pointer transition hover:-translate-y-1 hover:scale-110" />
            </a>

            <a href="https://linkedin.com/in/akshay-satpute45" target="_blank">
              <FaLinkedin className="text-gray-400 hover:text-blue-400 text-xl cursor-pointer transition hover:-translate-y-1 hover:scale-110" />
            </a>

            <a href="https://instagram.com/akshay_satpute45" target="_blank">
              <FaInstagram className="text-gray-400 hover:text-pink-400 text-xl cursor-pointer transition hover:-translate-y-1 hover:scale-110" />
            </a>

            <a href="mailto:aksatpute27@gmail.com">
              <MdEmail className="text-gray-400 hover:text-green-400 text-xl cursor-pointer transition hover:-translate-y-1 hover:scale-110" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 blur-2xl opacity-30 rounded-2xl group-hover:opacity-50 transition"></div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2">
              <img
                src="/profile.png"
                alt="Akshay"
                className="w-64 md:w-80 rounded-xl object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        ↓ Scroll Down
      </div>
    </section>
  );
};

export default Hero;