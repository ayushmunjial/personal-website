import PageWrapper from "../components/PageWrapper"; import { motion } from "framer-motion";

const experiences = [
  {
    role: "Undergraduate Peer Tutor",
    company: "Rutgers University",
    location: "Piscataway, NJ, United States",
    period: "Feb 2023 – May 2025",
    description: `As an Undergraduate Peer Tutor, I led over 15 hours of weekly sessions in Computer Science, Mathematics, and Physics, supporting 25+ students in strengthening their academic performance and exam readiness. I adapted my teaching approach to match individual learning styles, which led to an average improvement of 20% in student outcomes.

In addition to tutoring, I mentored more than 50 students in developing effective study habits, time management, and problem-solving strategies. I also organized and facilitated collaborative study workshops before major exams, significantly increasing student participation and boosting group scores. This role helped refine my communication, leadership, and instructional design skills.`,
  },
  {
    role: "Android Developer Intern",
    company: "Embitel Technologies",
    location: "Whitefield, Bangalore, India",
    period: "Jun 2024 – Aug 2024",
    description: `At Embitel Technologies, I contributed to the development of a custom media player application designed for automotive OEM systems. Using Kotlin and Jetpack Compose, I implemented advanced playback functionality with Media3’s MediaSession and MediaBrowser APIs, resulting in a 25% increase in playback efficiency.

I also built a secure login system using Android Interface Definition Language (AIDL) and integrated it with a Room Database for persistent user sessions. Leveraging RecyclerView, Adapters, and Material 3 design principles, I optimized UI performance and reduced data retrieval time by 30%. This internship deepened my expertise in Android architecture, media frameworks, and system-level integration.`,
  },
  {
    role: "Assistant Data Analytics Intern",
    company: "Fantasy Exports",
    location: "Moradabad, Uttar Pradesh, India",
    period: "May 2023 – Aug 2023",
    description: `During my internship at Fantasy Exports, I optimized supply chain workflows by integrating ERP systems, which improved inventory accuracy to 95% and reduced manual tracking time by over 12 hours per week. I conducted technical audits to identify inefficiencies and implemented process enhancements to streamline operations.

I worked closely with the warehouse and billing teams to verify product inflow/outflow, reconcile supplier invoices, and maintain up-to-date stock records. This involved digitizing manual logs, identifying discrepancies, and ensuring clean handoffs between procurement and dispatch. My work here strengthened my data analysis, reporting automation, and business intelligence skills.`,
  },
];

const Experience = () => {
  return (
    <PageWrapper>
      <section
        id="experience"
        className="relative w-full bg-gray-200 rounded-2xl px-6 md:px-12 pt-10 pb-16 overflow-hidden"
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        <div className="relative z-10 space-y-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 font-mono"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-semibold font-mono text-gray-900">
                  {exp.role} –{" "}
                  <span className="text-blue-700">{exp.company}</span>
                </h3>
                <p className="text-sm text-gray-600 italic">
                  {exp.location} | {exp.period}
                </p>
                <p
                  className="mt-3 whitespace-pre-line text-gray-800 text-[15px] text-justify"
                  style={{ fontFamily: `"Times New Roman", serif` }}
                >
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Experience;
