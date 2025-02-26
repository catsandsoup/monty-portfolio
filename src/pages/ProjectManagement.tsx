
import { motion } from "framer-motion";
import { Building2, LineChart, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

const ProjectManagement = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* BackButton positioned outside the main content flow */}
      <div className="absolute left-6 top-6 z-50">
        <BackButton />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Project Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Led the digital transformation and brand evolution of House of Manuela to HomeVR, 
              orchestrating comprehensive project management and business leadership initiatives
              that resulted in 200% growth in online sales.
            </p>
          </motion.div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-pink-100/20 to-blue-100/20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative overflow-hidden backdrop-blur-md bg-white/80 border-0 shadow-lg p-8">
                <div className="mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  Digital Transformation
                </h3>
                <p className="text-4xl font-bold text-accent mb-4">200%</p>
                <p className="text-gray-600">
                  Growth in online sales through strategic digital initiatives and platform optimization
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden backdrop-blur-md bg-white/80 border-0 shadow-lg p-8">
                <div className="mb-4">
                  <LineChart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  Client Experience
                </h3>
                <p className="text-4xl font-bold text-accent mb-4">40%</p>
                <p className="text-gray-600">
                  Reduction in client decision time through implementation of VR visualization platform
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-24 px-6 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            {/* Left Column */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                  Architectural Visualization Management
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Managed the complete lifecycle of visualization projects from receiving architect blueprints to delivering final renders</p>
                  <p>• Coordinated timelines and resources for multiple concurrent visualization projects</p>
                  <p>• Established quality control processes for all architectural renderings and visualizations</p>
                  <p>• Scheduled and prioritized projects to meet client deadlines</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                  Technology Implementation
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Led the implementation of 3DVista panoramic tour technology from research to client deployment</p>
                  <p>• Managed the procurement, assembly, and installation of new workstations and technology infrastructure</p>
                  <p>• Directed the implementation of QNAP network storage solution and database migration</p>
                  <p>• Planned and executed the transition between various visualization software platforms</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                  Strategic Business Leadership
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Conducted regular technology assessments and developed upgrade roadmaps</p>
                  <p>• Performed cost-benefit analysis for technology investments</p>
                  <p>• Researched competitor service offerings, pricing, and market positioning</p>
                  <p>• Developed strategic recommendations for service differentiation</p>
                  <p>• Monitored industry trends and emerging technologies for potential implementation</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                  Brand Evolution & Digital Transformation
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>• Led the strategic rebranding initiative from House of Manuela to HomeVR</p>
                  <p>• Developed comprehensive branding packages combining visualization with digital marketing</p>
                  <p>• Created white-labeled hosting solutions for client virtual tours</p>
                  <p>• Enhanced 3DVista tours with custom features using HTML, CSS, and JavaScript</p>
                  <p>• Established pricing structures for new service offerings</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Evolution Timeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Company Evolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instrumental in transforming a traditional architectural visualization business 
              into a technology-driven real estate solutions provider.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-right md:pr-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">House of Manuela</h3>
                <p className="text-gray-600">Traditional architectural visualization studio focused on static renderings and basic 3D modeling</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:pl-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">HomeVR</h3>
                <p className="text-gray-600">Innovative digital platform providing immersive VR experiences and comprehensive real estate visualization solutions</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement;

