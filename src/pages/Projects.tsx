import PageWrapper from "../components/PageWrapper"; import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Fast Trajectory Replanning",
    github: null,
    tech: ["Python", "Pygame", "NumPy", "Matplotlib"],
    description:
      "Developed a Python-based adaptive A* pathfinding system for real-time robot navigation. Incorporated dynamic obstacle handling and map updates. Visualized planning using matplotlib and evaluated overall performance using timing analysis and path efficiency.",
  },
  {
    title: "Command-Line C Shell",
    github: "https://github.com/ayushmunjial/command-line-c-shell",
    tech: ["C", "POSIX", "Linux", "GCC", "Makefile"],
    description:
      "Implemented a custom shell in C with job control, pipes, redirection, background/foreground execution, and built-in commands like cd, exit, and echo. Parsed commands manually and managed signals using the Linux process API.",
  },
  {
    title: "Online Booking System",
    github: "https://github.com/ayushmunjial/online-booking-system",
    tech: [
      "Java", "JSP", "JDBC", "MySQL", "Tomcat", "HTML/CSS", "JavaScript", "Eclipse",
    ],
    description:
      "Designed an online railway booking system using JSP and MySQL. Enabled real-time scheduling, ticketing, and cancellations across 100+ routes. Integrated fare calculation, station search, and deployment on a Tomcat server.",
  },
  {
    title: "Classic Chess Game",
    github: "https://github.com/ayushmunjial/classic-chess-game",
    tech: ["Java", "Visual Studio Code", "OOP"],
    description:
      "Built a multiplayer terminal-based chess game in Java with complete rule support including castling and en passant. Applied object-oriented design to model board state and piece logic, ensuring accurate move validation and responsive gameplay.",
  },
  {
    title: "Android Photo Album App",
    github: "https://github.com/ayushmunjial/android-photos-app",
    tech: ["Java", "Android Studio", "XML", "Android SDK"],
    description:
      "Built a modern Android photo album app using Kotlin and Jetpack Compose. Enabled users to browse, organize, and preview image collections with smooth UI transitions, local data persistence, and intuitive navigation gestures.",
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <section
        id="projects"
        className="relative w-full bg-gray-200 rounded-2xl px-6 md:px-12 pt-10 pb-16 overflow-hidden"
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        {/* Section Title */}
        <motion.h2
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-gray-900 font-mono mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
              {/* Fake window bar */}
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <h3 className="text-2xl font-mono font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>

              <p
                className="text-[15px] text-gray-800 mb-4 text-justify"
                style={{ fontFamily: `"Times New Roman", Times, serif` }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full shadow-sm hover:bg-blue-200 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
