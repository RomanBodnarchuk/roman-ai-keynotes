import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: string;
}

export function usePageSEO({
  title,
  description,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/56502cba-8528-4c13-9627-f28c192e12b2?Expires=1774898791&GoogleAccessId=go-api-on-aws%40gpt-engineer-390607.iam.gserviceaccount.com&Signature=vY6xyckMcSqdBBCMMbg7F2AI8oCwbPsmcGII3miiCBBFGYCE%2Bqgd71dvHj2kHn7atvzGtb1Yh2E1YBz7n6zpOMOqZQsfpK0YmuodL9asWJi03WWvjDHo4HdFu8HXFhsqiRqoMP19EtxoKPIxpLsl%2FPZlBpgs1e0IWkgwcR8Z8sjvY7nYlbKI1IyDGnQQiv9GBHuUEmn2i9v1v8vYoAKUyFTT8BwHWvcwg3daABB%2FklSX%2B75F0QeYCz0zPSMwGzjk3GnMreOLgGcQ7WhTPrxHvBpdWqXamf%2BQ0A%2BuVtglPY2mqp%2BFSkRII9cIt3MnwhkpKC8YgHHZbPNluoF3g3UBNw%3D%3D",
  ogType = "website",
  canonical,
  twitterCard = "summary_large_image",
}: SEOConfig) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes('property=') ? 'property' : 'name';
        const val = selector.match(/"([^"]+)"/)?.[1] || '';
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    const metas = [
      setMeta('meta[name="description"]', description),
      setMeta('meta[property="og:title"]', title),
      setMeta('meta[property="og:description"]', description),
      setMeta('meta[property="og:type"]', ogType),
      setMeta('meta[property="og:image"]', ogImage),
      setMeta('meta[name="twitter:card"]', twitterCard),
      setMeta('meta[name="twitter:title"]', title),
      setMeta('meta[name="twitter:description"]', description),
      setMeta('meta[name="twitter:image"]', ogImage),
    ];

    if (canonical) {
      setLink("canonical", canonical);
      setMeta('meta[property="og:url"]', canonical);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, ogImage, ogType, canonical, twitterCard]);
}
