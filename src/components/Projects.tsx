const projects = [
  {
    title: "Optum UHG Portal",
    category: "Enterprise Healthcare",
    period: "Jan 2023 - Present",
    description:
      "UI redesign and rebranding of Optum's client onboarding portal with focus on performance and accessibility metrics.",
    tech: ["Next.js", "TypeScript", "Material UI", "Drupal CMS"],
    achievements: [
      "Improved load time with server-side rendering",
      "Enhanced reusability and test coverage",
      "Migrated to functional components with hooks",
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Strip Finance",
    category: "Web3 / DeFi",
    period: "Jan 2022 - Jan 2023",
    description:
      "NFT collateralization platform enabling users to earn interest by using NFTs as collateral on eco-friendly blockchains.",
    tech: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "Polygon",
      "Ethers.js",
    ],
    achievements: [
      "15% improvement in user engagement",
      "Built company-wide design system",
      "Integrated multiple blockchain networks",
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Kravein App",
    category: "Social Media / Food Tech",
    period: "Sep 2020 - Jan 2022",
    description:
      "Social platform for discovering restaurants and sharing food experiences with integrated ordering system.",
    tech: [
      "Next.js",
      "React Native",
      "Flutter",
      "TypeScript",
      "GraphQL",
      "Node.js",
    ],
    achievements: [
      "40% reduction in website load times",
      "Built cross-platform mobile apps",
      "Implemented real-time order tracking",
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Mintmaster Labs",
    category: "Web3 / NFT",
    period: "Jun 2021 - Mar 2022",
    description:
      "Web3 platform for Hedera ecosystem users to manage crypto assets, mint NFTs and visualize portfolios.",
    tech: [
      "Next.js",
      "Hedera",
      "Tailwind CSS",
      "TypeScript",
      "GraphQL",
      "Three.js",
    ],
    achievements: [
      "Built modular UI for Hedera ecosystem",
      "Implemented wallet integrations",
      "Created NFT minting system with IPFS",
    ],
    image: "/placeholder.svg",
  },
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

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-card group overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-display font-bold mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neon-green">{project.category}</span>
                  <span className="text-gray-400">{project.period}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
