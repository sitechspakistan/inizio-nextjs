import { buildMetadata } from "@/lib/seo";
import SecondHero from "../components/SecondHero"
import Portfolio from "../components/Portfolio"
import ContactForm from "../components/ContactForm"
import Cta from "../components/Cta"

export const metadata = buildMetadata({
    title: "Top Quality Digitizing & Vector Art Portfolio",
    description: "See real embroidery digitizing, vector art and custom patch work from Inizio Solutions. Browse our samples, then get your first order free.",
    canonical: "https://iniziosolutions.com/portfolio",
});

export default function portfolio() {
    return (
        <>
            <SecondHero subheading="Our Portfolio"
                headingone={"Our"}
                heading="Portfolio"
                description="Explore our portfolio highlighting exceptional services and innovative solutions, along with the custom promotional products we’ve crafted for clients across industries." />


            <Portfolio type="digitizing" />
            <Cta />
            <ContactForm />
        </>
    )
}