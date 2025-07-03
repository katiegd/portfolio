export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <p className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold tracking-tight bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
        A Little About Me...
      </p>
      <div className="text-xl text-indigo-200/90 tracking-tight pb-1 sm:max-w-3xl opacity-0 intersect:opacity-100 delay-500 duration-700 transition intersect-once">
        <p className="pb-4">
          I am a creative self-starter with a passion for learning, problem-solving, and exploring new technologies. My background
          in photography, video production, and design has taught me to appreciate the art of making things look their best,
          whether it's a captivating image, a compelling video, or a beautifully crafted website or application.
        </p>

        <p className="pb-4">
          Over the past year, I've dedicated more than 600 hours to mastering the Odin Project curriculum, where I've honed my
          skills in web development, coding, and building responsive, user-friendly applications.
        </p>

        <p className="pb-4">
          When I'm not at my desk, you'll often find me enjoying the outdoors, rock climbing at my local gym, baking sourdough
          bread (ever searching for the perfect crumb), or spending time with my husband and our two cats.
        </p>

        <p className="pb-4">
          I'm excited to bring my creativity, technical skills, and dedication to making exceptional digital experiences.
        </p>
      </div>
    </div>
  );
}
