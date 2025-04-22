import { School } from "lucide-react";

const educationData = [
  {
    title: "Master's in Computer Science",
    institution: "Birmingham University",
    location: "United Kingdom",
    period: "Dec 2023 - Jan 2025",
    description:
      "Pursued advanced studies in Computer Science, focusing on modern software engineering practices, artificial intelligence, and distributed systems.",
    currentGPA: "Distinction",
  },
  {
    title: "Bachelor's in Information Technology",
    institution: "Punjab Technical University",
    location: "India",
    period: "Jun 2014 - July 2018",
    description:
      "Completed undergraduate studies with a focus on software development, database management, and web technologies. Built a strong foundation in computer science fundamentals and practical programming skills.",
    currentGPA: "Distinction | 8.5/10",
  },
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
                <p className="text-gray-500 text-sm">{edu.location}</p>
                {edu.currentGPA && (
                  <span className="inline-block mt-2 text-sm bg-neon-green/10 text-neon-green px-2 py-1 rounded">
                    {edu.currentGPA}
                  </span>
                )}
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
