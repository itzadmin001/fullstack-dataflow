import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { ExternalLink, Star } from "lucide-react";

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
        <div
          key={i}
          className={`glass-card-hover p-6 relative ${
            p.highlight ? "glow-border" : ""
          }`}
        >
          {p.highlight && (
            <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-primary font-mono">
              <Star size={14} /> Highlight
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {p.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/itzadmin001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-colors"
          >
            View on GitHub <ExternalLink size={14} />
          </a>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
