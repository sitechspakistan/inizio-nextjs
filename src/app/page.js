import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import Counters from "./components/Counters";
import HomePortfolio from "./components/HomePortfolio";
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
      <HomePortfolio />
      <MarqueeText />
      <Boxes />
      <Testimonials />
      <MapSection />
      <Clients />
      <ContactForm />
    </>
  );
}
