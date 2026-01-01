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
};

export default function vector() {


    return (
        <>
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
            />

            <PortfolioSec subheading={"Best solution we offer you"} heading={"Our Vector Art Work."} />
            <Cta />
            <Boxes />
            <Faqs />
            <ContactForm />
        </>
    )
}