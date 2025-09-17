import { useState } from "react";
import { cn } from "@/lib/utils";

const skillIcons = {
  "HTML/CSS": "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "JavaScript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  "React": "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  "Ui/UX Design": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "Basic Flutter": "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", // official Flutter PNG
  "Python": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  "Git/GitHub": "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  "Figma": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  "VS Code": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", // official VS Code icon
  "Firebase": "https://cdn-icons-png.flaticon.com/512/888/888847.png",
  "Google Colab": "https://cdn-icons-png.flaticon.com/512/5968/5968908.png",
  "Android Studio": "https://cdn-icons-png.flaticon.com/512/888/888847.png",
};

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Ui/UX Design", category: "frontend" },
  { name: "Basic Flutter", category: "frontend" },
  { name: "Python", category: "all" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "Google Colab", category: "tools" },
  { name: "Android Studio", category: "tools" },
];

const categories = ["all", "frontend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-2xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-3 rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-md flex flex-col"
              style={{ width: "200px", margin: "auto" }}
            >
              {/* Icon + Skill Name */}
              <div className="flex items-center mb-1 gap-2">
                <img
                  src={skillIcons[skill.name]}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="font-semibold text-base">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-1">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: "80%" }}
                />
              </div>

              {/* Proficiency Text */}
              <div className="text-right">
                <span className="text-xs text-muted-foreground">Proficient</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
