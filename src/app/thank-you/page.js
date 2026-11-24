import Link from "next/link"
import StatusPage from "../components/ui/StatusPage"

export default function ThankYou() {
    return (
        <StatusPage
            icon="✓"
            title="Thank you for placing"
            highlight="your order!"
            actions={
                <>
                    <Link href="/" className="iz-btn iz-btn--ink">Back to home</Link>
                    <Link href="/place-an-order" className="iz-btn iz-btn--outline">Place another order</Link>
                </>
            }
        >
            Our team will review your requirements and begin the process shortly. You can expect your work to be delivered within
            3 - 4 hours. We appreciate your trust in our services and look forward to delivering high-quality results. If you have
            any questions, email us at orders@iniziosolutions.com.
        </StatusPage>
    )
}
