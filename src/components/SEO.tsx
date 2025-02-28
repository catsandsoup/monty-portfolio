
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
}

const SEO = ({
  title,
  description,
  canonicalPath = "",
  keywords = "",
  ogImage = "/og-image.png",
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://montyg.me";
  const fullTitle = title.includes("Monty Giovenco") ? title : `${title} | Monty Giovenco`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
