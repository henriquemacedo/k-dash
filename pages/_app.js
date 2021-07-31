import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/theme";
import Topbar from "@ui/topbar";
import SelectInteractive from "@components/select-interactive";
import "@styles/styles.css";

function Application({ Component, pageProps }) {
  const [mountedComponent, setMountedComponent] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
      setMountedComponent(true);
    } else if (prefersDark) {
      setTheme("dark");
      setMountedComponent(true);
    }
  }, [mountedComponent]);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={{ mode: isDarkTheme ? "dark" : "light" }}>
      <GlobalStyles />
      <Topbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
        <SelectInteractive />
      </Topbar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application;
