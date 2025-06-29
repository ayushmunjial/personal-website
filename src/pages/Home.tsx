import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiVite,
  SiFramer,
  SiOpenjdk,
  SiKotlin,
  SiPython,
  SiC,
  SiOcaml,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJetpackcompose,
  SiAndroidstudio,
  SiGit,
  SiEclipseide,
  SiIntellijidea,
  SiPycharm,
  SiGradle,
  SiAmazon,
  SiGooglecloud,
  SiLinux,
  SiMacos,
} from "react-icons/si";

const skillsLayout = [
  [
    { Icon: SiPython, color: "#3776AB" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiOpenjdk, color: "#007396" },
    { Icon: SiKotlin, color: "#0095D5" },
    { Icon: SiC, color: "#00589C" },
    { Icon: SiOcaml, color: "#EC6813" },
    { Icon: SiMysql, color: "#4479A1" },
    {}, {}, {}, {}
  ],
  [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss3, color: "#1572B6" },
    { Icon: SiFramer, color: "#0055FF" },
    { Icon: SiVite, color: "#646CFF" },
    { Icon: SiJetpackcompose, color: "#4285F4" },
    { Icon: SiAmazon, color: "#FF9900" },
    {}, {}, {}, {}
  ],
  [
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiExpress, color: "#000000" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiDocker, color: "#2496ED" },
    { Icon: SiGithub, color: "#181717" },
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiAndroidstudio, color: "#3DDC84" },
    { Icon: SiGooglecloud, color: "#4285F4" },
    {}, {}, {}, {}
  ],
  [
    { Icon: SiIntellijidea, color: "#000000" },
    { Icon: SiPycharm, color: "#000000" },
    { Icon: SiEclipseide, color: "#2C2255" },
    { Icon: SiGradle, color: "#02303A" },
    { Icon: SiLinux, color: "#FCC624" },
    { Icon: SiMacos, color: "#000000" },
    {}, {}, {}, {}, {}, {}
  ],
];

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-200 rounded-2xl flex flex-col items-start justify-center px-6 py-12 gap-12"
    >
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
            I'm Ayush Munjial — a Computer Science and Mathematics graduate from Rutgers University, where I graduated Summa Cum Laude and was inducted into Phi Beta Kappa. My passion lies in building software that’s not just functional, but thoughtful — designed with clarity, collaboration, and long-term impact in mind. Whether I’m architecting a media player app from scratch, tutoring peers in data structures, or writing custom neural networks for face and digit classification, I strive to write code that’s clean, maintainable, and a pleasure to read. For me, technical depth matters — but so does communication, teamwork, and knowing when to keep things simple.
            <br /><br />
            I believe great software comes from sharp thinking and shared ownership. I thrive in environments where ideas are challenged with energy and executed with care. I'm not the loudest in the room, but I lead by listening, contribute by organizing, and grow by doing. My work ethic is rooted in being resourceful — learning fast, referencing well, and staying organized to solve problems that matter. At the end of the day, I care less about the buzzwords and more about how the work we do makes life better — for users, for teammates, and for the communities we build for.
            <br /><br />
            If you value thoughtful engineering, clear communication, and building things that make a real difference, I’d love to connect. Whether it’s to collaborate, exchange ideas, or share debugging stories, feel free to reach out!
          </p>
        </div>
      </div>

      {/* Keyboard-style Skills Grid */}
      <div className="w-full bg-gray-100 rounded-2xl p-6 shadow-inner">
        {skillsLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6 mb-6">
            {row.map((item, i) => (
              <motion.div
                key={i}
                className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                whileHover={item?.Icon ? { scale: 1.15 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item?.Icon ? (
                  <item.Icon className="text-3xl" style={{ color: item.color }} />
                ) : null}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;