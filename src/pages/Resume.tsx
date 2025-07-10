const Resume = () => {
  return (
    <section
      id="resume"
      className="relative w-full h-screen bg-gray-200 rounded-2xl flex justify-center items-center px-4 md:px-12 pt-10 pb-16 overflow-hidden"
    >
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
        style={{ backgroundImage: "url('/pattern.svg')" }}
      ></div>

      {/* Resume PDF Viewer */}
      <iframe
        src="/resume.pdf" className="w-full max-w-[90rem] h-full rounded-2xl shadow-xl relative z-10" title="Resume Preview"
      />
    </section>
  );
};

export default Resume;
