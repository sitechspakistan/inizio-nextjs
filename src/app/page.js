import HomeHero from "./components/home/HomeHero";
import HowItWorks from "./components/home/HowItWorks";
import ServicesTabs from "./components/home/ServicesTabs";
import AutoVsManual from "./components/home/AutoVsManual";
import HomeFaq from "./components/home/HomeFaq";
import { WhyUs, HomePortfolio, Reviews, Pricing, CtaBand } from "./components/home/HomeSections";
import { HOME_FAQS } from "./components/home/faqData";


export const metadata = {
  title: "Embroidery Digitizing & Vector Art in USA | Inizio Solutions",
  description: "Expert Embroidery Digitizing, Vector Art & Premium Custom Patches in the USA. Fast turnaround, High-quality, print-ready files. Get a FREE Quote Now!",
  alternates: {
    canonical: "https://iniziosolutions.com",
  },
  icons: {
    icon: "/assets/images/inizo-logo.webp",
  },
  metadataBase: new URL("https://iniziosolutions.com"),

  openGraph: {
    title: "Embroidery Digitizing & Vector Art in USA | Inizio Solutions",
    description: "Expert Embroidery Digitizing, Vector Art & Premium Custom Patches in the USA. Fast turnaround, High-quality, print-ready files. Get a FREE Quote Now!",
    url: "https://iniziosolutions.com",
    siteName: "Inizio Solutions",

    images: [
      {
        url: "https://iniziosolutions.com/assets/images/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Inizio Solutions Logo",
      },
    ],
    type: "website",
  },
};

const homeSchema = {

  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "name": "Inizio Solutions, LLC",
      "description": "Inizio Solutions provides professional embroidery digitizing, vector art, and design services with fast turnaround and premium quality.",
      "url": "https://iniziosolutions.com",
      "logo": "https://iniziosolutions.com/assets_frontend/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "131 Continental Dr Ste 305",
        "addressLocality": "Newark",
        "addressRegion": "DE",
        "postalCode": "19713",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 (302) 779-1338",
        "contactType": "customer service",
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Australia" }
        ],
        "availableLanguage": "en",
        "email": "orders@iniziosolutions.com"
      },
      "sameAs": [
        "https://www.facebook.com/iniziosolutionsllc",
        "https://www.instagram.com/iniziosolutions"
      ]
    },

    {
      "@type": "Service",
      "serviceType": "Apparel Branding Services",
      "name": "Expert Embroidery Digitizing, Vector Art, and Custom Patches",
      "description": "Inizio Solutions provides high-quality custom embroidery digitizing, raster to vector art conversion, and custom patch manufacturing with fast turnaround for apparel brands and businesses.",
      "provider": {
        "@type": "Organization",
        "name": "Inizio Solutions, LLC",
        "url": "https://iniziosolutions.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "CompoundPriceSpecification",
          "priceType": "Estimate",
          "priceComponent": {
            "@type": "UnitPriceSpecification",
            "unitText": "Per Service"
          }
        }
      }
    }
  ]
}



const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOME_FAQS.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema), }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema), }} />

      <HomeHero />
      <HowItWorks />
      <ServicesTabs />
      <AutoVsManual />
      <WhyUs />
      <HomePortfolio />
      <Reviews />
      <Pricing />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
