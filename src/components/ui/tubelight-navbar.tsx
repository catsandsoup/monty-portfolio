import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface NavBarProps {
  items: NavItem[];
  className?: string;
}
const getAccentColor = (pathname: string): string => {
  if (pathname.includes('naturaheal')) {
    return '#4CAF50'; // NaturaHeal green
  } else if (pathname === '/') {
    return '#00a5ee'; // Default blue
  }
  return '#00a5ee'; // Default accent color
};
export function NavBar({
  items,
  className
}: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const accentColor = getAccentColor(location.pathname);
  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location, items]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 py-6", className)}>
      <motion.div initial={{
      y: -20,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20
    }} className="flex items-center gap-3 bg-white/90 border border-gray-200/20 backdrop-blur-xl rounded-full shadow-lg px-0 py-0">
        {items.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;
        return <Link key={item.name} to={item.url} onClick={() => setActiveTab(item.name)} className={cn("relative cursor-pointer text-base font-medium px-6 py-2.5 rounded-full transition-all duration-350", "text-gray-600 hover:text-[#00a5ee]", "md:text-xl md:font-semibold",
        // 25% larger font and slightly heavier weight for desktop
        isActive && `bg-white/50 text-[${accentColor}]`)} style={isActive ? {
          color: accentColor
        } : undefined}>
              <span className="hidden md:inline tracking-tight">{item.name}</span>
              <span className="md:hidden">
                <Icon size={22} strokeWidth={2.5} /> {/* Slightly larger icons for mobile */}
              </span>
              {isActive && <motion.div layoutId="lamp" className="absolute inset-0 w-full rounded-full -z-10" initial={false} transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }} style={{
            backgroundColor: `${accentColor}05`
          }}>
                  <motion.div className="absolute -top-2 inset-x-0 mx-auto w-12 h-1 rounded-t-full" animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} style={{
              backgroundColor: accentColor
            }}>
                    <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2" style={{
                backgroundColor: `${accentColor}20`
              }} />
                    <div className="absolute w-8 h-6 rounded-full blur-md -top-1" style={{
                backgroundColor: `${accentColor}20`
              }} />
                    <div className="absolute w-4 h-4 rounded-full blur-sm top-0" style={{
                backgroundColor: `${accentColor}20`
              }} />
                  </motion.div>
                </motion.div>}
            </Link>;
      })}
      </motion.div>
    </div>;
}