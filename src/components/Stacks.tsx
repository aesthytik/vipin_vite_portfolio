import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Code2,
  Laptop,
  TestTube2,
  Brain,
  Wallet,
  Server,
  Cloud,
} from "lucide-react";

const stacksData = [
  {
    category: "Design & Markup",
    icon: Layers,
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Material UI",
      "Figma",
      "Zeplin",
      "Storybook",
    ],
    description:
      "Building responsive web experiences & maintaining design systems",
  },
  {
    category: "Frontend Core",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Flutter",
      "Apollo Client",
      "GraphQL",
    ],
    description: "Advanced React state management & API integration",
  },
  {
    category: "Advanced Frontend",
    icon: Laptop,
    skills: [
      "Next.js",
      "Gatsby",
      "PWAs",
      "Micro-frontends",
      "Greensock",
      "Server Components",
    ],
    description: "Building high-performance SSR apps & animations",
  },
  {
    category: "Testing / Metrics",
    icon: TestTube2,
    skills: ["Jest", "React Testing Library", "Enzyme", "E2E Testing"],
    description: "Writing comprehensive tests for React applications",
  },
  {
    category: "AI / LLM",
    icon: Brain,
    skills: [
      "Hugging Face",
      "YOLO",
      "Natural Language Processing",
      "Object Detection",
    ],
    description: "Integrating AI capabilities in full-stack applications",
  },
  {
    category: "Blockchain/Web3",
    icon: Wallet,
    skills: [
      "Polygon",
      "Ethereum",
      "Hedera",
      "Solidity",
      "Web3.js",
      "Ethers.js",
    ],
    description: "Building Web3 marketplaces & minting tools",
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "GraphQL",
      "REST APIs",
      "Contentful",
      "Prismic",
    ],
    description: "Building APIs & serverless functions",
  },
  {
    category: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Git"],
    description: "Working with cloud services & deployment pipelines",
  },
];

const Stacks = () => {
  return (
    <div className="space-y-6 appear appear-delay-2">
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        Technical Skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {stacksData.map((stack, index) => (
          <div key={index} className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <stack.icon className="w-8 h-8 text-neon-green" />
              <div>
                <h3 className="font-display font-bold text-lg">
                  {stack.category}
                </h3>
                <p className="text-sm text-gray-400">{stack.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
