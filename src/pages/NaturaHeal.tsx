
import Hero from "@/components/naturaheal/Hero";
import KeyMetrics from "@/components/naturaheal/KeyMetrics";
import ExperienceSections from "@/components/naturaheal/ExperienceSections";
import CompanyEvolution from "@/components/naturaheal/CompanyEvolution";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const NaturaHeal = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "NaturaHeal Project - Monty Giovenco",
    "url": "https://montyg.me/portfolio/naturaheal",
    "mainEntity": {
      "@type": "Person",
      "name": "Monty Giovenco",
      "description": "Monty Giovenco's work with NaturaHeal, showcasing business transformation and digital innovation expertise",
      "jobTitle": "Business Transformation Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "NaturaHeal",
        "description": "Health and wellness solutions provider"
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
        "name": "NaturaHeal",
        "item": "https://montyg.me/portfolio/naturaheal"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>NaturaHeal Case Study | Monty Giovenco | Business Transformation</title>
        <meta name="description" content="Discover how Monty Giovenco led the business transformation and digital innovation initiatives at NaturaHeal, driving growth and operational excellence." />
        <meta name="keywords" content="Monty Giovenco, NaturaHeal, business transformation, digital innovation, health tech, Sydney, Australia" />
        <link rel="canonical" href="https://montyg.me/portfolio/naturaheal" />
        
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="NaturaHeal Case Study | Monty Giovenco | Business Transformation" />
        <meta property="og:description" content="How Monty Giovenco led business transformation and digital innovation at NaturaHeal." />
        <meta property="og:url" content="https://montyg.me/portfolio/naturaheal" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
        <Hero />
        <CompanyEvolution />
        <KeyMetrics />
        <ExperienceSections />
        <Footer />
      </div>
    </>
  );
};

export default NaturaHeal;
