import Boxes from "../components/Boxes";
import ContactForm from "../components/ContactForm";
import MarqueeText from "../components/MarqueeText";
import SecondHero from "../components/SecondHero";
import ServiceBoxes from "../components/ServiceBoxes";
import ServiceContent from "../components/ServiceContent";


export const metadata = {
    title: "Embroidery Digitizing, Vector Art & Custom Patch Services",
    description: "Get expert Embroidery Digitizing, Vector Art conversion, and Custom Patches. Premium quality graphic and apparel services with fast turnaround.",
    alternates: {
        canonical: "https://iniziosolutions.com/services",
    },
    openGraph: {
        title: "Embroidery Digitizing, Vector Art & Custom Patch Services",
        description: "Get expert Embroidery Digitizing, Vector Art conversion, and Custom Patches. Premium quality graphic and apparel services with fast turnaround.",
        url: "https://iniziosolutions.com/services",
        siteName: "Inizio Solutions",
        images: [
            {
                url: "https://iniziosolutions.com/assets/images/open-graph.png",
                width: 1200,
                height: 630,
                alt: "Inizio Solutions Logo",
            },
        ],
        type: "website",
    },
};

const serviceSchema =
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Embroidery Digitizing, Vector Art & Custom Patches",
    "description": "Inizio Solutions provides expert vector art conversion, precision embroidery digitizing, and premium custom patches (embroidered, PVC, chenille, woven, leather) for apparel branding and printing.",
    "provider": {
        "@type": "Organization",
        "name": "Inizio Solutions",
        "url": "https://iniziosolutions.com",
        "logo": "https://iniziosolutions.com/assets_frontend/logo.png",
        "sameAs": [
            "https://www.facebook.com/iniziosolutionsllc",
            "https://www.instagram.com/iniziosolutions"
        ]
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Inizio Solutions Service Catalog",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Embroidery Digitizing"
                }
            },

            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Vector Art Conversion"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Patches"
                }
            }
        ]
    },
    "areaServed": ["US", "GB", "CA", "AU", "150"]
}




export default function services() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema), }} />
            <SecondHero subheading="Our Services" headingone={"Our"} heading="Services" description="We provide high-quality embroidery digitizing, vector art services, and custom patches tailored to your needs. Every design is crafted with precision to ensure your brand looks sharp and professional. Our team focuses on fast turnaround, clean results, and complete customer satisfaction. Whether you need logo digitizing, vector redraws, or premium custom patches we’ve got you covered." />
            <ServiceBoxes />
            <ServiceContent />
            <MarqueeText />
            <Boxes />
            <ContactForm />
        </>
    )
}