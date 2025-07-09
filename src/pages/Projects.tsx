import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fast Trajectory Replanning",
    description:
      "Implemented adaptive A* for real-time obstacle avoidance in Python. Used NumPy and matplotlib for simulation visualization.",
    github: "https://github.com/ayushmunjial/fast-trajectory-replanning",
    tech: ["Python", "A*", "NumPy", "matplotlib"],
  },
  {
    title: "Command-Line C Shell",
    description:
      "Created a custom Unix shell in C supporting pipes, redirection, background jobs, and built-in commands.",
    github: "https://github.com/ayushmunjial/custom-c-shell",
    tech: ["C", "Linux", "Shell", "Makefile"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-900 dark:text-white px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github className="w-4 h-4 mr-1" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;