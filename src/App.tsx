import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 min-h-screen bg-gray-300 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
