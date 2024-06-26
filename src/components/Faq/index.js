import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="m-8">
        <div>
          <div className="flex gap-3 mb-4  mt-14 max-md:flex-wrap max-md:mt-10">
            <div className="flex justify-center items-center p-1.5 w-9 h-9 rounded-lg bg-red-700 bg-opacity-40">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ee25ce85fbb723cf8a24cfdaee1ed1d25930ce564d80ca4af62c545846abcd8?"
                className="w-6 aspect-square"
              />
            </div>
            <div className="my-auto text-lg capitalize text-stone-900 max-md:max-w-full">
              FAQ Question
            </div>
          </div>

          <div className="font-bold text-3xl mb-4">
            Frequently Asked Questions
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What types of awards and trophies do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer a wide range of awards and trophies, including
              plaques,medals,cups,glass awards,acrylic awards ,corporate
              awards,and custom-designed trophies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I customize my award or trophy?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Yes you can customize it according to your need.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How long does it take to receive my order?{" "}
            </AccordionTrigger>
            <AccordionContent>
              It depends on your location and it can be received within 3-5
              working days.It may change if there is customization requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
