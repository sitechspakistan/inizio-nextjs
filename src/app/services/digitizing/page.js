import InnerHero from "../../components/InnerHero";
import ContentOne from "../../components/ContentOne";
import PortfolioSec from "../../components/PortfolioSec";
import CTA from "../../components/Cta";
import Boxes from "../../components/Boxes";
import ContentTwo from "../../components/ContentTwo";
import FaqsDigitizing from "@/app/components/faqs/FaqsDigitizing";
import ContactForm from "../../components/ContactForm";


export default function Digitizing() {
    return (
        <>
            <InnerHero subheading="Embroidery Digitizing" headingone={"Embroidery"} headingtwo="Digitizing" 
            paragraph="Get your designs stitch-ready with our expert embroidery digitizing service. We convert any logo or artwork into 
            DST, PES files with perfect stitch quality and fast turnaround, ensuring flawless machine embroidery." />


            <ContentOne subheading={"Best solution we offer you"} headingone={"Premium"} headingtwo={"Embroidery Digitizing"} headingthree={"Services - Accurate, Clean & Production-Ready"}
             paraone={"Our professional embroidery digitizing services ensure your artwork is converted into clean, precise, and production-ready stitch files. We focus on smooth pathing, balanced density, and flawless stitch flow to reduce thread breaks and ensure perfect results on every fabric type - whether it’s hats, jackets, shirts, or specialty garments."}
             paratwo={"From logos and monograms to complex illustrations, our team ensures accuracy, fast turnaround, and top-tier quality. Whether you’re a small business, apparel brand, or large embroidery shop, we provide reliable digitizing that enhances stitch quality, reduces production time, and ensures a professional embroidered finish every single time."} />



            <PortfolioSec subheading="Best Solution We Offer you" heading="Our Embroidery Digitizing Work" />
            <CTA />
            <Boxes />
            <ContentTwo />
            <FaqsDigitizing />
            <ContactForm />

        </>
    )
}