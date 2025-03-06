import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "WebPage" | "Article" | "FAQPage";
  data: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
