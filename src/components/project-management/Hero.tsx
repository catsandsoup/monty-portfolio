import { motion } from "framer-motion";
import { Users2, Layout, Link, Wand2, Glasses, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}
const USPCard = ({
  icon,
  title,
  description,
  delay = 0
}: USPCardProps) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.6,
  delay
}}>
    <Card className="p-6 backdrop-blur-xl bg-white/80 border-0 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="mb-4 text-[#00a5ee]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900/90">{title}</h3>
      <p className="text-gray-600/90 text-sm leading-relaxed">{description}</p>
    </Card>
  </motion.div>;
const Hero = () => {
  const usps = [{
    icon: <Users2 className="w-8 h-8" />,
    title: "Live Guided Tours",
    description: "Take your clients 'by the hand' on a virtual tour through your development with video and voice chat functions to enhance their experience"
  }, {
    icon: <Layout className="w-8 h-8" />,
    title: "Interactive Floorplans",
    description: "Navigate your development with interactive floorplans, allowing your audience to jump from room to room using hotspots"
  }, {
    icon: <Link className="w-8 h-8" />,
    title: "Product Links",
    description: "Your products and finishes have direct links to the manufacturer to provide a deeper engagement with the client"
  }, {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Styling Service",
    description: "See your development with different products, finishing and furnishings before building"
  }, {
    icon: <Glasses className="w-8 h-8" />,
    title: "Immersive Walkthrough",
    description: "Viewing the tour on a smartphone or tablet allows the gyroscope to orient the tour as you move the device around the room"
  }, {
    icon: <Building className="w-8 h-8" />,
    title: "Company Branding",
    description: "Your tour is personalised with your logo, graphics, fonts and more"
  }];
  return <>
      <div className="w-full overflow-x-hidden">
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-[#00a5ee]/5 to-white/90 backdrop-blur-xl">
          <div className="container mx-auto max-w-6xl px-6 pt-24">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="mx-[29px]">
              <h1 className="text-5xl mb-6 tracking-tight font-semibold md:text-6xl text-slate-950">
                Project Management
              </h1>
              <p className="text-xl text-gray-600/90 max-w-3xl leading-relaxed font-normal">
                Led the digital transformation and brand evolution of House of Manuela to HomeVR, 
                orchestrating comprehensive project management and business leadership initiatives
                that resulted in 200% growth in online sales.
              </p>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-[#00a5ee]/10 to-purple-100/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00a5ee]/10 to-blue-100/10 rounded-full blur-3xl -z-10" />
        </section>

        <section className="bg-white/80 backdrop-blur-xl py-[34px]">
          <div className="container mx-auto max-w-6xl px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="text-center mb-16">
              <h2 className="mb-4 text-gray-900/90 font-semibold text-5xl">Interactive Real Estate Web Tours</h2>
              <p className="text-lg text-gray-600/90 max-w-2xl mx-auto">
                Comprehensive virtual tour solutions designed to enhance property showcase and client engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usps.map((usp, index) => <USPCard key={usp.title} {...usp} delay={index * 0.1} />)}
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default Hero;