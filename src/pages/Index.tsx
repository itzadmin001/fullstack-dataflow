import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import CustomCursor from "@/components/CustomCursor";
import GradientMesh from "@/components/GradientMesh";

const Index = () => (
  <>
    <CustomCursor />
    <GradientMesh />
    <ScrollProgress />
    <Navbar />
    <FloatingSocials />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <AnalyticsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
