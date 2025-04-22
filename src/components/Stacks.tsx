
import { Badge } from "@/components/ui/badge";
import { Framer } from "lucide-react";

const stacksData = [
  {
    title: "Figma",
    category: "Design Tool",
    icon: "/lovable-uploads/4420c52c-c081-41a1-ad3f-6c303a9e5b1f.png"
  },
  {
    title: "Framer",
    category: "No Code Development",
    icon: "/lovable-uploads/366f48d9-00e4-4f1a-9378-c743d7bab522.png"
  },
  {
    title: "Notion",
    category: "Notion",
    icon: "/lovable-uploads/4420c52c-c081-41a1-ad3f-6c303a9e5b1f.png"
  },
  {
    title: "SS Icons",
    category: "Icon Library",
    icon: "/lovable-uploads/366f48d9-00e4-4f1a-9378-c743d7bab522.png"
  }
];

const Stacks = () => {
  return (
    <div className="space-y-6 appear appear-delay-2">
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <Framer className="w-6 h-6" />
        Stacks
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {stacksData.map((stack, index) => (
          <div key={index} className="glass-card p-4 flex items-center gap-4">
            <img src={stack.icon} alt={stack.title} className="w-12 h-12 rounded-lg" />
            <div>
              <h3 className="font-display font-bold">{stack.title}</h3>
              <Badge variant="outline" className="mt-1">
                {stack.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
