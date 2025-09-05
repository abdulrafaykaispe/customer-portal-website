"use client";

import IconOpen from "/public/icon-open.svg";
import IconClose from "/public/icon-close.svg";
import SectionHeading from "../components/SectionHeading";

import { useState } from "react";
import Image from "next/image";

export default function SectionFifteen({ content }) {
  const {
    homePage: { sectionFifteen },
  } = content;
  const [curOpen, setCurOpen] = useState(0);

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small">
      <SectionHeading
        containerClass="lg:text-left"
        heading={sectionFifteen.mainHeading}
        headingClass="lg:px-0 mb-4"
        paragraph={sectionFifteen.mainParagraph}
        paragraphClass="lg:px-0 lg:pr-96"
      />

      <div className="flex flex-col">
        {sectionFifteen.faqSection.map((el, index, array) => {
          const isOpen = index === curOpen;

          function handleToggle() {
            setCurOpen(isOpen ? null : index);
          }

          return (
            <div
              key={index}
              className={`flex flex-col justify-center cursor-pointer px-6 py-8 ${
                isOpen
                  ? "-bg-purply-blue/10 mt-8 rounded-[14px]"
                  : index === array.length - 1
                  ? ""
                  : "border-b-[0.7px] border-[#D4D4D4]"
              }`}
              onClick={handleToggle}
            >
              <div className="flex gap-4 justify-between items-center">
                <p
                  className={`text-[19px] leading-[26.03px] font-medium ${
                    isOpen ? "-text-purply-blue" : "-text-jungle-black"
                  }`}
                >
                  {el.question}
                </p>

                {isOpen ? (
                  <Image src={IconClose} alt="close" />
                ) : (
                  <Image src={IconOpen} alt="open" />
                )}
              </div>
              {isOpen && (
                <div className="pt-4">
                  <p className="-text-jungle-black">{el.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
