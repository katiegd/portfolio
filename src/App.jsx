import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Blurb from "./Components/Blurb";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Blurb />;
      case "projects":
        return <Projects />;
      case "tech":
        return <TechStack />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Blurb />;
    }
  };

  return (
    <>
      <div className="relative h-full w-full bg-slate-100 dark:bg-slate-950 transition-all duration-300">
        {/* Lines design div */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Background gradient div */}
        <div className="[background:radial-gradient(125%_125%_at_50%_10%,#eeeeee_50%,#b4adec_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#2e005a_100%)] scroll-smooth mx-auto min-h-screen ">
          <div className="flex flex-col gap-16 md:gap-10 items-center justify-center pt-16 md:pt-0">
            {/* Navigation Sidebar */}
            <Header
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
            {/* Main Content Area */}
            <div className="flex items-center justify-center w-screen min-h-[calc(100vh-10rem-80px)] overflow-y-auto relative overflow-x-hidden">
              {/* Current Section - Slides in based on direction */}
              <div className="w-full min-h-full flex items-center justify-center py-8">{renderSection()}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
