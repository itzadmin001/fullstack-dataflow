import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Globe, Brain, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: BarChart3, text: "BCA Graduate with strong foundation in Data Analytics & Software Development" },
  { icon: Database, text: "Skilled in Python, SQL, and advanced data visualization" },
  { icon: Brain, text: "Strong expertise in Machine Learning, Deep Learning, and Generative AI" },
  { icon: Globe, text: "Full Stack Developer with experience in building scalable, real-world web applications" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Passionate about creating end-to-end data-driven solutions combining analytics + engineering" />
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground leading-relaxed"
        >
          I'm a BCA graduate who combines deep analytical thinking with hands-on development skills.
          From building complex SQL queries to deploying full-stack applications, I bridge the gap between
          data insights and production-ready software.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground leading-relaxed"
        >
          My passion lies in creating intelligent, end-to-end systems — from data collection and analysis
          to ML model deployment and interactive dashboards that drive real business decisions.
        </motion.p>
      </div>
      <div className="grid gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-4 flex gap-4 items-start border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-colors duration-300"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
              <h.icon size={20} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
