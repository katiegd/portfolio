import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center w-full max-h-[70vh] max-w-screen-lg overflow-y-auto">
        <p className="text-4xl md:text-6xl xl:text-7xl text-center pb-10 font-serif font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
          Recent Projects
        </p>
        <ProjectCarousel />
      </div>
    </>
  );
}
