
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-48 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-32"
        >
          <div className="flex items-center space-x-24">
            <motion.a
              href="https://github.com/montygiovento"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-[#00a5ee] transition-colors p-[11px]"
            >
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/montygiovento"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-[#00a5ee] transition-colors p-[11px]"
            >
              <Linkedin className="h-8 w-8" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-[#00a5ee] transition-colors p-[11px]"
              >
                <Mail className="h-8 w-8" />
              </Link>
            </motion.div>
          </div>
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Monty Giovenco. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
