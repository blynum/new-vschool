// src/themeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const themes = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      flexDirection: "column",
      className: "light",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      flexDirection: "column",
      className: "dark",
    },
    funky: {
      backgroundColor: "#f0f",
      color: "#0ff",
      flexDirection: "column",
      className: "funky",
    },
  };

  // Initialize theme from local storage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  // Apply theme styles to the document body
  useEffect(() => {
    document.body.style.backgroundColor = themes[theme].backgroundColor;
    document.body.style.color = themes[theme].color;
  }, [theme, themes]);

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
