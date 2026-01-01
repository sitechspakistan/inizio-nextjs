import Link from "next/link"
import SecondHero from "../components/SecondHero"

export default function ThankYou() {
    return (
        <>
            <SecondHero 
            
            subheading={
            <>
            <Link href="/place-an-order">Place an Order</Link>
            </>
            }
                headingone={"Thank You"}
                heading="for your order!"
                description={
                    <>
                        Thank you for placing your order! Our team will review your requirements and begin the process shortly. You can expect your work to be delivered within 3 - 4 hours. We appreciate your trust in our services and look forward to delivering high-quality results.
                         {""}<br/> <br/>  If you have any questions or queries, please feel free to contact us via email at orders@iniziosolutions.com. {""}
                    </>
                }
            />
        </>
    )
}