import { useEffect, useState, useRef } from 'react';
import projects from '../assets/projects.json';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const startTimer = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-col">
      {/* Carousel Container */}
      <div
        className="relative md:overflow-hidden rounded-xl bg-slate-950/70 border border-slate-800/75"
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
      >
        {/* Project Display */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4 md:p-8 h-auto min-h-[50vh] md:h-[40vh] flex flex-col justify-between rounded-xl bg-slate-950/70 border border-slate-800/75"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center group h-full">
                <img
                  src={project.src}
                  alt=""
                  className="w-full md:max-w-md h-48 md:min-h-full opacity-90 group-hover:opacity-100 transition-all duration-300 rounded-xl object-cover"
                />
                <div className="flex flex-col justify-between gap-4 flex-1 h-full w-full">
                  <div className="flex flex-col justify-between gap-3">
                    <h3 className="font-bold text-xl md:text-3xl text-indigo-200/90 mb-2 text-center md:text-left">
                      {project.name}
                    </h3>
                    <p className="text-indigo-200/90 text-sm md:text-base mb-4 text-center md:text-left">{project.description}</p>
                    <div className="flex gap-2 mb-4 justify-center md:justify-start">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto text-sm border border-indigo-300 text-indigo-300 font-semibold rounded-md px-4 py-2 hover:border-amber-100 hover:text-amber-100 transition-all duration-300">
                          Live Preview
                        </button>
                      </a>
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <button className="w-full sm:w-auto text-sm border border-indigo-300 text-indigo-300 font-semibold rounded-md px-4 py-2 hover:border-rose-300 hover:text-rose-300 transition-all duration-300">
                            View Code
                          </button>
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {project.tech.map((tech, i) => (
                      <span
                        className="bg-indigo-100/20 border border-indigo-200/25 rounded-full text-slate-50 font-semibold text-xs py-1 px-3"
                        key={i}
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center my-4 md:my-6 gap-2">
        <button
          onClick={prevSlide}
          className="bg-indigo-900/80 hover:bg-indigo-500/80 text-white p-2 rounded-full transition-all duration-300 z-10 hover:cursor-pointer hover:scale-110 hover:shadow-lg hover:outline hover:outline-indigo-300/50 outline outline-transparent mr-2"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex justify-center items-center gap-2">
          {/* dots */}
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-indigo-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
        {/* right arrow */}
        <button
          onClick={nextSlide}
          className=" bg-indigo-900/80 hover:bg-indigo-500/80 text-white p-2 rounded-full transition-all duration-300 z-10 hover:cursor-pointer hover:scale-110 hover:shadow-lg hover:outline hover:outline-indigo-300/50 outline outline-transparent ml-2"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-6 max-w-2xl md:max-w-4xl xl:max-w-5xl">
  {projects.map((project) => (
    <div key={project.id} className="flex gap-6 bg-slate-950/70 rounded-xl shadow sm:p-10 p-5 border border-slate-800/75 group">
      <img
        src={project.src}
        alt=""
        className="max-w-md opacity-90 group-hover:opacity-100 transition-all duration-300 rounded-xl"
      />
      <div className="flex flex-col justify-between gap-2 pt-2">
        <div>
          <p className="font-bold text-xl text-indigo-200/90">{project.name}</p>
          <p className="text-indigo-200/90">{project.description}</p>
          <div className="flex gap-2">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <button className="text-sm border border-indigo-300 w-fit text-indigo-300 font-semibold rounded-md px-4 py-1 mt-2 hover:border-amber-100 hover:text-amber-100 transition-all duration-300">
                Live Preview
              </button>
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <button className="text-sm border border-indigo-300 w-fit text-indigo-300 font-semibold rounded-md px-4 py-1 mt-2 hover:border-rose-300 hover:text-rose-300 transition-all duration-300">
                View Code
              </button>
            </a>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {project.tech.map((tech, i) => (
            <p
              className="bg-indigo-100/20 border border-indigo-200/25 rounded-full text-slate-50 font-semibold mt-2 text-xs py-0.5 px-2"
              key={tech[i]}
            >
              #{tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>; */
}
