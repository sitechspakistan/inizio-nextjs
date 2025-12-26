import Hero from "../components/Hero"
import ContentFour from "../components/ContentFour"
import PortfolioSec from "../components/PortfolioSec"
import Counters from "../components/Counters"
import ContentFive from "../components/ContentFive"
import Testimonials from "../components/Testimonials"
import Cta from "../components/Cta"
import FaqsDigitizing from "../components/faqs/FaqsDigitizing"
export default function template(){
    return(
        <>
        <Hero/>
        <ContentFour/>
        <PortfolioSec subheading={"Our Portfolio"} heading={"work we're proud to share."}/>
        <Counters/>
        <ContentFive/>
        <Testimonials/>
        <Cta/>
        <FaqsDigitizing/>
        </>
    )
}