import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get in Touch
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities and collaborations. Feel free to reach out.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.2
            }} className="flex items-center gap-4">
                <Mail className="text-[#00a5ee] w-6 h-6" />
                <span className="text-gray-600">hello@montygiovenco.com</span>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.4
            }} className="flex items-center gap-4">
                <MapPin className="text-[#00a5ee] w-6 h-6" />
                <span className="text-gray-600">Sydney, AU</span>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }}>
            <Card className="p-6 backdrop-blur-xl bg-white/80 shadow-lg border-0">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Name</label>
                  <Input className="border-gray-200" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Email</label>
                  <Input className="border-gray-200" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Message</label>
                  <Textarea className="border-gray-200 min-h-[150px]" placeholder="Your message" />
                </div>
                <Button className="w-full bg-[#00a5ee] hover:bg-[#0094d6]">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>;
};
export default Contact;