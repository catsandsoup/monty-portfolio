
import Hero from "@/components/project-management/Hero";
import ExperienceSections from "@/components/project-management/ExperienceSections";
import KeyMetrics from "@/components/project-management/KeyMetrics";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const ProjectManagement = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Project Management Portfolio - Monty Giovenco",
    "url": "https://montyg.me/portfolio/project-management",
    "mainEntity": {
      "@type": "Person",
      "name": "Monty Giovenco",
      "jobTitle": "Project Management Specialist",
      "description": "Led the digital transformation and brand evolution of House of Manuela to HomeVR, orchestrating comprehensive project management and business leadership initiatives",
      "knowsAbout": [
        "Digital Transformation",
        "Brand Evolution",
        "Real Estate Visualisation",
        "Technology Implementation",
        "Strategic Business Leadership"
      ]
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
        "name": "Project Management",
        "item": "https://montyg.me/portfolio/project-management"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Project Management Portfolio | Monty Giovenco | Sydney</title>
        <meta name="description" content="Explore Monty Giovenco's project management expertise. Digital transformation and brand evolution specialist with comprehensive business leadership experience." />
        <meta name="keywords" content="Monty Giovenco, project management, digital transformation, brand evolution, business leadership, Sydney, Australia" />
        <link rel="canonical" href="https://montyg.me/portfolio/project-management" />
        
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="Project Management Portfolio | Monty Giovenco" />
        <meta property="og:description" content="Digital transformation and brand evolution specialist with comprehensive business leadership experience." />
        <meta property="og:url" content="https://montyg.me/portfolio/project-management" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <Hero />
        <KeyMetrics />
        <ExperienceSections />
        <Footer />
      </div>
    </>
  );
};

export default ProjectManagement;
