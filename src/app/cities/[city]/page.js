import Hero from "../../components/Hero"
import ContentFour from "../../components/ContentFour"
import Counters from "../../components/Counters"
import PortfolioSec from "../../components/PortfolioSec"
import ContentFive from "../../components/ContentFive"
import Testimonials from "../../components/Testimonials"
import Cta from "../../components/Cta"
import FaqsDigitizing from "../../components/faqs/FaqsDigitizing"

export async function generateMetadata({ params }) {
  const { city } = await params;

  const cityName = city.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Embroidery Digitizing in ${cityName} | Inizio Solutions, LLC`,
    description: `Professional embroidery digitizing services in ${cityName}. Inizio Solutions delivers production-ready stitch files with fast turnaround and expert support.`,
    alternates: {
      canonical: `https://iniziosolutions.com/cities/${city}`,
    },
  };
}

 

export default async function CityPage({ params }){
    
    const { city } = await params
    const cityName = city
    .split('-')
    .join(' ');
    
    return (
        <>
            <Hero heading={`Top-Rated Embroidery Digitizing Experts in`} headingone={` ${cityName}`}
                paragraph={`Join hundreds of satisfied clients in ${cityName} who trust Inizio Solutions for their embroidery digitizing 
            needs.Our expert team ensures your designs are perfectly optimized for any fabric, ensuring a smooth machine-ready files 
            to make your brand stand out.`}
            />
            <ContentFour heading={`Over 12 Years of Excellence in Embroidery Digitizing in`} headingone={`${cityName}`}
                para={`Inizio Solutions is not just a service provider; we are a dynamic team of creative designers and digitizing experts. With nearly 12+ years of industry experience, we have helped businesses in ${cityName} achieve flawless branding through precision-driven embroidery digitizing. Our mission is to provide local businesses with machine-ready files that ensure smooth production and high-quality results every time.`}

            />
            <Counters />
            <PortfolioSec subheading={"Our Portfolio"} heading={"work we're proud to share."} type="mix-img" />

            <ContentFive heading={`Flawless Stitching & Machine-Ready Files Tailored for`} headingone={`${cityName}`} imgCity={city}
                para={`We go beyond basic conversion by creating production-ready embroidery files that reduce thread breaks and improve machine speed. With local support in ${cityName}, we expertly handle 3D Puff, delicate fabrics, and complex jacket backs. Our industry-leading digitizing helps ${cityName} businesses reduce downtime and deliver premium-quality embroidery consistently.`} />
            <Testimonials />
            <Cta />
            <FaqsDigitizing />
        </>
    )
}