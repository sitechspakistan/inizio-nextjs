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

export default function Home() {
  return (
    <>
      <Hero />
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
