import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Database, Globe, Brain, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const highlights = [
  { icon: BarChart3, text: "BCA Graduate with strong foundation in Data Analytics & Software Development", label: "Analytics" },
  { icon: Database, text: "Skilled in Python, SQL, and advanced data visualization", label: "Data" },
  { icon: Brain, text: "Strong expertise in Machine Learning, Deep Learning, and Generative AI", label: "AI / ML" },
  { icon: Globe, text: "Full Stack Developer with experience in building scalable, real-world web applications", label: "Full Stack" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Passionate about creating end-to-end data-driven solutions combining analytics + engineering" />
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-5">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground leading-relaxed text-[15px]"
        >
          I'm a BCA graduate who combines deep analytical thinking with hands-on development skills.
          From building complex SQL queries to deploying full-stack applications, I bridge the gap between
          data insights and production-ready software.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed text-[15px]"
        >
          My passion lies in creating intelligent, end-to-end systems — from data collection and analysis
          to ML model deployment and interactive dashboards that drive real business decisions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex gap-8 pt-2"
        >
          {[
            { num: "10+", label: "Projects" },
            { num: "4+", label: "Tech Stacks" },
            { num: "∞", label: "Curiosity" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.num}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TiltCard className="glass-card p-5 h-full border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary mb-3 w-fit">
                <h.icon size={20} />
              </div>
              <h4 className="text-sm font-semibold mb-1.5">{h.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
