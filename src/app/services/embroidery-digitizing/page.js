import InnerHero from "../../components/InnerHero";
import ContentOne from "../../components/ContentOne";
import PortfolioSec from "../../components/PortfolioSec";
import CTA from "../../components/Cta";
import Boxes from "../../components/Boxes";
import ContentTwo from "../../components/ContentTwo";
import FaqsDigitizing from "@/app/components/faqs/FaqsDigitizing";
import ContactForm from "../../components/ContactForm";


export const metadata = {
    title: "Embroidery Digitizing Service | Inizio Solutions, LLC",
    description: "Need Professional embroidery digitizing? Get perfect stitch flow, balanced density, and high-quality results for caps, patches, and jackets. Order 24/7!",
    alternates: {
        canonical: "https://iniziosolutions.com/services/embroidery-digitizing",
    },
    openGraph: {
        title: "Embroidery Digitizing Service | Inizio Solutions, LLC",
        description: "Need Professional embroidery digitizing? Get perfect stitch flow, balanced density, and high-quality results for caps, patches, and jackets. Order 24/7!",
        url: "https://iniziosolutions.com/services/embroidery-digitizing",
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

const digitizingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Embroidery Digitizing",
    "description": "Professional embroidery digitizing with smooth pathing, precise stitch flow, balanced density and high-quality results for caps, jackets, patches, uniforms and promotional apparel.",

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

    "serviceType": "Embroidery Digitizing Services",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "23", "bestRating": "5" },

    "areaServed": [
        "US",
        "GB",
        "CA",
        "AU",
        "150"
    ],

    "offers": {
        "@type": "Offer",
        "url": "https://iniziosolutions.com/embroidery-digitizing",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleRegion": [
            "US",
            "GB",
            "CA",
            "AU",
            "150"
        ]
    }
}

const faqsSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the acceptable file formats should I provide to ensure the highest-quality digitizing results?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can send us your artwork in a variety of formats, including .jpg, .jpeg, .gif, .bmp, .tif, .ai, and .eps. For faster uploading and smaller file sizes, .jpeg and .gif are usually the most convenient options.\n"
            }
        },
        {
            "@type": "Question",
            "name": " Do you provide digitized embroidery files in specialized or custom formats if needed?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can provide your digitized embroidery files in any specialized or custom format you need. DST is our standard delivery format, we can supply any file format based on your  machine’s specific requirements."
            }
        },
        {
            "@type": "Question",
            "name": " What is the turnaround time for embroidery digitizing or other services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The turnaround time is based on the complexity of the image you send us. We offer a super-fast turnaround time of 4 to 5 hours. If you let us know your emergency, top priority will be given to your job."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer free revisions with your embroidery digitizing or other services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, InizioSolutions offers unlimited free revisions to ensure you get exactly the result you want. Your satisfaction is our top priority."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use vector art services for screen printing and embroidery?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely, our vector files are embroidery and print-ready, making them perfect for screen printing, sublimation, and even for embroidery."
            }
        }
    ]

}


export default function Digitizing() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitizingSchema), }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema), }} />


            <InnerHero subheading="Embroidery Digitizing" headingone={"Embroidery"} headingtwo="Digitizing"
                paragraph="Get your designs stitch-ready with our expert embroidery digitizing service. We convert any logo or artwork into 
            DST, PES files with perfect stitch quality and fast turnaround, ensuring flawless machine embroidery." />


            <ContentOne subheading={"Best solution we offer you"} headingone={"Premium"} headingtwo={"Embroidery Digitizing"} headingthree={"Services - Accurate, Clean & Production-Ready"}
                paraone={"Our professional embroidery digitizing services ensure your artwork is converted into clean, precise, and production-ready stitch files. We focus on smooth pathing, balanced density, and flawless stitch flow to reduce thread breaks and ensure perfect results on every fabric type - whether it’s hats, jackets, shirts, or specialty garments."}
                paratwo={"From logos and monograms to complex illustrations, our team ensures accuracy, fast turnaround, and top-tier quality. Whether you’re a small business, apparel brand, or large embroidery shop, we provide reliable digitizing that enhances stitch quality, reduces production time, and ensures a professional embroidered finish every single time."}
                imgpath={"/assets/images/portfolio/machine.jpg"} />



            <PortfolioSec subheading="Best Solution We Offer you" heading="Our Embroidery Digitizing Work" type="digitizing" />
            <CTA />
            <Boxes />
            <ContentTwo />
            <FaqsDigitizing />
            <ContactForm />

        </>
    )
}