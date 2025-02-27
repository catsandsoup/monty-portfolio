
import ExperienceItem from "./ExperienceItem";
import experienceData from "./experienceData";

const ExperienceSections = () => {
  return (
    <section className="px-6 backdrop-blur-xl py-[32px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <div className="space-y-16">
            <ExperienceItem {...experienceData.architecturalVisualization} />
            <ExperienceItem {...experienceData.technology} />
          </div>
          <div className="space-y-16">
            <ExperienceItem {...experienceData.business} />
            <ExperienceItem {...experienceData.brandEvolution} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSections;
