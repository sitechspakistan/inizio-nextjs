import SecondHero from "../components/SecondHero"
import { Suspense } from "react"

export const metadata = {
    title: "Terms & Conditions | Inizio Solutions ",
    description: "Read the Terms & Conditions of Inizio Solutions, LLC to understand the rules, guidelines, and policies for using our website and services.",
    alternates: {
        canonical: "https://iniziosolutions.com/terms-conditions",
    },
    icons: {
        icon: "/assets/images/inizo-logo.webp",
    },
};


export default function TermConditons() {
    return (

        <>
            <Suspense fallback={<div>Loading...</div>}>
                <SecondHero subheading="Terms & Conditions"
                    headingone={"Terms & Conditions"}
                    heading=""
                    description=""

                />
                <section className="pt-30 pb-30">
                    <div className="container policy">
                        {/* <h1 className="pt-3 text-center">Terms & Conditions – Inizio Solutions, LLC</h1> */}
                        <p>These Terms & Conditions govern your use of Inizio Solutions, LLC’s services and website. By accessing or using our Site or services, you agree to these Terms.
                        </p>


                        <h3>1. Use of the Website</h3>
                        <p>You may use our website and services for lawful purposes only. By using the Site, you agree not to violate any applicable laws or infringe on the rights of others.</p>

                        <h3>2. Services and Orders</h3>
                        <ul className="pt-0">
                            <li>All services (digitizing, vector conversion, 3D embroidery files, etc.) require you to submit artwork and specifications.</li>
                            <li>Turnaround times, pricing, and delivery details will be communicated when you request a quote.</li>
                            <li>We reserve the right to revise quotes due to complexity or additional customer requests.</li>
                        </ul>

                        <h3>3. Intellectual Property</h3>
                        <p>All content on this Site — including text, graphics, logos, images, and service descriptions — is owned by Inizio Solutions, LLC and is protected by intellectual property laws. You may not reproduce or distribute any content without written permission.</p>

                        <h3>4. Payment Terms</h3>
                        <p>Payments must be made before delivery of final artwork files unless otherwise agreed. We accept major credit cards, debit cards, and PayPal.</p>

                        <h3>5. Refunds and Revisions</h3>
                        <ul className="pt-0">
                            <li>Minor revisions are offered free of charge within a reasonable scope after delivery.</li>
                            <li>Refunds are subject to review and approval based on the nature of the work performed and agreements made prior to delivery.</li>
                        </ul>


                        <h3>6.  Limitation of Liability</h3>
                        <p>In no event will Inizio Solutions, LLC be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, even if advised of the possibility of such damages.</p>

                        <h3>7. Termination</h3>
                        <p>We may terminate your access to the Site or services for any reason, including violations of these Terms.</p>


                        <h3>8. Governing Law</h3>
                        <p>These Terms and your use of our services are governed by the laws of the state of Delaware, USA, without regard to its conflicts of law provisions.</p>


                        <h3>9. Changes to Terms</h3>
                        <p>We may update these Terms as needed. Continued use of our services after changes constitutes your acceptance.</p>

                    </div>
                </section>


            </Suspense >

        </>

    )
}