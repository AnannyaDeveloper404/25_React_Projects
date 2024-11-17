import React from "react";
import UseLocalStorage from "./useLocalStorage";
import "./theme.css";
const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="light-dark-mode" dark-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
