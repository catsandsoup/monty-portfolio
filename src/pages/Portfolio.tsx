
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
      examples: ["House of Manuela", "HomeVR", "Enterprise Solutions"],
    },
    {
      title: "Product Development",
      description: "Creating innovative software solutions that drive business growth",
      icon: <Code2 className="h-8 w-8 text-accent" />,
      path: "/portfolio/product-development",
      examples: ["Software Architecture", "Mobile Applications", "Web Platforms"],
    },
    {
      title: "Entrepreneurship",
      description: "Building and scaling successful businesses from concept to execution",
      icon: <LineChart className="h-8 w-8 text-accent" />,
      path: "/portfolio/entrepreneurship",
      examples: ["Venture Development", "Strategic Growth", "Market Analysis"],
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.path} className="block h-full">
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {category.icon}
                      <ArrowRight className="h-5 w-5 text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example) => (
                        <li
                          key={example}
                          className="text-sm text-gray-600 hover:text-accent transition-colors"
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
