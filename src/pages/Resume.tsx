import { ArrowDownToLine } from "lucide-react";

const Resume = () => {
  return (
    <div className="relative w-full h-screen bg-gray-200 rounded-2xl flex justify-center items-center px-4 md:px-12 pt-10 pb-16">
      <iframe
        src="/resume.pdf"
        className="w-full max-w-[90rem] h-full rounded-2xl shadow-xl"
        title="Resume Preview"
      />
      <a
        href="/resume.pdf"
        download
        className="absolute bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        title="Download Resume"
      >
        <ArrowDownToLine className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Resume;