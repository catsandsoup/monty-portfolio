
import { motion } from "framer-motion";
import { Users2, Layout, Link, Wand2, Glasses, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import USPCard from "./USPCard";

const USPCardList = () => {
  const usps = [
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Live Guided Tours",
      description: "Take your clients 'by the hand' on a virtual tour through your development with video and voice chat functions to enhance their experience"
    }, 
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Interactive Floorplans",
      description: "Navigate your development with interactive floorplans, allowing your audience to jump from room to room using hotspots"
    }, 
    {
      icon: <Link className="w-8 h-8" />,
      title: "Product Links",
      description: "Your products and finishes have direct links to the manufacturer to provide a deeper engagement with the client"
    }, 
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Styling Service",
      description: "See your development with different products, finishing and furnishings before building"
    }, 
    {
      icon: <Glasses className="w-8 h-8" />,
      title: "Immersive Walkthrough",
      description: "Viewing the tour on a smartphone or tablet allows the gyroscope to orient the tour as you move the device around the room"
    }, 
    {
      icon: <Building className="w-8 h-8" />,
      title: "Company Branding",
      description: "Your tour is personalised with your logo, graphics, fonts and more"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {usps.map((usp, index) => <USPCard key={usp.title} {...usp} delay={index * 0.1} />)}
    </div>
  );
};

export default USPCardList;
