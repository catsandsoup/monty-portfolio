
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Trophy, Target, Users, Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { optimizedFadeIn, optimizedAnimationProps } from "@/lib/optimized-animations";
import { useGPUAnimation } from "@/hooks/use-gpu-animation";
import { trackAnimation } from "@/lib/animation-performance-monitor";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useGPUAnimation<HTMLDivElement>({
    enableWillChange: true,
    optimizePaint: true
  });

  // Delay animations until after mount to reduce initial load lag
  useEffect(() => {
    // Use requestAnimationFrame to push animation to next frame
    const rafId = requestAnimationFrame(() => {
      const timeoutId = setTimeout(() => setIsLoaded(true), 50);
      return () => clearTimeout(timeoutId);
    });

    // Track this component's animations
    let cleanup = () => {};
    
    try {
      cleanup = trackAnimation("Hero", "main") || (() => {});
    } catch (err) {
      console.warn("Failed to track animation:", err);
    }
    
    return () => {
      cancelAnimationFrame(rafId);
      try {
        cleanup();
      } catch (err) {
        console.warn("Failed to cleanup animation tracking:", err);
      }
    };
  }, []);

  const achievements = [{
    icon: <Trophy className="w-5 h-5 text-[#00a5ee]" />,
    metric: "200%",
    label: "Client Satisfaction Increase"
  }, {
    icon: <Target className="w-5 h-5 text-[#00a5ee]" />,
    metric: "10+",
    label: "Projects Delivered"
  }, {
    icon: <Users className="w-5 h-5 text-[#00a5ee]" />,
    metric: "4+ Years",
    label: "Leadership Experience"
  }, {
    icon: <Briefcase className="w-5 h-5 text-[#00a5ee]" />,
    metric: "3",
    label: "Industries of Experience by Age 25"
  }];

  // Memoize achievement cards to reduce re-renders
  const achievementCards = achievements.map((achievement, index) => (
    <motion.div 
      key={achievement.label} 
      initial={{
        opacity: 0,
        y: 10
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        duration: 0.3,
        delay: 0.1 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }} 
      style={{
        willChange: 'opacity, transform'
      }}
    >
      <Card className="p-4 backdrop-blur-sm bg-white/80 border-0 hover:bg-white/90 transition-all duration-300">
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
  ));

  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={containerRef}>
      {/* Simplified background with fewer gradient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,165,238,0.03)_0,transparent_50%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a5ee]/5 rounded-full blur-3xl -z-10" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 mx-auto py-8 mt-12">
        {isLoaded && (
          <motion.div 
            variants={optimizedFadeIn} 
            {...optimizedAnimationProps} 
            className="max-w-4xl mx-auto text-center pt-12 md:pt-24" 
            style={{
              willChange: 'opacity, transform'
            }}
          >
            {/* Profile Image with simplified animation */}
            <motion.div 
              initial={{
                opacity: 0
              }} 
              animate={{
                opacity: 1
              }} 
              transition={{
                duration: 0.5
              }} 
              className="mb-12" 
              style={{
                willChange: 'opacity'
              }}
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#00a5ee]/20 transition-all duration-300 hover:scale-105">
                <img 
                  src="/monty-profile.png" 
                  alt="Monty Giovenco" 
                  className="w-full h-full object-cover" 
                  loading="eager" 
                  width={160} 
                  height={160} 
                />
              </div>
            </motion.div>

            <motion.h1 
              variants={optimizedFadeIn} 
              {...optimizedAnimationProps} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 px-4 py-4" 
              style={{
                willChange: 'opacity, transform'
              }}
            >
              Monty Giovenco
            </motion.h1>

            <motion.div 
              variants={optimizedFadeIn} 
              {...optimizedAnimationProps} 
              className="relative mb-12 px-4" 
              style={{
                willChange: 'opacity, transform'
              }}
            >
              <h2 className="text-xl text-[#00a5ee] font-medium tracking-tight mb-4 sm:text-4xl">
                Business Leadership &amp; Project Development
              </h2>
              <p className="text-base tracking-wide leading-relaxed max-w-2xl mx-auto py-4 font-normal sm:text-2xl text-zinc-700">
                Leading business transformation initiatives, and turning complex challenges into profitable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-8">
              {achievementCards}
            </div>

            <motion.div 
              variants={optimizedFadeIn} 
              {...optimizedAnimationProps} 
              transition={{
                delay: 0.4
              }} 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4" 
              style={{
                willChange: 'opacity, transform'
              }}
            >
              <Link to="/experience" className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-lg font-medium text-white bg-[#00a5ee] rounded-2xl hover:bg-[#0094d6] transition-all duration-300 shadow-lg hover:shadow-xl">
                View My Work
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link to="/contact" className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-lg font-medium text-[#00a5ee] border-2 border-[#00a5ee] rounded-2xl hover:bg-[#00a5ee]/5 transition-all duration-300">
                Get in Touch
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
