import { ArrowDownToLine } from "lucide-react";

const Resume = () => {
  return (
    <div className="relative w-full h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-7xl h-full px-4 md:px-8">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-md shadow-lg"
          title="Resume Preview"
        />
      </div>
      <a
        href="/resume.pdf"
        download
        className="absolute bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        title="Download Resume"
      >
        <ArrowDownToLine className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Resume;