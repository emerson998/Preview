import { useEffect, useState } from "react";
export type Theme = "light" | "dark";
const STORAGE_KEY = "resume-theme";
function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch { /* Storage can be unavailable in private or restricted browsers. */ }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* Theme still works without persistence. */ }
  }, [theme]);
  return [theme, () => setTheme(t => t === "light" ? "dark" : "light")];
}
