import FaqList from "../ui/FaqList";
import { DIGITIZING_FAQS } from "./faqData";

export default function FaqsDigitizing() {
  return <FaqList title="Frequently asked questions" items={DIGITIZING_FAQS} />;
}
