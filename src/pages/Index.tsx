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
      <div className="container h-screen py-12 md:py-20">
        <div className="grid h-full md:grid-cols-[350px,1fr] gap-8 lg:gap-12">
          <div className="md:sticky top-0 h-fit">
            <ProfileCard />
          </div>

          <div className="space-y-12 overflow-y-auto max-h-[calc(100vh-6rem)] pr-4 custom-scrollbar">
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
                Hey! With over 5 years of building apps, I love mixing AI with
                frontend development to create some really cool stuff. With
                expert React and Next.js skills in my toolkit, what really gets
                me excited is making AI actually useful in real-world apps. I
                hack around with blockchain tech too - built some fun DApps and
                smart contracts. When I'm not coding, you'll probably catch me
                tinkering with new AI models or breaking (and fixing!) things in
                Web3 space.
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
