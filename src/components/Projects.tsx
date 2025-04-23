const projects = [
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
    image: "/img/stripfinance.png",
    url: "https://www.strip.finance/",
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
    image: "/img/kravein.png",
    url: "https://www.kravein.com.au/",
  },
  {
    title: "Igris BOT",
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
    image: "/img/igrisbot.png",
    url: "https://www.igris.bot/",
  },
  {
    title: "Mignomic",
    category: "Immigration Tech",
    period: "Jan 2022 - Present",
    description:
      "AI-powered platform for automating  Immigtration processes and providing personalized recommendations.",
    tech: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
      "OpenAI",
    ],
    achievements: [
      "Built AI-driven recommendation engine",
      "Integrated with government APIs",
      "Implemented user-friendly dashboard",
    ],
    image: "/img/mignomic.png",
    url: "https://www.mignomic.com/",
  },
  {
    title: "Maple Kitchens",
    category: "Kitchens tools and worktops",
    period: "Jan 2022 - Present",
    description:
      "E-commerce platform for kitchen tools and worktops with a focus on user experience and performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    achievements: [
      "Built responsive e-commerce platform",
      "Implemented real-time inventory management",
      "Optimized performance for mobile devices",
    ],
    image: "/img/maplekitchens.png",
    url: "https://www.maplekitchensandbathrooms.co.uk/",
  },
  {
    title: "ZEIQ",
    category: "Company portfolio",
    period: "Jan 2018 - Present",
    description:
      "Web development company specializing in creating high-performance websites and applications.",
    tech: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    achievements: [
      "Built portfolio showcasing projects",
      "Implemented SEO best practices",
      "Optimized performance for search engines",
    ],
    image: "/img/zeiqco.png",
    url: "https://www.zeiq.co.uk/",
  },
  {
    title: "Leap wallet",
    category: "Web3 / Wallet",
    period: "Jan 2022 - Present",
    description:
      "Web3 mobile wallet wallet for managing crypto assets and NFTs with a focus on user experience and security.",
    tech: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    achievements: [
      "Built secure wallet for crypto assets",
      "Implemented multi-chain support",
      "Optimized performance for mobile devices",
    ],
    image: "/img/leap.png",
    url: "https://www.leapwallet.io/",
  },
  {
    title: "OPTUM UHG portal",
    category: "Healthcare",
    period: "Jan 2023 - Present",
    description:
      "Healthcare portal for managing patient information and appointments with a focus on user experience and performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    achievements: [
      "Built responsive healthcare portal",
      "Implemented real-time appointment management",
      "Optimized performance for mobile devices",
    ],
    image: "/img/rxcomet.png",
    url: "https://rxcomet.optumrx.com/",
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
        Notable Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="glass-card group overflow-hidden block hover:no-underline"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-display font-bold mb-1 flex items-center gap-2">
                  {project.title}
                  <svg
                    className="w-4 h-4 text-neon-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
