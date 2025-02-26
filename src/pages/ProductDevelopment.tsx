
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const ProductDevelopment = () => {
  const projects = [
    {
      title: "Software Architecture",
      description: "Designed and implemented scalable microservices architecture supporting millions of daily transactions.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
      impact: "99.99% uptime achieved",
    },
    {
      title: "Mobile Applications",
      description: "Led the development of cross-platform mobile applications for enterprise clients.",
      technologies: ["React Native", "Flutter", "Firebase"],
      impact: "500K+ active users",
    },
    {
      title: "Web Platforms",
      description: "Created innovative web solutions focusing on performance and user experience.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      impact: "40% improvement in load times",
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
        <div className="flex items-center gap-4 mb-8">
          <Code2 className="h-10 w-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Product Development</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mb-12">
          Building innovative software solutions that drive business growth through
          cutting-edge technology and user-centered design principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-accent">{project.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDevelopment;
