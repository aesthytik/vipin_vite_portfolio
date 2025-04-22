import ProfileCard from "@/components/ProfileCard";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";

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
                <span className="block text-neon-green">
                  Senior Frontend Developer
                </span>
                Based in Manchester, UK.
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                I specialize in building high-performance web applications with
                React, TypeScript, and Next.js. With extensive experience in
                design systems, Web3, and cross-platform mobile development, I
                focus on creating scalable and accessible solutions while
                maintaining excellent user experiences. Currently pursuing a
                Master's in Computer Science at Birmingham University.
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
