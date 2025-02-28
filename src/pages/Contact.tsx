
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Monty Giovenco",
    "url": "https://montyg.me/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Monty Giovenco",
      "email": "work@montyg.me",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "Australia"
      }
    }
  };

  // BreadcrumbList structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://montyg.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://montyg.me/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Monty Giovenco | Business Leader & Digital Innovator</title>
        <meta name="description" content="Get in touch with Monty Giovenco, a business transformation specialist and digital innovator based in Sydney, Australia. Available for new opportunities and collaborations." />
        <meta name="keywords" content="contact Monty Giovenco, business transformation, digital innovation, Sydney, Australia" />
        <link rel="canonical" href="https://montyg.me/contact" />
        
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="Contact Monty Giovenco | Business Leader & Digital Innovator" />
        <meta property="og:description" content="Get in touch with Monty Giovenco for new opportunities and collaborations. Based in Sydney, Australia." />
        <meta property="og:url" content="https://montyg.me/contact" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      
      <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="container mx-auto max-w-6xl"
        >
          <div className="max-w-2xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-gray-600 mb-12 text-lg font-light"
            >
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2 }} 
                className="flex items-center gap-4"
              >
                <Mail className="text-[#00a5ee] w-6 h-6" />
                <a href="mailto:work@montyg.me" className="text-gray-600 hover:text-[#00a5ee] transition-colors">work@montyg.me</a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.4 }} 
                className="flex items-center gap-4"
              >
                <MapPin className="text-[#00a5ee] w-6 h-6" />
                <span className="text-gray-600">Sydney, AU</span>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
              className="mt-16 bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Connect with Me</h2>
              <p className="text-gray-600 mb-8">
                Looking for a business transformation specialist or digital innovation expert? 
                I'd love to discuss how I can help your business grow and evolve in today's digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/in/montygiovento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#00a5ee]/10 text-[#00a5ee] rounded-lg font-medium hover:bg-[#00a5ee]/20 transition-colors"
                >
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/montygiovento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  GitHub Projects
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
