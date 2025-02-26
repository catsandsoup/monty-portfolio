
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="absolute left-6 top-20 flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="h-4 w-4" />
      Back
    </Button>
  );
};

export default BackButton;
