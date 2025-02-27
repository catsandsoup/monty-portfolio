
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Trophy, Target, Users } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  const achievements = [
    {
      icon: <Trophy className="w-5 h-5 text-[#00a5ee]" />,
      metric: "200%",
      label: "Client Satisfaction Increase",
    },
    {
      icon: <Target className="w-5 h-5 text-[#00a5ee]" />,
      metric: "7+",
      label: "Projects Delivered",
    },
    {
      icon: <Users className="w-5 h-5 text-[#00a5ee]" />,
      metric: "4+ Years",
      label: "Leadership Experience",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,165,238,0.05)_0,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(0,165,238,0.1)_0,transparent_50%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a5ee]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00a5ee]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center pt-golden-lg md:pt-section"
        >
          {/* Profile Image with Glow Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-golden-lg"
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
              className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#00a5ee]/20 transition-all duration-300 hover:scale-105"
            >
              <img
                src="/monty-profile.png"
                alt="Monty Giovenco"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sf-display font-semibold text-[48px] leading-[52px] tracking-[-0.5px] mb-golden-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600"
          >
            Hi, I'm Monty Giovenco
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-golden-lg"
          >
            <h2 className="font-sf-display font-semibold text-[28px] leading-[32px] tracking-[-0.5px] text-[#00a5ee] mb-4">
              Product & Business Strategist
            </h2>
            <p className="font-sf-text text-[17px] leading-[22px] tracking-[-0.25px] text-gray-600 max-w-2xl mx-auto">
              4+ years leading digital transformation initiatives with measurable impact.
              Specializing in turning complex challenges into scalable solutions.
            </p>
          </motion.div>

          {/* Key Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-golden-lg"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              >
                <Card className="p-6 backdrop-blur-xl bg-white/80 border-0 hover:bg-white/90 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="font-sf-display text-[28px] leading-[32px] tracking-[-0.5px] font-semibold text-gray-900 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="font-sf-text text-[17px] leading-[22px] tracking-[-0.25px] text-gray-600">
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
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/experience"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-sf-text text-[17px] leading-[22px] tracking-[-0.25px] font-medium text-white bg-[#00a5ee] rounded-2xl hover:bg-[#0094d6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-sf-text text-[17px] leading-[22px] tracking-[-0.25px] font-medium text-[#00a5ee] border-2 border-[#00a5ee] rounded-2xl hover:bg-[#00a5ee]/5 transition-all duration-300"
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
