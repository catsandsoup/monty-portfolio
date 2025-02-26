
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed left-6 top-24 z-40 flex items-center gap-1.5 text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-all"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="font-medium">Back</span>
    </Button>
  );
};

export default BackButton;
