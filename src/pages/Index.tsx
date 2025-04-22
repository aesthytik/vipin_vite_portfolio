
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
                I'm John Anderson,
                <span className="block text-neon-green">Frontend Developer</span>
                Based in Los Angeles, CA.
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                I specialize in creating clean, user-friendly digital experiences by blending creativity with functionality. With a strong background in interactive design, I focus on crafting designs that not only look great but also provide smooth and engaging user interactions, helping ideas come to life seamlessly.
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
