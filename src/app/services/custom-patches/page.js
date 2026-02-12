import InnerHero from "@/app/components/InnerHero";
import ContentOne from "@/app/components/ContentOne";
import Boxes from "@/app/components/Boxes";
import FaqsCustom from "@/app/components/faqs/FaqsCustom";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
    title: "Custom Patches Manufacturer | Inizio Solutions, LLC",
    description: "Design high-quality embroidered, PVC, or woven custom patches. Get vibrant colors, expert design support, and fast delivery guaranteed. Start your order now!",
    alternates: {
        canonical: "https://iniziosolutions.com/services/custom-patches",
    },
    openGraph: {
        title: "Custom Patches Manufacturer | Inizio Solutions, LLC",
        description: "Design high-quality embroidered, PVC, or woven custom patches. Get vibrant colors, expert design support, and fast delivery guaranteed. Start your order now!",
        url: "https://iniziosolutions.com/services/custom-patches",
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

const customSchema =
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Patches",
    "description": "Premium custom patches including embroidered, PVC, chenille, woven and leather patches designed for durability and branding.",
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
    "serviceType": "Custom Patches - Embroidered, PVC, Chenille, Woven Leather & More ",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "23", "bestRating": "5" },
    "areaServed": ["US", "GB", "CA", "AU", "150"],
    "offers": {
        "@type": "Offer",
        "url": "https://iniziosolutions.com/services/custom-patches",
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
            "name": "What exactly are these embroidered custom patches?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Embroidered custom patches are small, stitched designs created on cotton twill using high-quality thread. They’re used to represent brands, events, teams, and causes with a polished, durable look. These patches can be sewn or applied to clothing, bags, uniforms, or used creatively in crafts making them a versatile way to showcase identity and style."
            }
        },
        {
            "@type": "Question",
            "name": "Can I mix different designs in one order?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each design counts as a separate item. So, if you want 50 of one design and 50 of another, it would be priced as 100 separate items."
            }
        },
        {
            "@type": "Question",
            "name": "What's the minimum and maximum number of patches I can order at a time?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We welcome all order sizes big or small. Our skilled team can handle high-volume production, including 100,000+ patches, while maintaining top quality. Please note, our minimum order quantity starts at 50 patches."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to make them?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Once the order details and invoice are finalized, we submit the order. You'll get a soft sample of the patch within 1-2 days for review. After approval, we usually ship them out within 7-10 days."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer revisions for quality assurance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. If there are any issues with the patches design, please let us know, and we will work with you until it is perfect."
            }
        },
        {
            "@type": "Question",
            "name": "Can you replicate a patch that I already have?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Get an identical copy of your patch with ease. Take a photo and share it with us. We’ll create a replica and return your original item to you. Trust us to create a perfect match."
            }
        }
    ]
}


export default function custom() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema), }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema), }} />
            <InnerHero subheading="Custom Patches"
                headingone={"Custom "}
                headingtwo="Patches"
                paragraph="Unleash your creativity with our high-quality custom patches. We specialize in creating durable and vibrant patches in embroidered, PVC, and woven styles, perfect for branding and recognition. Get a quick quote today!" />

            <ContentOne subheading={"Inizio Solutions"}
                headingone={"Premium"}
                headingtwo={"Custom Patches"}
                headingthree={"in the USA - Designed to Perfection"}
                paraone={"Enhance your identity with professionally crafted custom patches. Choose embroidered, PVC, leather, chenille, or woven styles - all produced with sharp outlines, vibrant colors, and strong stitching for the best durability. High detail, fast turnaround, and zero compromise on quality ensure your patches look exceptional on jackets, hats, uniforms, bags, and branded apparel."}
                paratwo={
                    <>
                        Whether you’re outfitting a team, launching a clothing line, or promoting your business, we offer complete freedom in size, shape, and design to match your exact vision. With fast delivery across the United States and reliable manufacturing quality, our custom patches help your brand stand out while maintaining durability and long-lasting professional appeal.
                    </>
                }
                imgpath={"/assets/images/portfolio/custom-patch/5.jpg"}
            />
            <Boxes />
            <FaqsCustom />
            <ContactForm />

        </>
    )

}