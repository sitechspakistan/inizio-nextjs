import PortfolioSec from "@/app/components/PortfolioSec";
import ContentOne from "../../components/ContentOne";
import InnerHero from "../../components/InnerHero";
import Cta from "@/app/components/Cta";
import Boxes from "@/app/components/Boxes";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";


export const metadata = {
    title: "Expert Vector Art Conversion Service | Inizio Solutions, LLC",
    description: "Get 💯 flawless vector art conversion & image tracing for print-ready files. Perfect for screen printing, DTF, and large format printing. ⚡ 4-5 Hours Turnaround!",
    alternates: {
        canonical: "https://iniziosolutions.com/services/vector-art",
    },
    openGraph: {
        title: "Expert Vector Art Conversion Service | Inizio Solutions, LLC",
        description: "Get 💯 flawless vector art conversion & image tracing for print-ready files. Perfect for screen printing, DTF, and large format printing. ⚡ 4-5 Hours Turnaround!",
        url: "https://iniziosolutions.com/services/vector-art",
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

const vectorSchema =
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vector Art Conversion",
    "description": "Professional vector art conversion, raster to vector tracing, and print-ready vector file preparation for screen printing, DTG/DTF, signage, vinyl cutting and large format printing.",
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
    "serviceType": "Vector Art & Raster to Vector Conversion",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "23", "bestRating": "5" },

    "areaServed": ["US", "GB", "CA", "AU", "150"],
    "offers": {
        "@type": "Offer",
        "url": "https://iniziosolutions.com/services/vector-art",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleRegion": ["US", "GB", "CA", "AU", "150"]
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

export default function vector() {


    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vectorSchema), }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema), }} />

            <InnerHero subheading="Vector Art Conversion" headingone={"Vector Art"} headingtwo="conversion" paragraph="Convert any low-resolution image into a crisp,
             scalable vector file. Our manual raster-to-vector conversion ensures print-ready artwork (AI, EPS, PDF) for all your 
             printing and engraving needs."/>
            <ContentOne subheading={"Inizio Solutions"}
                headingone={"High-Quality"}
                headingtwo={"Vector Art"}
                headingthree={"Conversion Services - Scalable & Print-Ready."}
                paraone={"Get your artwork transformed into high-resolution, fully editable vector files designed for professional printing and branding. We specialize in converting pixelated images, rough scans, and low-quality logos into smooth, fully scalable vector graphics with enhanced clarity and sharp detail. Every vector file is crafted to be 100% print-ready, making it ideal for screen printing, DTF/DTG, sublimation, vinyl cutting, laser engraving, and large-format printing."}
                paratwo={
                    <>
                        We deliver production-ready files in {" "}<strong>EPS, AI, PDF, SVG, JPEG, and PNG </strong>{" "} formats to fit seamlessly into your workflow. Our team focuses on maintaining design accuracy while improving sharpness, balance, and print quality. Ideal for apparel brands, print shops, marketing teams, and custom merchandise businesses, our vector art ensures consistent, high-quality results every time even from low-resolution or blurry source images.
                    </>
                }
                imgpath={"/assets/images/portfolio/two-vector.png"}
            />

            <PortfolioSec subheading={"Best solution we offer you"} heading={"Our Vector Art Work."} type="vector-art" />
            <Cta />
            <Boxes />
            <Faqs />
            <ContactForm />
        </>
    )
}