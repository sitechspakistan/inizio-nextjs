import SecondHero from "../components/SecondHero"
import OrderForm from "../components/OrderForm"
import { Suspense } from "react"

export default function placeanorder(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
         <SecondHero subheading="Place an Order"
                        headingone={"Place an"}
                        heading="Order"
                        description="Tell us what you need and upload your artwork. We'll send back a clean, machine-ready embroidery file, print-ready vector or patch quote fast. Your first order is free." />
        
        <OrderForm/>
        </Suspense>
    )
}