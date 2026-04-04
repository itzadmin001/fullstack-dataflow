import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Code2, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Category {
  title: string;
  icon: typeof Database;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Data Analytics",
    icon: Database,
    skills: [
      { name: "Advanced SQL (Joins, Window Functions)", level: 92 },
      { name: "Excel (Advanced)", level: 85 },
      { name: "Power BI / Tableau", level: 88 },
      { name: "Data Visualization & Storytelling", level: 90 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib)", level: 90 },
      { name: "JavaScript (ES6+, Async, APIs)", level: 88 },
      { name: "C++ (DSA, Problem Solving)", level: 75 },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Supervised / Unsupervised Learning", level: 85 },
      { name: "Model Evaluation & Optimization", level: 82 },
      { name: "Deep Learning Fundamentals", level: 78 },
      { name: "Generative AI & LLM Applications", level: 80 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    title: "Full Stack Development",
    icon: Globe,
    skills: [
      { name: "React.js (Hooks, State Management)", level: 92 },
      { name: "Node.js & Express.js", level: 88 },
      { name: "MongoDB (Aggregation, Design)", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Authentication (JWT)", level: 82 },
      { name: "Modern UI/UX Development", level: 88 },
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="glass-card p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
              <cat.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
          </div>
          <div className="space-y-3.5">
            {cat.skills.map((s, j) => (
              <div key={j}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{s.name}</span>
                  <span className="text-xs text-primary font-mono">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: j * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
