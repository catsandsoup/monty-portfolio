
import Hero from "@/components/project-management/Hero";
import KeyMetrics from "@/components/project-management/KeyMetrics";
import ExperienceSections from "@/components/project-management/ExperienceSections";
import CompanyEvolution from "@/components/project-management/CompanyEvolution";

const Entrepreneurship = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <KeyMetrics />
      <ExperienceSections />
      <CompanyEvolution />
    </div>
  );
};

export default Entrepreneurship;
