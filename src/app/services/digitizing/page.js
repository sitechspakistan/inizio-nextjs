import InnerHero from "../../components/InnerHero";
import ContentOne from "../../components/ContentOne";
import PortfolioSec from "../../components/PortfolioSec";
import Cta from "../../components/Cta";
import Boxes from "../../components/Boxes";
import ContentTwo from "../../components/ContentTwo";
import Faqs from "../../components/Faqs";
import ContactForm from "../../components/ContactForm";

export default function Digitizing() {
    return (
        <>
            <InnerHero />
            <ContentOne />
            <PortfolioSec subheading="Abc"  heading="Xyz" />
            <Cta />
            <Boxes />
            <ContentTwo />
            <Faqs />
            <ContactForm />
            
        </>
    )
}