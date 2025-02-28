
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Monty Giovenco",
    "url": "https://montyg.me",
    "image": "/monty-profile.png",
    "jobTitle": "Business Leader & Digital Innovator",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "Australia"
    },
    "sameAs": [
      "https://linkedin.com/in/montygiovento",
      "https://github.com/montygiovento"
    ],
    "knowsAbout": [
      "Business Transformation",
      "Digital Innovation",
      "Product Development",
      "Project Management",
      "Entrepreneurship"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://montyg.me"
    }
  };

  // Additional structured data for website
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Monty Giovenco - Business Leader & Digital Innovator",
    "url": "https://montyg.me",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://montyg.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Monty Giovenco | Business Leader & Digital Innovator | Sydney, Australia</title>
        <meta name="description" content="Monty Giovenco is a business transformation specialist and digital innovator based in Sydney, Australia. Expert in project management, product development, and entrepreneurship." />
        <meta name="keywords" content="Monty Giovenco, business transformation, digital innovation, Sydney, Australia, project management, product development, entrepreneurship, business leader" />
        <link rel="canonical" href="https://montyg.me" />
        
        {/* Additional SEO meta tags */}
        <meta property="og:title" content="Monty Giovenco | Business Leader & Digital Innovator" />
        <meta property="og:description" content="Business transformation specialist and digital innovator based in Sydney, Australia. Expert in project management, product development, and entrepreneurship." />
        <meta property="og:image" content="/monty-profile.png" />
        <meta property="og:url" content="https://montyg.me" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monty Giovenco | Business Leader & Digital Innovator" />
        <meta name="twitter:description" content="Business transformation specialist and digital innovator based in Sydney, Australia." />
        <meta name="twitter:image" content="/monty-profile.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
        <Hero />
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Explore My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/portfolio/project-management" className="block group">
                <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-[#00a5ee] group-hover:text-[#0088cc] transition-colors">Project Management</h3>
                  <p className="text-gray-600 mb-4">Leading digital transformation and brand evolution initiatives with comprehensive project management expertise.</p>
                  <span className="text-sm text-[#00a5ee] font-medium">Learn more →</span>
                </div>
              </Link>
              <Link to="/portfolio/product-development" className="block group">
                <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-[#00a5ee] group-hover:text-[#0088cc] transition-colors">Product Development</h3>
                  <p className="text-gray-600 mb-4">Crafting innovative digital experiences and products that solve real-world problems through user-centered design.</p>
                  <span className="text-sm text-[#00a5ee] font-medium">Learn more →</span>
                </div>
              </Link>
              <Link to="/portfolio/entrepreneurship" className="block group">
                <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-[#00a5ee] group-hover:text-[#0088cc] transition-colors">Entrepreneurship</h3>
                  <p className="text-gray-600 mb-4">Building and scaling successful ventures through strategic vision, market insights, and innovative business models.</p>
                  <span className="text-sm text-[#00a5ee] font-medium">Learn more →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <FeaturedWork />
        <Footer />
      </main>
    </>
  );
};

export default Index;
