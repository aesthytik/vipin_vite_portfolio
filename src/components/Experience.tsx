const experiences = [
  {
    title: "Sr Frontend engineer",
    company: "DEPT agency",
    location: "Manchester",
    period: "June 2025 - Present",
    description:
      "Worked with EBAY US to develop AI agentic flows for developing tools for Email templates, improved development workflows using locally managed NPM libraries, and collaborated with the EBAY US team to enhance user experience with in-house AI models.",
    tech: "React, Storybook, LLM, GraphQL, MobX",
    achievements: [
      "Developed AI agentic flows for email template tools in collaboration with EBAY US.",
      "Improved development workflows by utilizing locally managed NPM libraries.",
      "Enhanced user experience by integrating in-house AI models with the EBAY US team.",
    ],
  },
  {
    title: "Senior full-stack developer",
    company: "ACE FOODS",
    location: "London",
    period: "Jan 2025 - June 2025",
    description:
      "Led the development of a robust and scalable full-stack application using Next.js, focusing on seamless user experience, optimized performance, and efficient data handling. Key responsibilities included creating multi-platform admin panels and comprehensive dashboards.",
    tech: "Next.js, TypeScript, Supabase",
    achievements: [
      "Developed a robust and scalable full-stack application using Next.js for both front-end and back-end.",
      "Designed for a seamless user experience with optimized performance and efficient data handling.",
      "Created multi-platform admin panels for order handling, enabling efficient management and real-time tracking.",
      "Developed comprehensive dashboards for visualizing order statuses, sales data, and inventory levels.",
      "Integrated secure authentication and authorization mechanisms for sensitive order information.",
      "Implemented features for order modification, cancellation, and fulfillment, streamlining administrative workflows.",
      "Designed admin panels with a focus on usability and responsiveness across various devices.",
    ],
  },
  {
    title: "Senior Frontend Engineer, Web3 and NFTs",
    company: "Strip Finance",
    location: "British Virgin Islands",
    period: "Jan 2022 - Jan 2023",
    description:
      "A more functional & slicker dashboard helped improve user engagement rate by 15%.",
    tech: "Next.js, TypeScript, GraphQL, MongoDB, Polygon, Ethers.js",
    achievements: [
      "Enhanced an old dashboard and added new features like bar graphs and charts.",
      "Introduced atomic web design concepts for the portal with special care to accessibility, usability, and testability.",
      "Worked with product designers to create a design system & component library published for company-wide use.",
      "Enhanced the web3 wallet connectivity by adding BSC and Polygon blockchains and handled blockchain events.",
      "Improved the product's user experience by solving inconsistencies and replacing legacy components.",
    ],
  },
  {
    title: "Lead Frontend Engineer, Customer, and Admin Apps",
    company: "Kravein",
    location: "Melbourne",
    period: "Sep 2020 - Jan 2022",
    description:
      "Reduced website load times by up to 40% because of performance improvements.",
    tech: "Next.js, React Native, Flutter, TypeScript, GraphQL, Node.js",
    achievements: [
      "Owned the migration process of old react native codebase to modern functional components.",
      "Implemented reanimated 3.0 animations to improve the animation performance of cross-platform apps.",
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
