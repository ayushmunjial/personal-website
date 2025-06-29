import { useEffect, useState } from "react";

export default function useDarkMode(): [boolean, () => void] {
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  const toggle = () => setEnabled((prev) => !prev);
  return [enabled, toggle];
}