import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
const Contact = () => {
  return <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} className="container mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-gray-600 mb-12 text-lg font-light">I'm always interested in new opportunities and collaborations. 

Feel free to reach out.</motion.p>
          
          <div className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }} className="flex items-center gap-4">
              <Mail className="text-[#00a5ee] w-6 h-6" />
              <span className="text-gray-600">work@montyg.me</span>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }} className="flex items-center gap-4">
              <MapPin className="text-[#00a5ee] w-6 h-6" />
              <span className="text-gray-600">Sydney, AU</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default Contact;