
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Scale, Users, ShieldCheck, LayoutDashboard, Code2, ChartLine, MessagesSquare } from "lucide-react";
import Footer from "@/components/Footer";

const skillCategories = [
  {
    title: "Technical Project Management",
    icon: <LayoutDashboard className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Visualization project lifecycle management",
      "Resource coordination and allocation",
      "Quality control implementation",
      "Timeline management and prioritization",
      "Workflow optimization"
    ]
  },
  {
    title: "Technical Leadership",
    icon: <Code2 className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Technology evaluation and selection",
      "Software implementation and customization",
      "IT infrastructure planning and development",
      "Cross-platform integration",
      "Technical problem-solving"
    ]
  },
  {
    title: "Business Strategy",
    icon: <ChartLine className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Competitive market analysis",
      "Service development and positioning",
      "Product innovation",
      "Strategic planning",
      "Brand management"
    ]
  },
  {
    title: "Digital Technology",
    icon: <Code2 className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Architectural visualization software",
      "Web development",
      "3D modeling and rendering",
      "Virtual tour technology",
      "Web hosting and file management"
    ]
  },
  {
    title: "Entrepreneurial Capabilities",
    icon: <Brain className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "New service conceptualization",
      "Business opportunity identification",
      "Strategic pricing",
      "White-label solution development",
      "Business development"
    ]
  },
  {
    title: "Operations Management",
    icon: <LayoutDashboard className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Process standardization",
      "Technology procurement",
      "Database management",
      "File system optimization",
      "Resource efficiency"
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Self-directed learning",
      "Time management",
      "Multi-disciplinary adaptability",
      "Change management",
      "Client relationship management"
    ]
  },
  {
    title: "Communication Skills",
    icon: <MessagesSquare className="h-6 w-6 text-[#00a5ee]" />,
    skills: [
      "Marketing content creation",
      "Technical documentation",
      "Client presentations",
      "Brand representation",
      "Networking"
    ]
  }
];

const ethosPrinciples = [
  {
    icon: <Brain className="h-6 w-6 text-[#00a5ee]" />,
    title: "Embracing Discomfort",
    description: "Thriving in challenging situations and viewing obstacles as opportunities for growth and innovation."
  },
  {
    icon: <Scale className="h-6 w-6 text-[#00a5ee]" />,
    title: "Complete Ownership",
    description: "Taking full responsibility for both successes and setbacks, ensuring accountability at every level."
  },
  {
    icon: <Users className="h-6 w-6 text-[#00a5ee]" />,
    title: "Leadership Through Trust",
    description: "Building strong relationships and leading through influence, regardless of formal authority."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#00a5ee]" />,
    title: "Team Protection",
    description: "Facilitating seamless collaboration while shielding the team from unnecessary complexity."
  }
];

const About = () => {
  return (
    <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-7xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 text-center md:text-5xl"
        >
          About Me
        </motion.h1>
        
        <div className="space-y-24">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-xl bg-white/80 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-6 text-gray-900">
                  Professional Summary
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 space-y-4">
                  <p>
                    As a project manager and product developer with over 4 years of experience, I specialise in translating complex business requirements into elegant technical solutions. My approach combines technical expertise with discovering customer wants and needs, ensuring that every product not only meets immediate requirements but scales for future growth.
                  </p>
                  <p>
                    From concept to deployment, I pride myself on delivering innovative solutions that drive meaningful impact, while maintaining a strong focus on user experience and technical excellence.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Leadership Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Leadership Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Driving success through evidence-based decision making and collaborative leadership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ethosPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-xl bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4">{principle.icon}</div>
                      <CardTitle className="text-xl font-medium text-gray-900">
                        {principle.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Abilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Skills & Abilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive overview of my technical expertise and professional capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-xl bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        {category.icon}
                        <CardTitle className="text-xl font-medium text-gray-900">
                          {category.title}
                        </CardTitle>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg className="text-[#00a5ee] mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default About;
