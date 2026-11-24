import FaqList from "./ui/FaqList";
import { DIGITIZING_FAQS } from "./faqs/faqData";

export default function Faqs() {
  return <FaqList title="Frequently asked questions" items={DIGITIZING_FAQS} />;
}
