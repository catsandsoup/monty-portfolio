
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Scale, Users, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

const SkillSection = ({
  title,
  skills
}: {
  title: string;
  skills: string[];
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">• {skill}</li>
      ))}
    </ul>
  </div>
);

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
        className="container mx-auto max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 text-center md:text-5xl"
        >
          About Me
        </motion.h1>
        
        <div className="space-y-12">
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
            <div className="text-center mb-8">
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

          {/* Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-xl bg-white/80 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-8 text-gray-900 text-center">
                  Skills & Abilities
                </CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <SkillSection
                    title="Technical Project Management"
                    skills={[
                      "Visualization project lifecycle management",
                      "Resource coordination and allocation",
                      "Quality control implementation",
                      "Timeline management and prioritization",
                      "Workflow optimization"
                    ]}
                  />
                  <SkillSection
                    title="Technical Leadership"
                    skills={[
                      "Technology evaluation and selection",
                      "Software implementation and customization",
                      "IT infrastructure planning and development",
                      "Cross-platform integration",
                      "Technical problem-solving"
                    ]}
                  />
                  <SkillSection
                    title="Business Strategy"
                    skills={[
                      "Competitive market analysis",
                      "Service development and positioning",
                      "Product innovation",
                      "Strategic planning",
                      "Brand management"
                    ]}
                  />
                  <SkillSection
                    title="Digital Technology"
                    skills={[
                      "Architectural visualization software (SketchUp, Lumion, Twinmotion)",
                      "Web development (WordPress, HTML/CSS/JavaScript)",
                      "3D modeling and rendering",
                      "Virtual tour technology",
                      "Web hosting and file management"
                    ]}
                  />
                  <SkillSection
                    title="Entrepreneurial Capabilities"
                    skills={[
                      "New service conceptualization",
                      "Business opportunity identification",
                      "Strategic pricing",
                      "White-label solution development",
                      "Business development"
                    ]}
                  />
                  <SkillSection
                    title="Operations Management"
                    skills={[
                      "Process standardization",
                      "Technology procurement",
                      "Database management",
                      "File system optimization",
                      "Resource efficiency"
                    ]}
                  />
                  <SkillSection
                    title="Soft Skills"
                    skills={[
                      "Self-directed learning",
                      "Time management",
                      "Multi-disciplinary adaptability",
                      "Change management",
                      "Client relationship management"
                    ]}
                  />
                  <SkillSection
                    title="Communication Skills"
                    skills={[
                      "Marketing content creation",
                      "Technical documentation",
                      "Client presentations",
                      "Brand representation",
                      "Networking"
                    ]}
                  />
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default About;
