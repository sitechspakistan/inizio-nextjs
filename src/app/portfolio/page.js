import SecondHero from "../components/SecondHero"
import Portfolio from "../components/Portfolio"
import ContactForm from "../components/ContactForm"

export const metadata = {
    title: "Our Portfolio | Inizio Solutions",
    description: "Explore our portfolio highlighting exceptional services and innovative solutions, along with the custom promotional products we’ve crafted for clients across industries.",
    alternates: {
        canonical: "https://iniziosolutions.com/portfolio",
    },
};

export default function portfolio() {
    return (
        <>
            <SecondHero subheading="Our Portfolio"
            headingone={"Our"}
                heading="Portfolio"
                description="Explore our portfolio highlighting exceptional services and innovative solutions, along with the custom promotional products we’ve crafted for clients across industries." />


            <Portfolio />

            <ContactForm />
        </>
    )
}