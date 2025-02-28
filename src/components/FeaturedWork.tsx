import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Code2, LineChart, Scale } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fadeIn, sectionAnimation, iconAnimation } from "@/lib/animation";
import { colors, typography, glassMorphism } from "@/lib/design-tokens";

// Alphabetized cards based on title
const cards = [{
  title: "Business Leadership",
  icon: Scale,
  description: "Driving organisational success through strategic vision and operational excellence.",
  link: "/portfolio/naturaheal",
  delay: 0
}, {
  title: "Entrepreneurship",
  icon: LineChart,
  description: "Building and scaling successful ventures through strategic vision and market insights.",
  link: "/portfolio/entrepreneurship",
  delay: 0.1
}, {
  title: "Product Development",
  icon: Code2,
  description: "Crafting intuitive digital experiences that seamlessly blend innovation with user-centred design.",
  link: "/portfolio/product-development",
  delay: 0.2
}, {
  title: "Project Management",
  icon: Building2,
  description: "Leading cross-functional teams to deliver groundbreaking solutions that drive business transformation.",
  link: "/portfolio/project-management",
  delay: 0.3
}];
const FeaturedWork = () => {
  return <section className="relative overflow-hidden py-20">
      <div className={`absolute inset-0 ${colors.gradients.grayFade} py-0`} />
      
      <div className="container mx-auto relative z-10 px-[60px]">
        <motion.h2 variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className={`text-4xl font-bold mb-20 bg-clip-text text-transparent ${colors.gradients.heroGradient} py-0 my-[24px] text-center md:text-6xl`}>
          My Expertise
        </motion.h2>
        
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="w-full">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-4">
              {cards.map(card => <CarouselItem key={card.title} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div initial="hidden" whileInView="visible" viewport={{
                once: true
              }} variants={fadeIn} custom={card.delay} className="group h-full">
                    <Link to={card.link} className="block h-full">
                      <div className={`relative h-full p-10 rounded-2xl ${colors.gradients.primaryFade} ${glassMorphism.light.blur} border border-[${colors.primary.blue}]/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}>
                        <motion.div whileHover="hover" initial="rest" animate="rest" variants={iconAnimation}>
                          <card.icon className={`w-14 h-14 text-[${colors.primary.blue}] mb-8`} />
                        </motion.div>
                        <h3 className={`text-2xl font-semibold mb-6 text-${colors.neutral.gray900}`}>
                          {card.title}
                        </h3>
                        <p className={`text-${colors.neutral.gray600} leading-relaxed mb-8 text-lg`}>
                          {card.description}
                        </p>
                        <div className={`flex items-center text-[${colors.primary.blue}] font-medium text-lg`}>
                          Learn More
                          <ArrowUpRight className="w-6 h-6 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className={`relative -left-0 top-0 translate-y-0 border-[${colors.primary.blue}]/30 hover:border-[${colors.primary.blue}] hover:bg-[${colors.primary.blue}]/10 mr-4`} />
              <CarouselNext className={`relative -right-0 top-0 translate-y-0 border-[${colors.primary.blue}]/30 hover:border-[${colors.primary.blue}] hover:bg-[${colors.primary.blue}]/10`} />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>;
};
export default FeaturedWork;