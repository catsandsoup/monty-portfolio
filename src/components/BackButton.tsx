
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Button
        variant="ghost"
        size="sm"
        className="group flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        <span>Back</span>
      </Button>
    </motion.div>
  );
};

export default BackButton;
