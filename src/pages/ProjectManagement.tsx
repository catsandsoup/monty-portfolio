
import Hero from "@/components/project-management/Hero";
import ExperienceSections from "@/components/project-management/ExperienceSections";
import KeyMetrics from "@/components/project-management/KeyMetrics";
import Footer from "@/components/Footer";

const ProjectManagement = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero />
      <KeyMetrics />
      <ExperienceSections />
      <Footer />
    </div>
  );
};

export default ProjectManagement;
