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
      <div id="tech" className="flex flex-col items-center justify-center w-full p-4 lg:p-8 text-md">
        <div className="mx-auto max-w-7xl px-2 lg:px-8 flex flex-col sm:items-center opacity-0 intersect:opacity-100 delay-300 duration-700 transition intersect-once">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-indigo-200/90">Tech Stack</h2>
          <div className="mt-10 flex flex-col gap-10 justify-center items-center">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="flex flex-col gap-2 items sm:items-center w-fit">
                <p className="text-xl font-black text-indigo-200/90">{category.name}</p>
                <div className="flex flex-wrap gap-2">
                  {tech[categoryIndex][category.key].map((item, itemIndex) => (
                    <div
                      className="flex gap-4 items-center  bg-violet-200/15 shadow-md border border-violet-400/20 text-slate-100 px-5 py-2 rounded-full"
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
