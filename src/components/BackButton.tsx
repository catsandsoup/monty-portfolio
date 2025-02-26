
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1.5 text-gray-900 hover:text-accent transition-colors bg-white/80 backdrop-blur-sm hover:bg-white/90"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="font-medium">Back</span>
    </Button>
  );
};

export default BackButton;

