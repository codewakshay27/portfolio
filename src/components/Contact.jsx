import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // EMAIL SEND
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_kckteyu",
        "template_r3yvbbh",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "2F0OPQVyQdiKQSKHQ"
      )
      .then(() => {
        alert("Message Sent Successfully 🚀");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
        setLoading(false);
      });
  };

  // WHATSAPP SEND
  const handleWhatsApp = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields first ⚠️");
      return;
    }

    const message = `New Message from Portfolio 🚀

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const url = `https://wa.me/918262871647?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let's Connect 📡
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project, idea or just want to say hi?  
            Feel free to message me anytime!
          </p>

          <div className="mt-6 space-y-2 text-gray-400">
            <p>📧 aksatpute27@gmail.com</p>
            <p>📱 +91 8262871647</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-5 shadow-xl"
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white focus:border-green-400 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white focus:border-green-400 outline-none"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white focus:border-green-400 outline-none"
          ></textarea>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

  {/* EMAIL BUTTON */}
  <button
    type="submit"
    disabled={loading}
    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:scale-105 hover:shadow-green-500/50 transition duration-300"
  >
    📩 {loading ? "Sending..." : "Send Message"}
  </button>

  {/* WHATSAPP BUTTON */}
  <button
    type="button"
    onClick={handleWhatsApp}
    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg shadow-green-600/30 hover:scale-105 hover:bg-green-500 transition duration-300"
  >
    💬 WhatsApp
  </button>

</div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;