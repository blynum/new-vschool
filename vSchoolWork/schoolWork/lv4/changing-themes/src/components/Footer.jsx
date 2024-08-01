// src/components/Footer.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return <footer className={`footer ${theme}`}>Amazing Footer</footer>;
};

export default Footer;
