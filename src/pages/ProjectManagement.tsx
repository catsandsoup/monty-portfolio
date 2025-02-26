
import { motion } from "framer-motion";
import { Building2, PresentationScreen, Network, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProjectManagement = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const projects = [
    {
      title: "House of Manuela",
      description: "Led the transformation of a traditional business into a digital-first enterprise, resulting in 200% growth in online sales.",
      duration: "2021 - 2022",
      role: "Project Lead",
      icon: <Building2 className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "HomeVR",
      description: "Managed the development and launch of an innovative VR platform for real estate visualization, reducing client decision time by 40%.",
      duration: "2020 - 2021",
      role: "Technical Project Manager",
      icon: <PresentationScreen className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Enterprise Solutions",
      description: "Orchestrated the implementation of enterprise-wide digital transformation initiatives across multiple departments.",
      duration: "2019 - 2020",
      role: "Program Manager",
      icon: <Network className="h-6 w-6 text-gray-600" />,
    },
  ];

  const experienceSections = [
    {
      title: "Architectural Visualization Project Management",
      content: [
        "Managed the complete lifecycle of visualization projects from receiving architect blueprints to delivering final renders",
        "Coordinated timelines and resources for multiple concurrent visualization projects",
        "Established quality control processes for all architectural renderings and visualizations",
        "Scheduled and prioritized projects to meet client deadlines",
      ],
    },
    {
      title: "Technology Implementation Projects",
      content: [
        "Led the implementation of 3DVista panoramic tour technology from research to client deployment",
        "Managed the procurement, assembly, and installation of new workstations and technology infrastructure",
        "Directed the implementation of QNAP network storage solution and database migration",
        "Planned and executed the transition between various visualization software platforms (SketchUp, Lumion, Twinmotion)",
      ],
    },
    {
      title: "Web Services Development",
      content: [
        "Managed the company website development using WordPress",
        "Led the implementation of secure client access portals for project review",
        "Coordinated the development of custom hosting and white-labeling solutions for client virtual tours",
      ],
    },
    {
      title: "Workflow Optimization",
      content: [
        "Developed standard operating procedures for all visualization processes",
        "Created efficient workflows between various software platforms to streamline production",
        "Implemented file management systems for large-scale visualization assets",
      ],
    },
  ];

  const leadershipSections = [
    {
      title: "Strategic Technology Planning",
      content: [
        "Conducted regular technology assessments and developed upgrade roadmaps",
        "Performed cost-benefit analysis for technology investments",
        "Researched and evaluated industry-leading visualization software to maintain competitive advantage",
        "Made executive decisions on software purchasing based on business requirements",
      ],
    },
    {
      title: "Market Research & Competitive Analysis",
      content: [
        "Researched competitor service offerings, pricing, and market positioning",
        "Analyzed competitor project portfolios to identify market gaps and opportunities",
        "Developed strategic recommendations for service differentiation",
        "Monitored industry trends and emerging technologies for potential implementation",
      ],
    },
    {
      title: "Product & Service Development",
      content: [
        "Conceptualized and introduced panoramic virtual tour services using 3DVista",
        "Developed comprehensive branding packages combining visualization with digital marketing",
        "Created white-labeled hosting solutions for client virtual tours",
        "Enhanced 3DVista tours with custom features using HTML, CSS, and JavaScript",
      ],
    },
    {
      title: "Business Operations",
      content: [
        "Established pricing structures for new service offerings",
        "Managed budgets for technology procurement",
        "Optimized resource allocation across projects to maximize efficiency",
        "Developed standardized client deliverable specifications",
        "Represented the company in marketing videos and networking events",
      ],
    },
    {
      title: "Brand Transition Management",
      content: [
        "Managed the rebranding process from House of Manuela to HomeVR",
        "Maintained client relationships during brand transition",
        "Contributed to strategic planning for future brand positioning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Project Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Professional Experience Portfolio: Project Management & Business Leadership
          </p>
        </motion.div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-pink-100/20 to-blue-100/20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{project.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {project.role} | {project.duration}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-gray-900">
            Project Management Experience
          </h2>
          <div className="space-y-6">
            {experienceSections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.title ? null : section.title
                    )
                  }
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform",
                      expandedSection === section.title && "transform rotate-180"
                    )}
                  />
                </button>
                {expandedSection === section.title && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6"
                  >
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li key={index} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-gray-900">
            Business Leadership Experience
          </h2>
          <div className="space-y-6">
            {leadershipSections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.title ? null : section.title
                    )
                  }
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform",
                      expandedSection === section.title && "transform rotate-180"
                    )}
                  />
                </button>
                {expandedSection === section.title && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6"
                  >
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li key={index} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-600 italic text-center"
          >
            All responsibilities executed while working part-time and maintaining
            full-time studies, from age 22.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement;
