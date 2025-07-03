export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[80px] bottom-0">
      <div className="text-indigo-200/90 flex gap-2 justify-between items-center max-w-5xl w-screen">
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
        <button className="relative border-animation-2 bg-slate-950/50 hover:bg-indigo-900/60 overflow-visible  px-4 py-2 rounded-md cursor-pointer hover:outline-indigo-300 outline outline-transparent hover:outline-2 transition-all outline-offset-2 duration-300 font-bold">
          Download My Resume
        </button>
      </div>
    </div>
  );
}
