// src/components/Body.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Body = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  // Using the className to identify the theme might be more reliable if you store it as part of the theme object
  const isFunky = theme.className === "funky";

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      {isFunky && (
        <select onChange={(e) => changeTheme(e.target.value)} defaultValue="">
          <option value="" disabled>
            Choose theme
          </option>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="funky">Funky Theme</option>
        </select>
      )}

      <h1>Main Content</h1>

      {!isFunky && (
        <select onChange={(e) => changeTheme(e.target.value)} defaultValue="">
          <option value="" disabled>
            Choose theme
          </option>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="funky">Funky Theme</option>
        </select>
      )}

      <p>Use the dropdown menu below to switch themes.</p>
    </div>
  );
};

export default Body;
