import { Observer } from 'tailwindcss-intersect';
import { useEffect, useState } from 'react';

import Header from './Components/Header';
import Blurb from './Components/Blurb';
import About from './Components/About';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    Observer.start();
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Blurb />;
      case 'projects':
        return <Projects />;
      case 'tech':
        return <TechStack />;
      case 'about':
        return <About />;
      case 'contact':
        return <Footer />;
      default:
        return <Blurb />;
    }
  };

  return (
    <>
      <div className="absolute inset-0 min-h-screen -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#2e005a_100%)] overflow-auto scroll-smooth">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-2 lg:border-r lg:border-slate-700/50">
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-10 flex items-center justify-center p-4 lg:p-8">{renderSection()}</div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
