
const projects = [
  {
    title: "HelloBot",
    category: "SaaS & Startup",
    pages: "8 Pages",
    image: "/lovable-uploads/1887ffef-8998-4e3c-9760-d67b949db9f8.png"
  },
  {
    title: "Flexisoft",
    category: "SaaS & Startup",
    pages: "6 Pages",
    image: "/lovable-uploads/1887ffef-8998-4e3c-9760-d67b949db9f8.png"
  }
];

const Projects = () => {
  return (
    <div className="space-y-6 appear appear-delay-3">
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="glass-card group overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-display font-bold">{project.title}</h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                <span>{project.category}</span>
                <span>{project.pages}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
