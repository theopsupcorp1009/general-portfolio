import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import SkillsPreview from "@/components/SkillsPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceEducationPreview from "@/components/ExperienceEducationPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <ExperienceEducationPreview />
      <ContactCTA />
    </div>
  );
}
