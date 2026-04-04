import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, BarChart3, Brain, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { icon: GraduationCap, title: "Bachelor of Computer Applications (BCA)", desc: "Strong academic foundation in computer science and application development" },
  { icon: BarChart3, title: "Data Analytics & Visualization", desc: "SQL, Python, Power BI, Tableau — turning raw data into actionable insights" },
  { icon: Brain, title: "Machine Learning & Deep Learning", desc: "Supervised/unsupervised learning, model evaluation, neural networks" },
  { icon: Sparkles, title: "Generative AI", desc: "LLM applications, prompt engineering, building AI-powered systems" },
  { icon: Code2, title: "Full Stack Development", desc: "React, Node.js, MongoDB — end-to-end application development" },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle title="Education & Learning" />
    <div className="max-w-2xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

      {timeline.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pl-16 pb-8 last:pb-0"
        >
          {/* Timeline dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="absolute left-3 top-1 w-7 h-7 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center"
          >
            <item.icon size={14} className="text-primary" />
          </motion.div>

          <motion.div
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="glass-card p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
