import SecondHero from "../components/SecondHero"
import OrderForm from "../components/OrderForm"

export default function placeanorder(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
         <SecondHero subheading="Place an Order"
                        headingone={"Place an"}
                        heading="Order"
                        description="Explore our portfolio highlighting exceptional services and innovative solutions, along with the custom promotional products we’ve crafted for clients across industries." />
        
        <OrderForm/>
        </Suspense>
    )
}