import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          const scrollY = window.scrollY;

          if (scrollY >= top && scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative cursor-pointer ${
      active === id ? "text-white" : "text-gray-400"
    } after:block after:h-[2px] after:bg-green-400 ${
      active === id ? "after:scale-x-100" : "after:scale-x-0"
    } hover:after:scale-x-100 after:transition-transform after:origin-left`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transparent border-b border-white/10">
      <div className="absolute inset-0 -z-10 opacity-20 
bg-[radial-gradient(circle,#ffffff20_1px,transparent_1px)] bg-[size:20px_20px]
bg-[size:40px_40px]">
</div>
<nav className="fixed top-0 left-0 w-full z-50 bg-transparent border-b border-white/10"></nav>
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">

        {/* LOGO */}
  <a href="#home">
  <h1 className="text-xl md:text-2xl font-bold cursor-pointer 
  bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent 
  hover:scale-105 transition">
    Akshay
  </h1>
</a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">

          <li>
            <a href="#home" className={linkClass("home")}>Home</a>
          </li>

          <li>
            <a href="#about" className={linkClass("about")}>About</a>
          </li>

          <li>
            <a href="#projects" className={linkClass("projects")}>Projects</a>
          </li>

          <li>
            <a href="#contact" className={linkClass("contact")}>Contact</a>
          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg px-6 py-4 space-y-4">

          <a href="#home" onClick={() => setMenuOpen(false)} className={linkClass("home")}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass("contact")}>Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;