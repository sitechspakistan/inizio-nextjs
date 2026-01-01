import InnerHero from "@/app/components/InnerHero";
import ContentOne from "@/app/components/ContentOne";
import Boxes from "@/app/components/Boxes";
import FaqsCustom from "@/app/components/faqs/FaqsCustom";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
    title: "Custom Patches Manufacturer | Inizio Solutions, LLC",
    description: "Design high-quality embroidered, PVC, or woven custom patches. Get vibrant colors, expert design support, and fast delivery guaranteed. Start your order now!",
    alternates: {
        canonical: "https://iniziosolutions.com/services/custom-patches",
    },
};


export default function custom() {
    return (
        <>
            <InnerHero subheading="Custom Patches"
                headingone={"Custom "}
                headingtwo="Patches"
                paragraph="Unleash your creativity with our high-quality custom patches. We specialize in creating durable and vibrant patches in embroidered, PVC, and woven styles, perfect for branding and recognition. Get a quick quote today!" />

            <ContentOne subheading={"Inizio Solutions"}
                headingone={"Premium"}
                headingtwo={"Custom Patches"}
                headingthree={"in the USA - Designed to Perfection"}
                paraone={"Enhance your identity with professionally crafted custom patches. Choose embroidered, PVC, leather, chenille, or woven styles - all produced with sharp outlines, vibrant colors, and strong stitching for the best durability. High detail, fast turnaround, and zero compromise on quality ensure your patches look exceptional on jackets, hats, uniforms, bags, and branded apparel."}
                paratwo={
                    <>
                        Whether you’re outfitting a team, launching a clothing line, or promoting your business, we offer complete freedom in size, shape, and design to match your exact vision. With fast delivery across the United States and reliable manufacturing quality, our custom patches help your brand stand out while maintaining durability and long-lasting professional appeal.
                    </>
                }
            />
            <Boxes/>
            <FaqsCustom/>
            <ContactForm/>

        </>
    )

}