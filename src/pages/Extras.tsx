import PageWrapper from "../components/PageWrapper"; import { motion } from "framer-motion";
import { useState } from "react";

const terminalData: Record<string, string> = {
  whoami: "Ayush Munjial, Rutgers CS + Math, class of 2025",
  aboutme: "Location: Santa Clara, CA 95051\nGPA: 3.853 / 4.0 — Dean’s List",
  contact: "ayush.munjial@rutgers.edu, Tel: +1(908)449-9850",
  funfact: "I speak 3 languages: Hindi, English, and Spanish!",
  interests: "Soccer, F1, cricket, gym, FIFA, photography",
  motto: "Make things that matter and make them beautiful",
  currently: "Building a portfolio and bulking at the gym while job hunting",
  personality: "Calm, curious, team-first, and detail-obsessed",
  "dream-job": "One that blends backend tech, clean UI, and real-world impact",
  inspiration: "Developers who ship thoughtful products and don’t chase hype",
  available: "Always open to learn, collaborate, and build something cool",
  workflow: "I live by the Pomodoro Technique + Notion Calendar",
  frontend: "React, TypeScript, Tailwind CSS, Framer Motion, Vite, HTML, CSS",
  backend: "Node.js, Express.js, REST APIs, MySQL, MongoDB, SQL",
  fullstack: "JavaScript, Java (JSP + JDBC), Docker, GitHub Actions, AWS, GCP",
  android:
    "Kotlin, Jetpack Compose, AIDL, Android SDK, Android Studio\n• LiveData, ViewModel, Coroutines, Hilt/Dagger\n• Retrofit/Ktor, Navigation Component, Material 3, WorkManager",
  languages: "Java, Kotlin, Python, C, OCaml, JavaScript, TypeScript, SQL",
  tools: "Git, GitHub, Docker, IntelliJ, PyCharm, Eclipse, Gradle, Tomcat",
  platforms: "Android Studio, AWS, GCP, Linux, macOS",
};

const Extras = () => {
  const [command, setCommand] = useState(""); const [history, setHistory] = useState<string[]>(["> help", "__custom_help__"]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmed = command.trim().toLowerCase();
      if (trimmed === "clear") {
        setHistory([]);
      } else if (trimmed === "help") {
        setHistory((prev) => [...prev, `> help`, "__custom_help__"]);
      } else {
        const response = terminalData[trimmed] || `Command not found: ${trimmed}`;
        setHistory((prev) => [...prev, `> ${trimmed}`, response]);
      }
      setCommand("");
    }
  };

  return (
    <PageWrapper>
      <section
        id="extras"
        className="relative w-full bg-gray-200 rounded-2xl px-6 md:px-12 pt-10 pb-16 overflow-hidden"
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          {/* Left Content - 60% */}
          <div className="w-full md:w-3/5 space-y-10">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 font-mono"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Extracurriculars
            </motion.h2>

            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold font-mono text-gray-900 mb-1">
                Rutgers Mobile App Development Club
              </h3>
              <p className="text-sm text-gray-600 italic mb-3">
                New Brunswick, NJ, United States | Sep 2023 – Dec 2023
              </p>
              <div
                className="whitespace-pre-line text-gray-800 text-[15px] text-justify"
                style={{ fontFamily: `"Times New Roman", serif` }}
              >
                <p>
                  As part of a selective student cohort, I engineered a dynamic Android-based photo album application using Kotlin and Jetpack Compose. The app incorporated advanced serialization techniques to achieve 99% data persistence and featured a custom tag-based image retrieval system that boosted search efficiency by 70%.
                </p>
                <p className="mt-4">
                  I led the UI/UX design, implementing responsive grid layouts and Material 3 styling while managing version control and agile collaboration through Git. This experience deepened my understanding of Android architecture and significantly enhanced user interaction across devices.
                </p>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 font-mono"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Languages
            </motion.h2>

            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p
                className="whitespace-pre-line text-gray-800 text-[15px] text-justify"
                style={{ fontFamily: `"Times New Roman", serif` }}
              >
                I am fluent in English and Hindi, and conversational in Spanish. My multilingual skills help me connect with diverse peers, adapt to global environments, and communicate effectively across technical and collaborative contexts.
              </p>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 font-mono"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Interests
            </motion.h2>

            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="whitespace-pre-line text-gray-800 text-[15px] text-justify"
                style={{ fontFamily: `"Times New Roman", serif` }}
              >
                I’m passionate about sports like soccer, cricket, and Formula 1. I also enjoy working out, playing FIFA, and exploring photography. These interests help me stay creative, focused, and balanced outside of coding and academics.
              </p>
            </motion.div>
          </div>

          {/* Right Terminal - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
            className="w-full md:w-2/5 h-full bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-300 p-6 flex flex-col font-mono relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-70 pointer-events-none rounded-2xl z-0" />

            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2 text-gray-900 truncate max-w-full">
                Terminal — hi, get to know me
              </h2>
              <hr className="border-t border-gray-300 mb-4" />
            </div>

            <div className="flex-1 overflow-y-auto mb-4 space-y-2 text-[14px] relative z-10">
              {history.map((line, i) => (
                <div key={i}>
                  {line === "__custom_help__" ? (
                    <div className="text-sm md:text-base flex flex-col md:flex-row gap-8 whitespace-pre-wrap text-blue-900">
                      <div>
                        <div className="font-semibold">→ General:</div>
                        <div className="whitespace-pre">
                          whoami{'\n '}
                          personality{'\n '}
                          aboutme{'\n '}
                          contact{'\n '}
                          funfact{'\n '}
                          interests{'\n '}
                          motto{'\n '}
                          workflow{'\n '}
                          currently{'\n '}
                          dream-job{'\n '}
                          available{'\n '}
                          inspiration
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">→ Technical:</div>
                        <div className="whitespace-pre">
                          frontend{'\n '}
                          backend{'\n '}
                          fullstack{'\n '}
                          android{'\n '}
                          languages{'\n '}
                          tools{'\n '}
                          platforms
                        </div>
                      </div>
                    </div>
                  ) : (
                    <motion.pre
                      className="whitespace-pre-wrap text-blue-900 truncate max-w-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.02 }}
                    >
                      {line}
                    </motion.pre>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center border-t border-gray-300 pt-2 relative z-10">
              <span className="mr-2 text-green-700">{">"}</span>
              <motion.input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none text-gray-700 placeholder:text-gray-400 truncate w-full max-w-full"
                placeholder="Try: whoami, help, clear"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <p className="text-left text-gray-600 text-sm"> © 2025 Ayush Munjial </p>
    </PageWrapper>
  );
};

export default Extras;