import SecondHero from "../components/SecondHero"
import PriceCard from "../components/PriceCard"

export default function pricing() {
    return (
        <>
            <SecondHero subheading="Our Pricing"
                headingone={"Our"}
                heading="Pricing"
                description="We believe that excellent quality and complete transparency are fundamental rights for every customer.
                 Here, you can view the fully detailed and competitive pricing for all Inizio Solutions services. Select the package
                  that best fits your requirements and budget without any hidden costs." />
            <PriceCard />

        </>
    )
}