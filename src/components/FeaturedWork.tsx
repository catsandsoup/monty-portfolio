
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Code2, LineChart } from "lucide-react";

const cards = [
  {
    title: "Project Management",
    icon: Building2,
    description: "Leading cross-functional teams to deliver groundbreaking solutions that drive business transformation.",
    link: "/portfolio/project-management",
    gradient: "from-[#00a5ee]/10 to-[#0094d6]/5",
    delay: 0,
  },
  {
    title: "Product Development",
    icon: Code2,
    description: "Crafting intuitive digital experiences that seamlessly blend innovation with user-centered design.",
    link: "/portfolio/product-development",
    gradient: "from-[#00a5ee]/5 to-[#0094d6]/10",
    delay: 0.2,
  },
  {
    title: "Entrepreneurship",
    icon: LineChart,
    description: "Building and scaling successful ventures through strategic vision and market insights.",
    link: "/portfolio/entrepreneurship",
    gradient: "from-[#00a5ee]/8 to-[#0094d6]/8",
    delay: 0.4,
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
        >
          My Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={card.link}
                className="block h-full"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${card.gradient} backdrop-blur-xl border border-[#00a5ee]/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}>
                  <card.icon className="w-12 h-12 text-[#00a5ee] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <div className="flex items-center text-[#00a5ee] font-medium">
                    Learn More
                    <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
