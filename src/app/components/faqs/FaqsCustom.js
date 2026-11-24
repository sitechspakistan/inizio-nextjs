import FaqList from "../ui/FaqList";
import { PATCH_FAQS } from "./faqData";

export default function FaqsCustom() {
  return <FaqList eyebrow="Custom patches FAQs" title="Frequently asked questions" items={PATCH_FAQS} />;
}
