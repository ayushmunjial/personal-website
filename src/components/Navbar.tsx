import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
  { path: "/experience", label: "Experience" },
  { path: "/extras", label: "Extras" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-700 font-mono shadow h-16">
      <div className="relative h-full overflow-hidden">
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        {/* Navbar Content */}
        <div className="relative z-10 max-w-8xl mx-auto flex items-center h-full px-4 md:px-8">
          <div className="text-2xl font-bold text-white mr-8">AM</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center w-full justify-end">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-white text-sm font-semibold transition ${
                    pathname === item.path
                      ? "font-bold"
                      : "hover:text-gray-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-6 border-l border-gray-600 mx-6" />

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ayushmunjial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5 text-white hover:text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-munjial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5 text-white hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-white text-sm font-semibold transition ${
                pathname === item.path
                  ? "font-bold"
                  : "hover:text-gray-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 justify-center">
            <a
              href="https://github.com/ayushmunjial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-munjial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 text-white hover:text-gray-400" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;