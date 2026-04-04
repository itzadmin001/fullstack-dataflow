import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Code2, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

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
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <TiltCard className="glass-card p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                <cat.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {cat.skills.map((s, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 shrink-0" />
                  {s}
                </motion.li>
              ))}
            </ul>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
