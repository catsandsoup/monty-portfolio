
import ExperienceItem from "./ExperienceItem";
import experienceData from "./experienceData";

const ExperienceSections = () => {
  return (
    <section className="py-24 px-6 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <div className="space-y-16">
            <ExperienceItem {...experienceData.businessAnalysis} />
            <ExperienceItem {...experienceData.marketing} />
          </div>
          <div className="space-y-16">
            <ExperienceItem {...experienceData.operations} />
            <ExperienceItem {...experienceData.technology} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSections;
