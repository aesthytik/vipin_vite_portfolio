import ProfileCard from "@/components/ProfileCard";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";
import { useTypewriter } from "@/hooks/use-typewriter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 min-h-screen py-8 md:py-20">
        <div className="grid h-full md:grid-cols-[350px,1fr] gap-8 lg:gap-12">
          <div className="md:sticky md:top-0 h-fit">
            <ProfileCard />
          </div>

          <div className="space-y-12 md:overflow-y-auto md:max-h-[calc(100vh-6rem)] md:pr-4 custom-scrollbar">
            <div className="space-y-4 appear appear-delay-1">
              <div className="flex items-center gap-2">
                <span className="text-neon-green">👋 Say Hello</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold">
                I'm Vipin Rawat,
                <span className="block text-neon-green min-h-[1.25em]">
                  {useTypewriter([
                    "Frontend AI Engineer",
                    "Mobile App Developer",
                    "Full Stack Engineer",
                    "Software Consultant",
                  ])}
                </span>
                Based in Manchester, UK.
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Currently working as a Software Engineer at Nuelo, I bring over
                5 years of experience specializing in sophisticated web
                applications with AI integration. At Nuelo, I create web-based
                solutions while maintaining high performance and accessibility
                standards. I leverage my expertise in React and Next.js to
                develop enterprise-grade solutions. My passion lies in
                implementing practical AI solutions in production environments,
                and I have a proven track record of architecting scalable
                applications. I also explore blockchain technology, developing
                DApps and smart contracts. Beyond coding, I'm deeply involved in
                AI research and actively contribute to the Web3 ecosystem.
              </p>
            </div>

            <Stats />
            <Experience />
            <Education />
            <Projects />
            <Stacks />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
