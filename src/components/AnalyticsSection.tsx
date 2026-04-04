import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const barData = [65, 80, 45, 90, 55, 70, 85];
const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const pieSegments = [
  { pct: 35, color: "hsl(199,89%,48%)", label: "SQL & Analytics" },
  { pct: 25, color: "hsl(262,83%,58%)", label: "ML / AI" },
  { pct: 25, color: "hsl(142,76%,36%)", label: "Full Stack" },
  { pct: 15, color: "hsl(215,20%,55%)", label: "Other" },
];

const AnalyticsSection = () => {
  let cumulative = 0;
  const conicStops = pieSegments.map((s) => {
    const start = cumulative;
    cumulative += s.pct;
    return `${s.color} ${start}% ${cumulative}%`;
  }).join(", ");

  return (
    <SectionWrapper id="analytics">
      <SectionTitle title="Analytics Showcase" subtitle="Data storytelling, dashboard design, and insight generation" />
      <div className="grid md:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-5 text-primary">
            <BarChart3 size={20} />
            <h3 className="font-semibold">Weekly Metrics</h3>
          </div>
          <div className="flex items-end gap-2 h-40">
            {barData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                  className="w-full rounded-t bg-gradient-to-t from-primary/80 to-primary"
                />
                <span className="text-[10px] text-muted-foreground">{barLabels[i]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-5 text-primary">
            <TrendingUp size={20} />
            <h3 className="font-semibold">Growth Trend</h3>
          </div>
          <svg viewBox="0 0 200 100" className="w-full h-40">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(199,89%,48%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(199,89%,48%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,80 L30,60 L60,70 L90,40 L120,50 L150,25 L180,30 L200,10 L200,100 L0,100Z" fill="url(#lineGrad)" />
            <motion.path
              d="M0,80 L30,60 L60,70 L90,40 L120,50 L150,25 L180,30 L200,10"
              fill="none"
              stroke="hsl(199,89%,48%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {[[0,80],[30,60],[60,70],[90,40],[120,50],[150,25],[180,30],[200,10]].map(([x,y],i)=>(
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="hsl(199,89%,48%)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.08 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-5 text-primary">
            <PieChart size={20} />
            <h3 className="font-semibold">Skill Distribution</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-32 h-32 rounded-full"
              style={{ background: `conic-gradient(${conicStops})` }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-card" />
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
              {pieSegments.map((s,i)=>(
                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full" style={{background:s.color}} />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AnalyticsSection;
