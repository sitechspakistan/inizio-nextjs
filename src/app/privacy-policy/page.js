import SecondHero from "../components/SecondHero"
import { Suspense } from "react"

export const metadata = {
    title: "Privacy & Policy | Inizio Solutions ",
    description: "Read the Privacy & Policy of Inizio Solutions, LLC to understand how we collect, use, and protect your personal information on our website.",
    alternates: {
        canonical: "https://iniziosolutions.com/privacy-policy",
    },
    icons: {
        icon: "/assets/images/inizo-logo.webp",
    },
};
export default function PrivacyPolicy() {
    return (

        <>
            <Suspense fallback={<div>Loading...</div>}>
                <SecondHero subheading="Privacy & Policy"
                    headingone={"Privacy & Policy"}
                    heading=""
                    description=""

                />
                <section className="pt-30 pb-30">
                    <div className="container policy">
                        {/* <h1 className="pt-3 text-center">Privacy & Policy – Inizio Solutions, LLC</h1> */}
                        <p>Inizio Solutions, LLC is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit or use our website <a href="https://www.iniziosolutions.com" target="_blank"><span className="content-color text-lowercase">www.iniziosolutions.com</span></a> (the “Site”) or place an order with us.
                            <br /> By using the Site or our services, you agree to the collection and use of information in accordance with this policy.
                        </p>


                        <h3>1. Information We Collect</h3>
                        <p>We collect information that you voluntarily provide, such as:</p>
                        <ul>
                            <li><strong>Contact details:</strong> name, email address, phone number, company name</li>
                            <li><strong>Order information:</strong> artwork files, design details, service requests</li>
                            <li><strong>Billing information:</strong> billing address and payment details</li>
                            <li><strong>Usage data:</strong> IP address, browser type, pages visited, date/time</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Communicate with you about your requests and account</li>
                            <li>Improve our Site and services</li>
                            <li>Provide customer support</li>
                            <li>Send updates and marketing (with consent)</li>
                        </ul>

                        <h3>3. Cookies and Tracking</h3>
                        <p>We use cookies and similar technologies to collect usage data and enhance your browsing experience. You may choose to disable cookies via your browser settings, but some features may not work properly.</p>

                        <h3>4. Security of Information</h3>
                        <p>We follow industry best practices to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.</p>

                        <h3>5. Disclosure of Information</h3>
                        <p>We may share your data with:</p>
                        <ul>
                            <li>Service providers assisting with order processing or analytics</li>
                            <li>Legal authorities if required by law</li>
                            <li>Third parties in connection with a business transfer</li>
                        </ul>
                        <p>We do not sell your personal information to third parties.</p>

                        <h3>6. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted here with an updated effective date.</p>

                        <p>If you have any questions, contact us at <a href="mailto:orders@iniziosolutions.com"><span className="content-color text-lowercase">orders@iniziosolutions.com</span></a>.</p>
                    </div>
                </section>


            </Suspense>

        </>

    )
}