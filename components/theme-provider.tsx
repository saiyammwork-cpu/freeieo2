"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  React.useEffect(() => {
    const root = document.documentElement;
    const initial: Theme =
      (localStorage.getItem("theme") as Theme) ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setThemeState(initial);
    root.classList.toggle("dark", initial === "dark");
    root.style.colorScheme = initial;
  }, []);

  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t);
    const root = document.documentElement;
    root.classList.toggle("dark", t === "dark");
    root.style.colorScheme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = React.useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: "dark" as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return ctx;
}