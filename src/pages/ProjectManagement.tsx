
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const ProjectManagement = () => {
  const projects = [
    {
      title: "House of Manuela",
      description: "Led the transformation of a traditional business into a digital-first enterprise, resulting in 200% growth in online sales.",
      duration: "2021 - 2022",
      role: "Project Lead",
    },
    {
      title: "HomeVR",
      description: "Managed the development and launch of an innovative VR platform for real estate visualization, reducing client decision time by 40%.",
      duration: "2020 - 2021",
      role: "Technical Project Manager",
    },
    {
      title: "Enterprise Solutions",
      description: "Orchestrated the implementation of enterprise-wide digital transformation initiatives across multiple departments.",
      duration: "2019 - 2020",
      role: "Program Manager",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <Building2 className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Project Management</h1>
        </div>
        <p className="text-gray-700 text-lg max-w-2xl mb-12">
          Leading teams and delivering successful outcomes through strategic planning,
          effective communication, and innovative problem-solving approaches.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h2>
              <div className="text-sm font-medium text-blue-600 mb-3">
                {project.role} | {project.duration}
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectManagement;
