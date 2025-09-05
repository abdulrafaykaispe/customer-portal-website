"use client";

import IconOpen from "/public/resources/frequently-asked-questions-open-icon.svg";
import IconClose from "/public/resources/frequently-asked-questions-close-icon.svg";

import { highlightEmail } from "@/utils/helpers";
import { useState } from "react";
import Image from "next/image";

export default function SectionOne({ index, content }) {
  const {
    faqPage: { sectionOne },
  } = content;
  const [curOpen, setCurOpen] = useState(0);

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small -text-jungle-black">
      <div className="flex flex-col">
        {sectionOne.faqSection
          .slice(0, index || sectionOne.faqSection.length)
          .map((item, index) => {
            const isOpen = index === curOpen;

            function handleToggle() {
              setCurOpen(isOpen ? null : index);
            }

            return (
              <div
                key={index}
                className={`flex flex-col justify-center cursor-pointer px-6 py-8 ${
                  isOpen
                    ? `-bg-purply-blue bg-opacity-10 rounded-[14px] ${
                        index === 0 ? "mt-0" : "mt-8"
                      }`
                    : "border-b-[0.7px] border-[#D4D4D4]"
                }`}
                onClick={handleToggle}
              >
                <div className="flex gap-4 justify-between items-center">
                  <p
                    className={`-text-dark-blue text-[19px] leading-[26.03px] font-medium ${
                      isOpen ? "-text-purply-blue" : ""
                    }`}
                  >
                    {item.question}
                  </p>

                  {isOpen ? (
                    <Image src={IconClose} alt="close" />
                  ) : (
                    <Image src={IconOpen} alt="open" />
                  )}
                </div>
                {isOpen && (
                  <div className="pt-6 pr-6">
                    <p>{highlightEmail(item.answer)}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}
