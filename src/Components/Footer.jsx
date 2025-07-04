export default function Footer() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-[100px] pb-10 md:pb-0 mb-10 md:mb-0">
      <div className="text-slate-600 dark:text-indigo-200/90 flex flex-col-reverse md:flex-row gap-5 justify-between items-center max-w-5xl w-screen">
        <p>© Katie G. Duryea {new Date().getFullYear()}</p>
        <div>
          Created using{' '}
          <a href="https://react.dev/" className="font-extrabold text-indigo-500 hover:text-indigo-300">
            React
          </a>{' '}
          &{' '}
          <a href="https://tailwindcss.com/" className="font-extrabold text-indigo-500  hover:text-indigo-300 hover:underline">
            Tailwind
          </a>
        </div>{' '}
        <a
          href="https://drive.google.com/file/d/1Zlr9H7qLcA4rSFAk2rIarCUuaRdxtxKw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative border-animation-2 bg-indigo-600/10 dark:bg-slate-950/50 hover:bg-indigo-600 hover:text-indigo-100 overflow-visible  px-4 py-2 rounded-md cursor-pointer hover:outline-indigo-300 outline outline-transparent hover:outline-2 transition-all outline-offset-2 duration-300 font-bold"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}
