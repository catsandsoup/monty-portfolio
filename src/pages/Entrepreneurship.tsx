
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

const Entrepreneurship = () => {
  const ventures = [
    {
      title: "Venture Development",
      description: "Founded and scaled multiple successful startups from concept to market leadership.",
      achievements: [
        "Secured $2M in seed funding",
        "Achieved product-market fit in 6 months",
        "Built team of 20+ professionals",
      ],
    },
    {
      title: "Strategic Growth",
      description: "Developed and executed growth strategies resulting in significant market expansion.",
      achievements: [
        "300% year-over-year growth",
        "Expanded to 5 new markets",
        "Strategic partnerships with Fortune 500 companies",
      ],
    },
    {
      title: "Market Analysis",
      description: "Conducted comprehensive market research and competitive analysis to identify opportunities.",
      achievements: [
        "Identified $50M market opportunity",
        "Successfully entered 3 emerging markets",
        "Developed innovative go-to-market strategies",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <LineChart className="h-10 w-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Entrepreneurship</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mb-12">
          Building and scaling successful businesses through innovative thinking,
          strategic planning, and effective execution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{venture.title}</h2>
              <p className="text-gray-600 mb-4">{venture.description}</p>
              <ul className="space-y-2">
                {venture.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Entrepreneurship;
