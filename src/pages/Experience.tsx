
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Code2, LineChart, Scale, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
const Experience = () => {
  const categories = [
    {
      title: "Business Leadership",
      description: "Driving organisational success through strategic vision and operational excellence",
      icon: Scale,
      path: "/portfolio/naturaheal",
      examples: ["Strategic Decision Making", "Organisational Development", "Change Management", "Business Growth Strategy"],
      gradient: "from-[#00a5ee]/5 to-white",
      metrics: {
        value: "40%",
        label: "Cost Optimisation"
      }
    },
    {
      title: "Entrepreneurship",
      description: "Building and scaling successful ventures through strategic vision",
      icon: LineChart,
      path: "/portfolio/entrepreneurship",
      examples: ["Business Development", "Market Analysis & Strategy", "Growth & Innovation", "Digital Transformation"],
      gradient: "from-[#00a5ee]/5 to-white",
      metrics: {
        value: "3",
        label: "Personal Projects"
      }
    },
    {
      title: "Product Development",
      description: "We turn your off the plan house and land developments that don't – as yet – exist into beautiful, immersive virtual experiences.",
      icon: Code2,
      path: "/portfolio/product-development",
      examples: ["Digital Product Strategy", "User Experience Design", "Technical Leadership", "Agile Development"],
      gradient: "from-[#00a5ee]/5 to-white",
      metrics: {
        value: "4",
        label: "Projects Delivered"
      }
    },
    {
      title: "Project Management",
      description: "Leading strategic initiatives and delivering successful outcomes in innovative spaces",
      icon: Building2,
      path: "/portfolio/project-management",
      examples: ["Strategic Planning & Roadmap Development", "Cross-functional Team Leadership", "Process Optimisation & Implementation", "Stakeholder Management"],
      gradient: "from-[#00a5ee]/5 to-white",
      metrics: {
        value: "200%",
        label: "Increase in Client Satisfaction"
      }
    }
  ];
  return <motion.section initial={{
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
          <motion.button className="group relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#00a5ee] shadow-xl mb-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00a5ee] focus:ring-offset-2" whileHover={{
          scale: 1.02
        }} animate={{
          boxShadow: ["0 0 40px -5px rgba(0,165,238,0.3)", "0 0 60px -15px rgba(0,165,238,0.4)", "0 0 40px -5px rgba(0,165,238,0.3)"]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}>
            <img src="/monty-profile.png" alt="View Monty's profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              
            </div>
          </motion.button>
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
              A showcase of strategic leadership, innovative product development, 
              and successful business transformation initiatives
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => <motion.div key={category.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Link to={category.path} className="block h-full group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a5ee] focus-visible:ring-offset-2 rounded-2xl">
                <Card className="h-full relative overflow-hidden backdrop-blur-xl bg-white/90 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-70`} />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div whileHover={{
                    scale: 1.1
                  }} transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}>
                        <category.icon className="w-14 h-14 text-[#00a5ee]" />
                      </motion.div>
                      <motion.div initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1
                  }} className="text-right">
                        <div className="text-3xl font-semibold text-[#00a5ee]">{category.metrics.value}</div>
                        <div className="text-sm text-gray-600">{category.metrics.label}</div>
                      </motion.div>
                    </div>
                    <CardTitle className="text-2xl font-medium text-gray-900 tracking-tight flex items-center justify-between">
                      {category.title}
                      <ChevronRight className="w-5 h-5 text-[#00a5ee] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {category.examples.map((example, idx) => <motion.li key={example} initial={{
                    opacity: 0,
                    x: -10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.2 + idx * 0.1
                  }} className="text-sm text-gray-500 hover:text-[#00a5ee] transition-colors duration-300 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a5ee]/40" />
                          <span>{example}</span>
                        </motion.li>)}
                    </div>
                  </CardContent>
                  <div className="absolute bottom-6 right-6 text-sm text-[#00a5ee] font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    View Details
                  </div>
                </Card>
              </Link>
            </motion.div>)}
        </div>
      </div>
      <Footer />
    </motion.section>;
};
export default Experience;
