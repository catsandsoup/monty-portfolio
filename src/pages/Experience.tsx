import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Code2, LineChart, Scale } from "lucide-react";
import Footer from "@/components/Footer";

const Experience = () => {
  const categories = [{
    title: "Project Management",
    description: "Leading strategic initiatives and delivering successful outcomes in innovative spaces",
    icon: <Building2 className="h-8 w-8 text-[#00a5ee]" />,
    path: "/portfolio/project-management",
    examples: ["Strategic Planning & Roadmap Development", "Cross-functional Team Leadership", "Process Optimization & Implementation", "Stakeholder Management"],
    gradient: "from-[#00a5ee]/5 to-white"
  }, {
    title: "Product Development",
    description: "Creating innovative software solutions that drive business transformation",
    icon: <Code2 className="h-8 w-8 text-[#00a5ee]" />,
    path: "/portfolio/product-development",
    examples: ["Digital Product Strategy", "User Experience Design", "Technical Leadership", "Agile Development"],
    gradient: "from-white via-[#00a5ee]/5 to-white"
  }, {
    title: "Entrepreneurship",
    description: "Building and scaling successful ventures through strategic vision",
    icon: <LineChart className="h-8 w-8 text-[#00a5ee]" />,
    path: "/portfolio/entrepreneurship",
    examples: ["Business Development", "Market Analysis & Strategy", "Growth & Innovation", "Digital Transformation"],
    gradient: "from-white to-[#00a5ee]/5"
  }, {
    title: "Business Leadership",
    description: "Driving organizational success through strategic vision and operational excellence",
    icon: <Scale className="h-8 w-8 text-[#00a5ee]" />,
    path: "/NaturaHeal",
    examples: ["Strategic Decision Making", "Organizational Development", "Change Management", "Business Growth Strategy"],
    gradient: "from-[#00a5ee]/5 via-white to-[#00a5ee]/5"
  }];

  return (
    <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Profile */}
      <div className="relative pt-40 pb-16 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#00a5ee]/5 to-transparent">
        <div className="absolute inset-0 bg-grid-white/[0.02] my-0" />
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#00a5ee] shadow-xl mb-6">
            <img src="/monty-profile.png" alt="Monty Giovenco" className="w-full h-full object-cover" />
          </div>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Experience & Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A showcase of strategic leadership, innovative product development, 
              and successful business transformation initiatives
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-6 py-[42px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={category.path}>
                <Card className="h-full group relative overflow-hidden backdrop-blur-xl bg-white/90 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-70`} />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {category.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-2xl font-medium text-gray-900 tracking-tight">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {category.examples.map((example, idx) => (
                        <motion.li
                          key={example}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="text-sm text-gray-500 hover:text-[#00a5ee] transition-colors duration-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a5ee]/40" />
                          <span>{example}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default Experience;
