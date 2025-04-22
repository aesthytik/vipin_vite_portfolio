const experiences = [
  {
    title: "Fullstack AI Engineer",
    company: "The Admiral Network",
    location: "Manchester, UK",
    period: "June 2024 - Present",
    description:
      "Building tools and solutions for online store optimizations with RAG and AI agents.",
    tech: "React, TypeScript, Next.js, MCP, Supabase, OpenAI",
  },
  {
    title: "Senior Experience Engineer",
    company: "Publicis Sapient (Optum UHG Group)",
    location: "Hyderabad, India",
    period: "Jan 2023 - March 2024",
    description:
      "Led UI redesign and rebranding of Optum's client onboarding portal. Improved load times through server-side rendering, implemented modern UI with best practices for performance and accessibility. Mentored two mid-level engineers.",
    tech: "Next.js, TypeScript, Material UI, Drupal CMS, Java",
    achievements: [
      "Improved web-app load time through server-side rendering",
      "Redesigned codebase for better reusability and test coverage",
      "Migrated from class components to functional components with hooks",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Strip Finance",
    location: "British Virgin Islands",
    period: "Jan 2022 - Jan 2023",
    description:
      "Built an NFT collateralization platform enabling users to earn interest on NFT assets. Improved user engagement by 15% through dashboard enhancements and new features.",
    tech: "Next.js, TypeScript, GraphQL, MongoDB, Polygon, Ethers.js",
    achievements: [
      "Enhanced dashboard with new features like bar graphs and charts",
      "Created company-wide design system and component library",
      "Improved blockchain wallet connectivity with BSC and Polygon integration",
    ],
  },
  {
    title: "Lead Frontend Engineer",
    company: "Kravein",
    location: "Melbourne",
    period: "Sep 2020 - Jan 2022",
    description:
      "Developed a social media platform for discovering restaurants and managing food orders. Reduced website load times by 40% through performance optimizations.",
    tech: "Next.js, React Native, Flutter, TypeScript, GraphQL, Node.js",
    achievements: [
      "Migrated React Native codebase to modern functional components",
      "Implemented Reanimated 3.0 for improved animation performance",
      "Created multiplatform admin app using Flutter and GetX",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "JC Software Solutions",
    location: "India",
    period: "Mar 2019 - Sep 2020",
    description:
      "Developed service-based applications focusing on user experience and functionality.",
    tech: "React, Node.js, Express, MongoDB",
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
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
              <span className="text-sm text-neon-green bg-neon-green/10 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {exp.description}
            </p>
            {exp.achievements && (
              <div className="mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {exp.tech.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
