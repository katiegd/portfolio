import projects from '../assets/projects.json';

export default function Projects() {
  return (
    <>
      <div id="projects" className="flex flex-col items-center justify-center w-full p-4 lg:p-8">
        <p className="text-3xl md:text-5xl xl:text-6xl font-serif font-bold tracking-tight pb-4 sm:pb-12 text-indigo-200/90 animate-fade duration-2000 delay-2000 text-center">
          Recent Projects
        </p>
        <div className="flex flex-col gap-6 max-w-2xl md:max-w-4xl xl:max-w-5xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex gap-6 bg-slate-950/70 rounded-xl shadow sm:p-10 p-5 border border-slate-800/75 group"
            >
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
        </div>
      </div>
    </>
  );
}
