
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Factory, Building, Chip, Trophy, Users } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  const achievements = [{
    icon: <Trophy className="w-5 h-5 text-[#00a5ee]" />,
    metric: "200%",
    label: "Client Satisfaction Increase"
  }, {
    icon: <Factory className="w-5 h-5 text-[#00a5ee]" />,
    metric: "Manufacturing",
    label: "Industry Experience"
  }, {
    icon: <Building className="w-5 h-5 text-[#00a5ee]" />,
    metric: "Real Estate",
    label: "Industry Experience"
  }, {
    icon: <Chip className="w-5 h-5 text-[#00a5ee]" />,
    metric: "Technology",
    label: "Industry Experience"
  }];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,165,238,0.05)_0,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(0,165,238,0.1)_0,transparent_50%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a5ee]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00a5ee]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 mx-auto py-[35px]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center pt-24 md:pt-32"
        >
          {/* Profile Image with Glow Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px -5px rgba(0,165,238,0.3)",
                  "0 0 60px -15px rgba(0,165,238,0.4)",
                  "0 0 40px -5px rgba(0,165,238,0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-50 h-50 mx-auto rounded-full overflow-hidden border-4 border-[#00a5ee]/20 transition-all duration-300 hover:scale-105" // Increased from w-40 h-40 to w-50 h-50
            >
              <img src="/monty-profile.png" alt="Monty Giovenco" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 px-4"
          >
            Hi, I'm Monty Giovenco
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-12 px-4"
          >
            <h2 className="text-xl sm:text-2xl text-[#00a5ee] font-medium tracking-tight mb-4">
              Product & Business Strategist
            </h2>
            <p className="text-base sm:text-lg text-gray-600 tracking-wide leading-relaxed max-w-2xl mx-auto py-[23px] font-medium">
              4 years leading digital transformation initiatives with measurable impact. Specializing in turning complex challenges into scalable solutions.
            </p>
          </motion.div>

          {/* Key Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 px-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-4 backdrop-blur-xl bg-white/80 border-0 hover:bg-white/90 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/experience"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-lg font-medium text-white bg-[#00a5ee] rounded-2xl hover:bg-[#0094d6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-lg font-medium text-[#00a5ee] border-2 border-[#00a5ee] rounded-2xl hover:bg-[#00a5ee]/5 transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
