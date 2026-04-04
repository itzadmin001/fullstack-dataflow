import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, BarChart3, Brain, Sparkles, Code2 } from "lucide-react";

const areas = [
  { icon: BarChart3, label: "Data Analytics & Visualization" },
  { icon: Brain, label: "Machine Learning / Deep Learning" },
  { icon: Sparkles, label: "Generative AI" },
  { icon: Code2, label: "Full Stack Development" },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle title="Education" />
    <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <GraduationCap size={28} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-muted-foreground text-sm">Key Learning Areas</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {areas.map((a, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <a.icon size={18} className="text-primary shrink-0" />
            <span className="text-sm text-foreground">{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
