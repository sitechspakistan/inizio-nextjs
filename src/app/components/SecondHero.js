import PageHero from "./ui/PageHero";

// Simple inner-page hero (breadcrumb, title, description). Props kept from the old design.
export default function SecondHero({ subheading, headingone, heading, description }) {
  return <PageHero crumb={subheading} title={headingone} highlight={heading} description={description} />;
}
