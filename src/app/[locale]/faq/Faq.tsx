"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("Faq");
  type AccordianItemTypes = {
    trigger: string;
    content: string;
    value: string;
  };
  const accordianItems: AccordianItemTypes[] = [
    {
      value: "item-1",
      trigger: "How can I make a donation?",
      content:
        "You can make a donation through our website using our online giving options. Simply visit our donation page, choose your contribution amount, and follow the instructions to complete your donation.",
    },
    {
      value: "item-2",
      trigger: "Are donations tax-deductible?",
      content:
        "Donations are tax deductible depending on your individual tax situation. Please contact us if you need information about donation receipts or tax-deductible contributions. Generally donations above $300 will generate a receipt with special written aknowledgment.",
    },
    {
      value: "item-3",
      trigger: "How can I contact your organization?",
      content:
        "You can reach us through the contact form on our website, emailing sgmchurch1@gmail.com, or by phone 650-995-3336",
    },
    {
      value: "item-4",
      trigger: "How can I get a receipt for my donation?",
      content:
        "Please check your email for a donation confirmation or receipt after completing your contribution. If you cannot find it, contact us with your donation details so we can help.",
    },
    {
      value: "item-5",
      trigger: "How long does it take to receive a response?",
      content:
        "We aim to respond to inquiries as soon as possible. Response times may vary depending on the nature of your question and our current availability.",
    },
  ];

  return (
    <div className="">
      <h2 className="text-center font-bold md:text-5xl text-2xl">
        FAQ - Frequently Asked Questions
      </h2>

      <Accordion type="multiple" className="py-24 max-w-[840px]">
        {accordianItems.map((item, idx) => (
          <AccordionItem className="p-2" key={item.value} value={item.value}>
            <AccordionTrigger className="text-2xl cursor-pointer">
              {t(`faqContent.${idx}.itemTrigger`)}
            </AccordionTrigger>
            <AccordionContent className="text-base w-full">
              {t(`faqContent.${idx}.itemContent`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
