import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = "Lvndr - Love outside the lines",
  description = "At Lvndr, love knows no bounds. We foster connections that defy the ordinary, creating a welcoming space for every kind of relationship.",
  keywords = "relationships, connections, love, community, inclusive",
  ogTitle = "Lvndr - Love outside the lines",
  ogDescription = "At Lvndr, love knows no bounds. We foster connections that defy the ordinary, creating a welcoming space for every kind of relationship.",
  ogImage = "https://lvndr.love/images/og-image.png",
  ogUrl = "https://lvndr.love",
  twitterCard = "summary_large_image",
  twitterTitle = "Lvndr - Love outside the lines",
  twitterDescription = "At Lvndr, love knows no bounds. We foster connections that defy the ordinary, creating a welcoming space for every kind of relationship.",
  twitterImage = "https://lvndr.love/images/og-image.png",
  canonicalUrl = "https://lvndr.love",
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
