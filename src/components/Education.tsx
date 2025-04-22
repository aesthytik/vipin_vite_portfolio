
import { School } from "lucide-react";

const educationData = [
  {
    title: "UI/UX Design Certification",
    institution: "Interaction Design Foundation, Online",
    period: "2018 - 2019",
    description: "Gained hands-on experience in UX research, prototyping, wireframing, and usability testing, focusing on designing seamless, user-friendly digital experiences."
  },
  {
    title: "Bachelor of Design in Interaction Design",
    institution: "National University of Singapore, Singapore",
    period: "2015 - 2017",
    description: "Completed a comprehensive program focused on designing user-centered digital products, integrating aesthetics and functionality through practical interaction design principles."
  }
];

const Education = () => {
  return (
    <div className="space-y-6 appear appear-delay-2">
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <School className="w-6 h-6" />
        Education
      </h2>

      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display font-bold text-xl">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
              <span className="text-sm text-neon-green bg-neon-green/10 px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
