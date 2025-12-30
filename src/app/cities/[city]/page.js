import Hero from "../../components/Hero"
import ContentFour from "../../components/ContentFour"
import PortfolioSec from "../../components/PortfolioSec"
import Counters from "../../components/Counters"
import ContentFive from "../../components/ContentFive"
import Testimonials from "../../components/Testimonials"
import Cta from "../../components/Cta"
import FaqsDigitizing from "../../components/faqs/FaqsDigitizing"

export default async function CityPage({ params }) {
    const { city } = await params
    return (
        <>
            <Hero heading={`Top-Rated Embroidery Digitizing Experts in`} headingone={` ${city}`}
                paragraph={`Join hundreds of satisfied clients in ${city} who trust Inizio Solutions for their embroidery digitizing 
            needs.Our expert team ensures your designs are perfectly optimized for any fabric, ensuring a smooth machine-ready files 
            to make your brand stand out.`}
            />
            <ContentFour />
            <PortfolioSec subheading={"Our Portfolio"} heading={"work we're proud to share."} />
            <Counters />
            <ContentFive />
            <Testimonials />
            <Cta />
            <FaqsDigitizing />
        </>
    )
}