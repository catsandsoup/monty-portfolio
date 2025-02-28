
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

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

  return (
    <>
      <Helmet>
        <title>Monty Giovenco | Business Leader & Digital Innovator</title>
        <meta name="description" content="Monty Giovenco is a business transformation specialist and digital innovator based in Sydney, Australia. Expert in project management, product development, and entrepreneurship." />
        <meta name="keywords" content="Monty Giovenco, business transformation, digital innovation, Sydney, Australia" />
        <link rel="canonical" href="https://montyg.me" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
        <Hero />
        <FeaturedWork />
        <Footer />
      </main>
    </>
  );
};

export default Index;
