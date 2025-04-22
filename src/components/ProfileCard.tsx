import { LinkedinIcon, GithubIcon, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <div className="glass-card p-6 space-y-4 max-w-sm appear">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src="/img/vipin_kumar_rawat.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-2 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-neon-green text-sm">
          <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
          Available for work
        </div>
        <h2 className="text-2xl font-display font-bold">Vipin Rawat</h2>
        <p className="text-gray-400">aesthytik@gmail.com</p>
        <p className="text-gray-400">+44 07445179134</p>
      </div>

      <div className="flex justify-center space-x-4">
        <a
          href="https://linkedin.com/in/vipin-rawat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href="https://github.com/aesthytik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href="mailto:aesthytik@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a href="/vipin-rawat-cv.pdf" download>
          <Button variant="outline" className="w-full">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </a>
        <a href="mailto:aesthytik@gmail.com">
          <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
