import Boxes from "../components/Boxes";
import ContactForm from "../components/ContactForm";
import MarqueeText from "../components/MarqueeText";
import SecondHero from "../components/SecondHero";
import ServiceBoxes from "../components/ServiceBoxes";
import ServiceContent from "../components/ServiceContent";


export default function services() {
    return (
        <>
            <SecondHero subheading="Our Services" headingone={"Our"} heading="Services" description="We provide high-quality embroidery digitizing, vector art services, and custom patches tailored to your needs. Every design is crafted with precision to ensure your brand looks sharp and professional. Our team focuses on fast turnaround, clean results, and complete customer satisfaction. Whether you need logo digitizing, vector redraws, or premium custom patches we’ve got you covered." />
            <ServiceBoxes />
            <ServiceContent />
            <MarqueeText />
            <Boxes />
            <ContactForm />
        </>
    )
}