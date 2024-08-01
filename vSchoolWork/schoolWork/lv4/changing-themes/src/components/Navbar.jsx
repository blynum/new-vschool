// src/components/Navbar.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
