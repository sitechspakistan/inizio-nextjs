import { buildMetadata } from "@/lib/seo";
import SecondHero from "../components/SecondHero"
import PriceCard from "../components/PriceCard"
import Boxes from "../components/Boxes"
import Faqs from "../components/Faqs"
import Cta from "../components/Cta"

export const metadata = buildMetadata({
    title: "Top Quality Digitizing & Vector Art Pricing",
    description: "Left chest and cap digitizing from $8, jacket backs from $22, vector art from $12. Free first order under 6,000 stitches. See all prices.",
    canonical: "https://iniziosolutions.com/pricing",
});


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
            <Boxes />
            <Faqs />
            <Cta />
        </>
    )
}
