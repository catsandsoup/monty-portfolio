
import BackButton from "@/components/BackButton";
import Hero from "@/components/project-management/Hero";
import KeyMetrics from "@/components/project-management/KeyMetrics";
import ExperienceSections from "@/components/project-management/ExperienceSections";
import CompanyEvolution from "@/components/project-management/CompanyEvolution";

const ProductDevelopment = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute left-6 top-6 z-50">
        <BackButton />
      </div>
      
      <Hero />
      <KeyMetrics />
      <ExperienceSections />
      <CompanyEvolution />
    </div>
  );
};

export default ProductDevelopment;
