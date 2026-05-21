import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 text-gray-400">
      
      <div className="flex justify-center gap-6 mb-4">

        <a href="https://github.com/codewakshay27" target="_blank">
          <FaGithub className="text-lg hover:text-white transition" />
        </a>

        <a href="https://linkedin.com/in/akshay-satpute45" target="_blank">
          <FaLinkedin className="text-lg hover:text-blue-400 transition" />
        </a>

        <a href="https://instagram.com/akshay_satpute45" target="_blank">
          <FaInstagram className="text-lg hover:text-pink-400 transition" />
        </a>

        <a href="mailto:aksatpute27@gmail.com">
          <MdEmail className="text-lg hover:text-green-400 transition" />
        </a>

      </div>

      <p>© 2026 Akshay Satpute. All rights reserved.</p>
    </footer>
  );
};

export default Footer;