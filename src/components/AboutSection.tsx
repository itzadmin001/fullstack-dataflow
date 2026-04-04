import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Globe, Brain, BarChart3 } from "lucide-react";

const highlights = [
  { icon: BarChart3, text: "BCA Graduate with strong foundation in Data Analytics & Software Development" },
  { icon: Database, text: "Skilled in Python, SQL, and advanced data visualization" },
  { icon: Brain, text: "Strong expertise in Machine Learning, Deep Learning, and Generative AI" },
  { icon: Globe, text: "Full Stack Developer with experience in building scalable, real-world web applications" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Passionate about creating end-to-end data-driven solutions combining analytics + engineering" />
    <div className="grid md:grid-cols-2 gap-5">
      {highlights.map((h, i) => (
        <div key={i} className="glass-card-hover p-6 flex gap-4 items-start">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
            <h.icon size={22} />
          </div>
          <p className="text-muted-foreground leading-relaxed">{h.text}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
