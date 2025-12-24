import Boxes from "../components/Boxes";
import ContactForm from "../components/ContactForm";
import MarqueeText from "../components/MarqueeText";
import SecondHero from "../components/SecondHero";
import ServiceBoxes from "../components/ServiceBoxes";
import ServiceContent from "../components/ServiceContent";


export default function services() {
    return (
        <>
            <SecondHero />
            <ServiceBoxes />
            <ServiceContent />
            <MarqueeText />
            <Boxes />
            <ContactForm />
        </>
    )
}