const Extras = () => {
  return (
    <section
      id="extras"
      className="relative w-full h-screen bg-gray-200 rounded-2xl flex flex-col justify-center items-center px-6 py-12 overflow-hidden"
    >
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none rounded-2xl"
        style={{ backgroundImage: "url('/pattern.svg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 font-mono mb-4">
          Extras Page
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-serif"> 🚧 This section is under construction — coming soon! </p>
      </div>
    </section>
  );
};

export default Extras;