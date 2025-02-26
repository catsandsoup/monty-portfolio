import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
const SkillSection = ({
  title,
  skills
}: {
  title: string;
  skills: string[];
}) => <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => <li key={index} className="text-gray-600">• {skill}</li>)}
    </ul>
  </div>;
const About = () => {
  return <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} className="container mx-auto max-w-4xl">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-4xl font-bold mb-8 text-gray-900 text-center md:text-5xl">About Me</motion.h1>
        
        <div className="space-y-8">
          {/* Professional Summary */}
          <Card className="p-8 backdrop-blur-xl bg-white/80 shadow-lg border-0">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Professional Summary</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                As a Product Development leader with over a decade of experience, I specialize in 
                translating complex business requirements into elegant technical solutions. My approach 
                combines deep technical expertise with strategic business acumen, ensuring that every 
                product not only meets immediate needs but scales for future growth.
              </p>
              <p className="text-lg leading-relaxed">
                From concept to deployment, I pride myself on delivering innovative solutions that drive 
                meaningful impact, while maintaining a strong focus on user experience and technical excellence.
              </p>
            </div>
          </Card>

          {/* Skills Matrix */}
          <Card className="p-8 backdrop-blur-xl bg-white/80 shadow-lg border-0">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">Key Marketable Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <SkillSection title="Technical Project Management" skills={["Visualization project lifecycle management", "Resource coordination and allocation", "Quality control implementation", "Timeline management and prioritization", "Workflow optimization"]} />

              <SkillSection title="Technical Leadership" skills={["Technology evaluation and selection", "Software implementation and customization", "IT infrastructure planning and development", "Cross-platform integration", "Technical problem-solving"]} />

              <SkillSection title="Business Strategy" skills={["Competitive market analysis", "Service development and positioning", "Product innovation", "Strategic planning", "Brand management"]} />

              <SkillSection title="Digital Technology" skills={["Architectural visualization software (SketchUp, Lumion, Twinmotion)", "Web development (WordPress, HTML/CSS/JavaScript)", "3D modeling and rendering", "Virtual tour technology", "Web hosting and file management"]} />

              <SkillSection title="Entrepreneurial Capabilities" skills={["New service conceptualization", "Business opportunity identification", "Strategic pricing", "White-label solution development", "Business development"]} />

              <SkillSection title="Operations Management" skills={["Process standardization", "Technology procurement", "Database management", "File system optimization", "Resource efficiency"]} />

              <SkillSection title="Soft Skills" skills={["Self-directed learning", "Time management", "Multi-disciplinary adaptability", "Change management", "Client relationship management"]} />

              <SkillSection title="Communication Skills" skills={["Marketing content creation", "Technical documentation", "Client presentations", "Brand representation", "Networking"]} />
            </div>
          </Card>
        </div>
      </motion.div>
      <Footer />
    </section>;
};
export default About;