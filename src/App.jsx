import { useState } from 'react';

import Header from './Components/Header';
import Blurb from './Components/Blurb';
import About from './Components/About';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState('home');
  const [slideDirection, setSlideDirection] = useState('right');

  // Define section order for determining direction
  const sectionOrder = ['home', 'projects', 'tech', 'about', 'contact'];

  const handleSectionChange = (newSection) => {
    if (newSection !== currentSection && !isTransitioning) {
      // Determine slide direction based on section order
      const currentIndex = sectionOrder.indexOf(currentSection);
      const newIndex = sectionOrder.indexOf(newSection);
      // When moving forward (right), content slides left (like turning a page)
      const direction = newIndex > currentIndex ? 'left' : 'right';

      setIsTransitioning(true);
      setPreviousSection(currentSection);
      setCurrentSection(newSection);
      setSlideDirection(direction);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

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
        return <Contact />;
      default:
        return <Blurb />;
    }
  };

  const renderPreviousSection = () => {
    switch (previousSection) {
      case 'home':
        return <Blurb />;
      case 'projects':
        return <Projects />;
      case 'tech':
        return <TechStack />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Blurb />;
    }
  };

  return (
    <>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#2e005a_100%)] scroll-smooth mx-auto min-h-screen">
          <div className="flex flex-col gap-10 items-center justify-center">
            {/* Navigation Sidebar */}
            <Header currentSection={currentSection} setCurrentSection={handleSectionChange} />
            {/* Main Content Area */}
            <div className="flex items-center justify-center max-w-screen-lg h-[calc(100vh-10rem-80px)] overflow-hidden relative">
              {/* Previous Section - Slides out based on direction */}
              {isTransitioning && (
                <div
                  className={`absolute top-0 left-0 w-full h-full ${
                    slideDirection === 'left' ? 'animate-slide-left' : 'animate-slide-right-out'
                  }`}
                  style={{ transformOrigin: slideDirection === 'left' ? 'left center' : 'right center' }}
                >
                  <div className="w-full h-full flex items-center justify-center">{renderPreviousSection()}</div>
                </div>
              )}

              {/* Current Section - Slides in based on direction */}
              <div
                className={`w-full h-full flex items-center justify-center ${
                  isTransitioning ? (slideDirection === 'left' ? 'animate-slide-right' : 'animate-slide-left-in') : ''
                }`}
              >
                {renderSection()}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
