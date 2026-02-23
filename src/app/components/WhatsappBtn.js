export default function WhatsAppButton() {
    const phoneNumber = "+13027791338"; // apna number daalo

    return (
        <a
            href={`http://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <i className="fab fa-whatsapp fa-2x"></i>
        </a>
    );
}