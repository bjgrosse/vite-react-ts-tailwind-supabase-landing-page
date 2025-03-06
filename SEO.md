# SEO Best Practices for lvndr

This document outlines the SEO implementation and best practices for the lvndr website.

## Implemented SEO Features

1. **Meta Tags Management**
   - Using `react-helmet-async` to manage meta tags
   - SEO component for consistent meta tag implementation across pages
   - Custom title, description, and keywords for each page

2. **Structured Data**
   - JSON-LD implementation for rich snippets in search results
   - Organization, WebSite, and WebPage schema types
   - Custom StructuredData component for easy implementation

3. **Sitemap**
   - XML sitemap at `/sitemap.xml`
   - Automated sitemap generation during build process
   - Script to update the sitemap with new pages

4. **Robots.txt**
   - Properly configured robots.txt file
   - Directs search engines to the sitemap

5. **Open Graph and Twitter Cards**
   - Social media sharing optimization
   - Custom images for different platforms

## SEO Checklist for New Pages

When creating a new page, ensure you:

1. Add the SEO component with appropriate metadata:
   ```tsx
   <SEO 
     title="Page Title - lvndr"
     description="Concise, compelling description under 160 characters"
     keywords="relevant, comma, separated, keywords"
     canonicalUrl="https://lvndr.love/page-path"
   />
   ```

2. Add structured data appropriate for the page type:
   ```tsx
   <StructuredData 
     type="WebPage"
     data={{
       name: "Page Name",
       description: "Page description",
       url: "https://lvndr.love/page-path",
       isPartOf: {
         "@type": "WebSite",
         name: "lvndr",
         url: "https://lvndr.love"
       }
     }}
   />
   ```

3. Update the sitemap:
   - Add the new page to the routes array in `scripts/generate-sitemap.js`
   - Run `npm run generate-sitemap` to update the sitemap

## Content SEO Best Practices

1. **Heading Structure**
   - Use a single H1 tag per page
   - Follow a logical hierarchy (H1 → H2 → H3)
   - Include keywords in headings

2. **Content Quality**
   - Write unique, valuable content
   - Aim for at least 300 words per page
   - Include target keywords naturally (avoid keyword stuffing)

3. **Internal Linking**
   - Link to other relevant pages within your site
   - Use descriptive anchor text

4. **Image Optimization**
   - Use descriptive filenames
   - Always include alt text
   - Compress images for faster loading

## Performance Optimization

1. **Core Web Vitals**
   - Monitor LCP, FID, and CLS metrics
   - Optimize for mobile experience

2. **Page Speed**
   - Minimize JavaScript and CSS
   - Optimize image delivery
   - Implement lazy loading for images and videos

## Monitoring and Improvement

1. **Set up Google Search Console**
   - Monitor indexing status
   - Track search performance
   - Identify and fix issues

2. **Set up Google Analytics**
   - Track user behavior
   - Monitor conversion goals
   - Analyze traffic sources

3. **Regular Audits**
   - Conduct quarterly SEO audits
   - Update content and metadata as needed
   - Fix broken links and other technical issues

## Additional Resources

- [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/docs/gs.html)
- [Google Search Console Help](https://support.google.com/webmasters) 