import tech from '../assets/tech.json';

export default function TechStack() {
  // Define category names and their corresponding tech array keys
  const categories = [
    { name: 'Languages', key: 'languages' },
    { name: 'Frontend', key: 'frontend' },
    { name: 'Backend', key: 'backend' },
    { name: 'DevOps & Tools', key: 'devops' },
  ];

  return (
    <>
      <div id="tech" className="flex flex-col items-center justify-center text-md">
        <div className="mx-auto max-w-7xl px-2 lg:px-8 flex flex-col sm:items-center opacity-0 intersect:opacity-100 delay-300 duration-700 transition intersect-once">
          <h2 className="text-4xl md:text-6xl xl:text-7xl text-center font-serif font-bold tracking-tight bg-gradient-to-l from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
            Tech Stack
          </h2>
          <p className="dark:text-indigo-200/90 text-slate-600 pb-8 max-w-lg text-center text-lg">
            My quest for knowledge is never-ending, but here are some of the technologies I have used and am still learning:
          </p>
          <div className="mt-10 flex flex-col gap-8 justify-center items-center">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="flex flex-col gap-2 items-center w-fit">
                <p className="text-xl font-black dark:text-indigo-200/90 text-slate-600">{category.name}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech[categoryIndex][category.key].map((item, itemIndex) => (
                    <div
                      className="flex gap-4 items-center  dark:bg-gradient-to-br dark:from-indigo-100/20 dark:to-indigo-300/20 bg-gradient-to-br from-indigo-900/80 to-slate-900/80 backdrop-blur-sm shadow-md border dark:border-indigo-300/25 border-indigo-300/25 dark:text-slate-100 text-slate-100 md:px-5 md:py-2 px-3 py-1 rounded-full"
                      key={`${category.name}-${itemIndex}`}
                    >
                      <img src={item.image} alt="" className="h-8" />
                      <p className="">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
