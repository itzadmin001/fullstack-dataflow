import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "SQL Banking Analysis System",
    description: "Performed transaction analysis and fraud detection. Built optimized SQL queries and data models.",
    tech: ["SQL", "Data Modeling", "Analytics"],
  },
  {
    title: "Interactive Business Dashboard",
    description: "Developed using Power BI / Tableau. Visualized key business metrics and insights.",
    tech: ["Power BI", "Tableau", "Data Visualization"],
  },
  {
    title: "Python Data Analysis Project",
    description: "Data cleaning, EDA, and visualization. Extracted actionable insights from real-world datasets.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Full Stack Analytics Dashboard",
    description: "Built using React + Node.js + MongoDB. Displays dynamic data insights via APIs. Demonstrates end-to-end product development.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    highlight: true,
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitle="A selection of high-impact projects" />
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <TiltCard
            className={`glass-card p-6 relative border transition-all duration-300 hover:shadow-xl group cursor-default ${
              p.highlight
                ? "border-primary/30 shadow-lg shadow-primary/5 hover:shadow-primary/15"
                : "border-border/50 hover:border-primary/30 hover:shadow-primary/5"
            }`}
          >
            {p.highlight && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Star size={12} className="fill-primary text-primary" />
                <span className="text-[10px] text-primary font-mono font-semibold uppercase tracking-wider">Featured</span>
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary/80 text-secondary-foreground font-mono border border-border/30">
                  {t}
                </span>
              ))}
            </div>
            <motion.a
              href="https://github.com/itzadmin001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-colors font-medium"
            >
              View on GitHub <ExternalLink size={14} />
            </motion.a>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
