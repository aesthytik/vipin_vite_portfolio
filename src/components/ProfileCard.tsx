
import { InstagramIcon, TwitterIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <div className="glass-card p-6 space-y-4 max-w-sm appear">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src="/lovable-uploads/f287dc2f-f9dd-42b0-9617-da4e549f727c.png"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-2 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-neon-green text-sm">
          <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
          Available for work
        </div>
        <h2 className="text-2xl font-display font-bold">John Anderson</h2>
      </div>

      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
          <TwitterIcon size={20} />
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
          <InstagramIcon size={20} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" /> CV
        </Button>
        <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
