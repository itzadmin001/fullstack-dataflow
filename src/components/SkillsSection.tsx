import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Code2, Brain, Globe } from "lucide-react";

interface Category {
  title: string;
  icon: typeof Database;
  skills: string[];
}

const categories: Category[] = [
  {
    title: "Data Analytics",
    icon: Database,
    skills: [
      "Advanced SQL (Joins, Window Functions, Optimization)",
      "Excel (Advanced)",
      "Power BI / Tableau (Interactive Dashboards)",
      "Data Visualization & Storytelling",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Python (Pandas, NumPy, Matplotlib, Seaborn)",
      "JavaScript (ES6+, Async, APIs)",
      "C++ (DSA, Problem Solving)",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Supervised / Unsupervised Learning",
      "Model Evaluation & Optimization",
      "Deep Learning Fundamentals",
      "Generative AI & LLM Applications",
      "Prompt Engineering",
    ],
  },
  {
    title: "Full Stack Development",
    icon: Globe,
    skills: [
      "React.js (Hooks, Component Architecture, State Management)",
      "Node.js & Express.js (REST API Development)",
      "MongoDB (Database Design, Aggregation)",
      "RESTful APIs (Integration & Development)",
      "Authentication Systems (JWT)",
      "Modern UI/UX Development (Responsive Design)",
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((cat, i) => (
        <div key={i} className="glass-card-hover p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <cat.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
          </div>
          <ul className="space-y-2.5">
            {cat.skills.map((s, j) => (
              <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
