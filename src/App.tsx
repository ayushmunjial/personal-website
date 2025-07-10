import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 min-h-screen bg-gray-300 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <Outlet />
      </div>
    </>
  );
}

export default App;
