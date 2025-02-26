
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Code2, LineChart } from "lucide-react";

const cards = [
  {
    title: "Project Management",
    icon: Building2,
    description: "Leading cross-functional teams to deliver groundbreaking solutions that drive business transformation.",
    link: "/portfolio/project-management",
  },
  {
    title: "Product Development",
    icon: Code2,
    description: "Crafting intuitive digital experiences that seamlessly blend innovation with user-centered design.",
    link: "/portfolio/product-development",
  },
  {
    title: "Entrepreneurship",
    icon: LineChart,
    description: "Building and scaling successful ventures through strategic vision and market insights.",
    link: "/portfolio/entrepreneurship",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
        >
          My Roles + Featured Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to={card.link}
                className="group block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-white/30 dark:from-gray-800/50 dark:to-gray-900/30" />
                  <div className="relative z-10">
                    <card.icon className="w-12 h-12 text-[#00a5ee] mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
