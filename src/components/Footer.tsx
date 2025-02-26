
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex items-center space-x-8">
            <motion.a
              href="https://github.com/montygiovento"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-[#00a5ee] transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/montygiovento"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-[#00a5ee] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-[#00a5ee] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Monty Giovenco. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
