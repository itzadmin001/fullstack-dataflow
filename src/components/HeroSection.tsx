import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Send } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Subtle bg glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center z-10 max-w-3xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profileImg}
              alt="Yogesh Kumar"
              width={160}
              height={160}
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30 shadow-xl shadow-primary/10"
            />
            <div className="absolute inset-0 rounded-full animate-[pulse-glow_3s_infinite]" />
          </div>
        </div>

        <p className="text-primary font-mono text-sm tracking-wider mb-3 uppercase">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Yogesh Kumar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2">
          Data Analyst &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; ML/DL &amp; Generative AI Enthusiast
        </p>
        <p className="text-muted-foreground/80 italic mb-8 max-w-xl mx-auto">
          "I don't just analyze data — I build systems that use it."
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
          >
            View Projects <ArrowDown size={16} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 flex items-center gap-2"
          >
            Contact Me <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
