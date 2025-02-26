
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Code2, LineChart } from "lucide-react";

const Portfolio = () => {
  const categories = [
    {
      title: "Project Management",
      description: "Leading teams and delivering successful outcomes in innovative spaces",
      icon: <Building2 className="h-8 w-8 text-accent" />,
      path: "/portfolio/project-management",
      examples: ["House of Manuela", "HomeVR"],
      gradient: "from-blue-50 to-gray-50",
    },
    {
      title: "Product Development",
      description: "Creating innovative software solutions that drive business growth",
      icon: <Code2 className="h-8 w-8 text-accent" />,
      path: "/portfolio/product-development",
      examples: ["iOS App", "Education Platform", "Pathology Patient Solution"],
      gradient: "from-gray-50 to-blue-50",
    },
    {
      title: "Entrepreneurship",
      description: "Building and scaling successful businesses from concept to execution",
      icon: <LineChart className="h-8 w-8 text-accent" />,
      path: "/portfolio/entrepreneurship",
      examples: ["Art Retail", "Accessory Business", "Book"],
      gradient: "from-blue-50 to-white",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/90 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A curated collection of work spanning project management, product development,
            and entrepreneurial ventures
          </p>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={category.path} className="block h-full">
                <Card className={`h-full group hover:shadow-xl transition-all duration-500 backdrop-blur-lg bg-white/80 border border-gray-100 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-70`} />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {category.icon}
                      </motion.div>
                      <ArrowRight className="h-5 w-5 text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <CardTitle className="text-2xl font-medium text-gray-900 tracking-tight">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {category.examples.map((example) => (
                        <li
                          key={example}
                          className="text-sm text-gray-500 hover:text-accent transition-colors duration-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
