import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Primary School",
    desc: "1st to 6th - Zilha Parishad Shala, Kolapa Ta. Jintur Dist. Parbhani",
  },
  {
    title: "Secondary School",
    desc: "6th to 10th - Sant Namdev Vidyalaya, Ambarwadi Ta. Jintur Dist. Parbhani",
  },
  {
    title: "Higher Secondary",
    desc: "11th & 12th - Shri Shivaji Jr College, Lonar Ta. Lonar Dist. Buldhana",
  },
  {
    title: "Graduation",
    desc: "Sant Gadge Baba Amravati University",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          My Journey 🎓
        </motion.h2>

        <div className="relative mt-12 border-l border-white/20">

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-6"
            >

              {/* DOT */}
              <span className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border border-white/20"></span>

              {/* CARD */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl shadow-lg hover:shadow-green-500/30 transition">

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;