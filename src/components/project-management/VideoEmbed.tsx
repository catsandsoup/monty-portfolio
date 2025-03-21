
import { motion } from "framer-motion";

interface VideoEmbedProps { 
  videoId: string; 
  title: string; 
  caption: string; 
}

const VideoEmbed = ({ 
  videoId, 
  title, 
  caption 
}: VideoEmbedProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="my-16"
  >
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Video Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00a5ee]/10 to-transparent z-10 pointer-events-none" />
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        
        {/* Apple-style caption */}
        <div className="relative mt-4 mb-2 text-center">
          <p className="text-sm text-gray-500 font-medium">{caption}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default VideoEmbed;
