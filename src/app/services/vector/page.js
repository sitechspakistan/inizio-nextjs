import PortfolioSec from "@/app/components/PortfolioSec";
import ContentOne from "../../components/ContentOne";
import InnerHero from "../../components/InnerHero";
import Cta from "@/app/components/Cta";
import Boxes from "@/app/components/Boxes";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";



export default function vector() {


    return (
        <>
            <InnerHero />
            <ContentOne />
            <PortfolioSec subheading={"Best solution we offer you"} heading={"Our Vector Art Work."}/>
            <Cta />
            <Boxes />
            <Faqs />
            <ContactForm />
        </>
    )
}