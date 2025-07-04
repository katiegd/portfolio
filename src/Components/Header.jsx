import { useState } from 'react';

function Header({ currentSection, setCurrentSection, isDarkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when nav item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact Me' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-4 md:gap-12 text-slate-600 dark:text-indigo-200/70 text-sm transition-all duration-300 sticky md:top-4 z-10 bg-white/20 dark:bg-indigo-900/20 backdrop-blur-sm md:rounded-full px-4 py-4 md:py-2 outline outline-offset-2 outline-1 outline-slate-300/20 dark:outline-indigo-300/20 font-bold shadow-md shadow-slate-500/10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`hover:text-indigo-500 dark:hover:text-indigo-100 transition-all duration-150 ${
              currentSection === item.id ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
        <div
          className={`text-slate-700 dark:text-indigo-200/70 text-sm hover:text-slate-900 dark:hover:text-indigo-100 transition-all duration-300 cursor-pointer ${
            isDarkMode ? 'text-slate-900 dark:text-indigo-100' : ''
          }`}
          onClick={toggleDarkMode}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Title */}
          <div className="text-indigo-600 dark:text-indigo-300 font-bold text-lg">KD</div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-slate-100/50 dark:bg-indigo-900/30 border border-slate-300/20 dark:border-indigo-300/20 hover:bg-slate-200/50 dark:hover:bg-indigo-800/40 transition-all duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-indigo-300 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-indigo-300 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-indigo-300 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  currentSection === item.id
                    ? 'bg-indigo-100/50 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-200 border border-indigo-300/30 dark:border-indigo-400/30'
                    : 'text-slate-700/80 dark:text-indigo-300/80 hover:bg-slate-100/50 dark:hover:bg-indigo-900/30 hover:text-slate-900 dark:hover:text-indigo-200'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium flex items-center gap-3 ${
                isDarkMode
                  ? 'bg-indigo-100/50 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-200 border border-indigo-300/30 dark:border-indigo-400/30'
                  : 'text-slate-700/80 dark:text-indigo-300/80 hover:bg-slate-100/50 dark:hover:bg-indigo-900/30 hover:text-slate-900 dark:hover:text-indigo-200'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
