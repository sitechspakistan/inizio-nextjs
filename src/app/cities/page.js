import Countries from "../components/Countries"
import SecondHero from "../components/SecondHero"

export const metadata = {
    title: "Explore Cities in USA, UK, Australia & New Zealand | Inizio Solutions",
    description: "Discover all major cities across the USA, UK, Australia, and New Zealand with Inizio Solutions. Find city-specific services, guides, and information in one place.",
    alternates: {
        canonical: "https://iniziosolutions.com/cities",
    },
    icons: {
        icon: "/assets/images/inizo-logo.webp",
    },
}

export default function Cities() {
    return (
        <>
            <SecondHero subheading=""
                headingone={"Our"}
                heading="Locations"
                description="We provide our services across multiple countries and cities, including the USA, UK, New Zealand, and Australia. Explore our presence in different locations and discover tailored digital solutions designed to meet the unique needs of businesses in each region." />
            <Countries />
        </>

    );
}