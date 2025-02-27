
import Hero from "@/components/naturaheal/Hero";
import KeyMetrics from "@/components/naturaheal/KeyMetrics";
import ExperienceSections from "@/components/naturaheal/ExperienceSections";
import CompanyEvolution from "@/components/naturaheal/CompanyEvolution";

const NaturaHeal = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
      <Hero />
      <KeyMetrics />
      <ExperienceSections />
      <CompanyEvolution />
    </div>
  );
};

export default NaturaHeal;
