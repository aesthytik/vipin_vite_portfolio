
const experiences = [
  {
    title: "Framer & UI/UX Designer",
    company: "Circlum Tech",
    period: "2023 - Present",
    description: "Designing interactive prototypes with Framer, focusing on seamless user experiences and scalable solutions through user feedback and collaboration.",
  },
  {
    title: "UI/UX Designer",
    company: "Tech Studio",
    period: "2021 - 2023",
    description: "Led the design of multiple web and mobile applications, implementing modern design practices and conducting user research.",
  },
];

const Experience = () => {
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display font-bold text-xl">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <span className="text-sm text-neon-green bg-neon-green/10 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
