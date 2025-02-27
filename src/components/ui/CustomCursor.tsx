
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

const CustomCursor = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useMousePositionRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("rgba(59, 130, 246, 0.15)");

  useEffect(() => {
    // Update cursor color based on current route
    if (location.pathname.includes("naturaheal")) {
      setCursorColor("rgba(76, 175, 80, 0.15)"); // Green for NaturaHeal
    } else if (location.pathname === "/") {
      setCursorColor("rgba(0, 165, 238, 0.15)"); // Default blue
    }
  }, [location]);

  useEffect(() => {
    const updatePosition = () => {
      setPosition({ ...positionRef.current });
    };
    const interval = setInterval(updatePosition, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${cursorColor}, transparent 18.75%)`,
      }}
    />
  );
};

export default CustomCursor;
