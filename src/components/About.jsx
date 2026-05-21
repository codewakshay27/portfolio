import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I'm a passionate developer who loves building modern and responsive websites. 
            I focus on creating clean UI, smooth user experience and performance optimized applications.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Currently, I am improving my skills in full stack development and building real-world projects.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          
          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-green-400">10+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-green-400">1+</h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-green-400">5+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-green-400">100%</h3>
            <p className="text-gray-400 mt-2">Dedication</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;