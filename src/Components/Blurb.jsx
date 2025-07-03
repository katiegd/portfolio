export default function Blurb() {
  return (
    <div id="top" className="flex h-screen items-center justify-center w-full gap-6 md:gap-10 px-4 md:px-0">
      <img
        src="src/assets/caricature.jpg"
        alt="Katie Duryea"
        className="w-48 h-48 md:w-56 md:h-56 outline outline-4 outline-offset-4 outline-slate-200 shadow-lg rounded-full animate-fade-down"
      />
      <div className="text-slate-200/90 flex flex-col gap-6 md:gap-10 max-w-2xl md:max-w-4xl">
        <p className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text animate-fade-down">
          Hi, I&apos;m Katie.
        </p>
        <div className="text-lg md:text-xl xl:text-2xl flex flex-col animate-fade-down text-start">
          <p className="tracking-tight pb-4">
            I&apos;m a{' '}
            <span className="font-bold bg-gradient-to-r from-amber-300 to-amber-600 inline-block text-transparent bg-clip-text">
              full stack developer
            </span>{' '}
            who loves{' '}
            <span className="font-bold bg-gradient-to-r from-emerald-300 to-emerald-500 inline-block text-transparent bg-clip-text">
              great design
            </span>{' '}
            and building{' '}
            <span className="font-bold bg-gradient-to-r from-rose-300 to-rose-600 inline-block text-transparent bg-clip-text">
              clean, user-friendly
            </span>{' '}
            websites. With a background in video editing, I&apos;ve developed a strong eye for detail and visual storytelling,
            which helps me create sites that don&apos;t just work well—
            <span className="font-bold bg-gradient-to-r from-blue-300 to-blue-600 inline-block text-transparent bg-clip-text">
              they look great too.
            </span>
          </p>
          <p className="tracking-tight pb-4">Based in Durham, NC and seeking job opportunities.</p>
          <div className="flex gap-3">
            <a href="https://github.com/katiegd" target="_blank">
              <img
                src="images/github-svgrepo-com.svg"
                alt="Github"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/katiegduryea/" target="_blank">
              <img
                src="images/linkedin-svgrepo-com.svg"
                alt="LinkedIn"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
