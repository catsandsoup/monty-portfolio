import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-b from-white to-gray-50 py-[35px]">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-20">
            <motion.a href="https://github.com/catsandsoup" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1
          }} className="text-gray-600 hover:text-[#00a5ee] transition-colors p-3">
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a href="https://linkedin.com/in/montygiovenco" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1
          }} className="text-gray-600 hover:text-[#00a5ee] transition-colors p-3">
              <Linkedin className="h-8 w-8" />
            </motion.a>
            <motion.div whileHover={{
            scale: 1.1
          }}>
              <Link to="/contact" className="text-gray-600 hover:text-[#00a5ee] transition-colors p-3">
                <Mail className="h-8 w-8" />
              </Link>
            </motion.div>
          </div>
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Monty Giovenco. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;