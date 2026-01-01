import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import Counters from "./components/Counters";
import PortfolioSec from "./components/PortfolioSec";
import MarqueeText from "./components/MarqueeText";
import Boxes from "./components/Boxes";
import Testimonials from "./components/Testimonials";
import MapSection from "./components/MapSection";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";


export const metadata = {
    title: "Embroidery Digitizing & Vector Art in USA | Inizio Solutions",
    description: "Expert Embroidery Digitizing, Vector Art & Premium Custom Patches in the USA. Fast turnaround, High-quality, print-ready files. Get a FREE Quote Now!",
    alternates: {
        canonical: "https://iniziosolutions.com/",
    },
};

export default function Home() {
  return (
    <>
      <Hero heading={`Expert Embroidery Digitizing & Vector Art`} headingone={` IN THE USA.`} paragraph={`Inizio Solutions is your
                          trusted partner for professional apparel branding services in the U.S. We specialize in
                          converting your designs into high-quality embroidery digitizing files, scalable vector
                          art, and manufacturing premium custom patches. Get guaranteed quality and the fastest
                          turnaround in the industry.`}/>
      <HomeServices />
      <Counters />
      <PortfolioSec subheading="Our Portfolio"  heading="work we're proud to share." />
      <MarqueeText />
      <Boxes />
      <Testimonials />
      <MapSection />
      <Clients />
      <ContactForm />
    </>
  );
}
