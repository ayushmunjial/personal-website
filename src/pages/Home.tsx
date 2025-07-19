import PageWrapper from "../components/PageWrapper"; import { motion } from "framer-motion";

import {
  SiPython, SiJavascript, SiTypescript, SiOpenjdk, SiKotlin, SiC, SiOcaml, SiMysql,
  SiReact, SiTailwindcss, SiHtml5, SiCss3, SiFramer, SiVite, SiJetpackcompose, SiAmazon,
  SiNodedotjs, SiExpress, SiMongodb, SiDocker, SiGithub, SiGit, SiAndroidstudio, 
  SiGooglecloud,  SiIntellijidea, SiPycharm,  SiEclipseide, SiGradle,  SiLinux, SiMacos,
} from "react-icons/si";

const skillsLayout = [
  [
    {}, {}, {},
    { Icon: SiPython, color: "#3776AB", label: "Python" },
    { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
    { Icon: SiOpenjdk, color: "#007396",  label: "Java" },
    { Icon: SiKotlin, color: "#0095D5", label: "Kotlin" },
    { Icon: SiC, color: "#00589C", label: "C" },
    { Icon: SiOcaml, color: "#EC6813", label: "OCaml" },
    { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
    {}, {}
  ],
  [
    {}, {},
    { Icon: SiReact, color: "#61DAFB", label: "React" },
    { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
    { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
    { Icon: SiCss3, color: "#1572B6",  label: "CSS3"  },
    { Icon: SiFramer, color: "#0055FF", label: "Framer Motion" },
    { Icon: SiVite, color: "#646CFF",  label: "Vite" },
    { Icon: SiJetpackcompose, color: "#4285F4", label: "Jetpack Compose" },
    { Icon: SiAmazon, color: "#FF9900", label: "AWS" },
    {}, {}
  ],
  [
    {}, {},
    { Icon: SiNodedotjs, color: "#339933",  label: "Node.js" },
    { Icon: SiExpress, color: "#000000", label: "Express.js" },
    { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    { Icon: SiDocker, color: "#2496ED", label: "Docker" },
    { Icon: SiGithub, color: "#181717", label: "GitHub" },
    { Icon: SiGit, color: "#F05032", label: "Git" },
    { Icon: SiAndroidstudio, color: "#3DDC84", label: "Android Studio" },
    { Icon: SiGooglecloud, color: "#4285F4", label: "Google Cloud" },
    {}, {}, {}
  ],
  [
    {}, {}, {},
    { Icon: SiIntellijidea, color: "#000000", label: "IntelliJ IDEA" },
    { Icon: SiPycharm, color: "#000000", label: "PyCharm" },
    { Icon: SiEclipseide, color: "#2C2255", label: "Eclipse" },
    { Icon: SiGradle, color: "#02303A", label: "Gradle" },
    { Icon: SiLinux, color: "#FCC624", label: "Linux" },
    { Icon: SiMacos, color: "#000000", label: "macOS" },
    {}, {}, {}
  ],
];

const Home = () => {
  return (
    <PageWrapper>
      <section
        id="home"
        className="relative min-h-screen bg-gray-200 rounded-2xl flex flex-col items-start justify-center px-6 py-12 gap-12 overflow-hidden"
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 w-full">
          {/* Profile & Bio */}
          <div className="flex flex-col md:flex-row items-start gap-8 w-full">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="/profile.jpeg"
                alt="Ayush Munjial"
                className="max-h-[70vh] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-3/4 text-left">
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Ayush Munjial
              </motion.h1>
              <p className="text-lg md:text-xl text-gray-700 font-serif text-justify">
                Hi, I’m Ayush Munjial — a Computer Science and Mathematics graduate from <span className="text-blue-700">Rutgers University–New Brunswick</span>, where I graduated <span className="text-blue-700">Summa Cum Laude</span> and was inducted into <span className="text-blue-700">Phi Beta Kappa</span>. I’m passionate about building software that isn’t just functional, but thoughtful — systems designed with clarity, collaboration, and long-term impact in mind. Whether I’m architecting a media player app from scratch, tutoring peers in data structures, or building neural networks for face and digit classification, I focus on writing clean, maintainable code that’s a pleasure to work with.
                <br /><br />
                I believe great software stems from sharp thinking and shared ownership. I thrive in environments where ideas are challenged respectfully and executed with care. I’m not the loudest in the room, but I lead by listening, contribute through structure, and grow by doing. My strengths lie in being resourceful — learning fast, referencing well, and staying organized to solve problems that matter. I care less about chasing buzzwords and more about building tools that make everyday life a little better — for users, for teammates, and for the communities we serve.
                <br /><br />
                For any inquiries or opportunities, feel free to reach out to me at <span className="text-blue-700">ayush.munjial@rutgers.edu</span>. I'm actively seeking opportunities where I can contribute to impactful products in roles such as <span className="text-blue-700">Software Engineer</span>, <span className="text-blue-700">Android Developer</span>, <span className="text-blue-700">Back End Developer</span>, <span className="text-blue-700">Mobile Application Developer</span>, or <span className="text-blue-700">Full Stack Developer</span>. <span className="text-blue-700">Let’s build something meaningful together.</span>
              </p>
            </div>
          </div>

          {/* Keyboard-style Skills Grid */}
          <div className="w-full bg-gray-100 rounded-2xl p-4 mt-12 shadow-inner">
            {skillsLayout.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-4 mb-6 px-2 overflow-x-auto sm:justify-center sm:overflow-visible"
              >
                {row.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative group w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg cursor-pointer shrink-0"
                    whileHover={item?.Icon ? { scale: 1.15 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item?.Icon ? (
                      <>
                        <item.Icon className="text-2xl sm:text-3xl" style={{ color: item.color }} />
                        <div className="absolute -top-10 px-3 py-1 text-xs text-black bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono">
                          {item.label}
                        </div>
                      </>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <p className="text-left text-gray-600 text-sm"> © 2025 Ayush Munjial </p>
    </PageWrapper>
  );
};

export default Home;