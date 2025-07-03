import { useState } from 'react';

function Header({ currentSection, setCurrentSection }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  return (
    <>
      <div className="flex gap-12 text-indigo-200/70 text-sm transition-all duration-300 sticky top-0 z-10 mt-4 bg-indigo-900/20 backdrop-blur-sm rounded-full px-4 py-2 outline outline-offset-2 outline-1 outline-indigo-300/20 font-bold dark:text-indigo-200/70">
        {/* Home */}
        <button
          onClick={() => handleNavClick('home')}
          className={`hover:text-indigo-100 transition-all duration-150   ${currentSection === 'home' ? 'text-indigo-400 font-bold' : ''}`}
        >
          Home
        </button>
        {/* Projects */}
        <button
          onClick={() => handleNavClick('projects')}
          className={`hover:text-indigo-100 transition-all duration-300   ${currentSection === 'projects' ? 'text-indigo-400 font-bold' : ''}`}
        >
          Projects
        </button>
        {/* Tech */}
        <button
          onClick={() => handleNavClick('tech')}
          className={`transition-all duration-300   hover:text-indigo-100 ${currentSection === 'tech' ? 'text-indigo-400 font-bold' : ''}`}
        >
          Tech Stack
        </button>
        {/* About */}
        <button
          onClick={() => handleNavClick('about')}
          className={`hover:text-indigo-100 transition-all duration-300   ${currentSection === 'about' ? 'text-indigo-400 font-bold' : ''}`}
        >
          About Me
        </button>
        {/* Contact */}
        <button
          onClick={() => handleNavClick('contact')}
          className={`hover:text-indigo-100 transition-all duration-300   ${currentSection === 'contact' ? 'text-indigo-400 font-bold' : ''}`}
        >
          Contact Me
        </button>
        <div
          className={`text-indigo-200/70 text-sm hover:text-indigo-100 transition-all duration-300 cursor-pointer ${isDarkMode ? 'text-indigo-100' : ''}`}
          onClick={toggleDarkMode}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
