"use client";

import OpenIcon from "/public/better-smart-solutions-open-icon.svg";
import CloseIcon from "/public/better-smart-solutions-close-icon.svg";

import { useState } from "react";
import Image from "next/image";

export default function SectionSeven({ content }) {
  const {
    homePage: { sectionSeven },
  } = content;
  const [curOpen, setCurOpen] = useState(0);

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center overflow-x-clip">
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-20 justify-center items-center">
        <div className="-text-dark-gray">
          <h2 className="heading-style">{sectionSeven.mainHeading}</h2>

          {sectionSeven.faqSection.map((item, index, array) => {
            const isOpen = index === curOpen;

            function handleToggle() {
              setCurOpen(isOpen ? null : index);
            }

            return (
              <div
                key={index}
                className={`flex flex-col justify-center cursor-pointer py-6 text-left ${
                  index === array.length - 1
                    ? ""
                    : "border-b-[0.7px] border-[#D4D4D4]"
                }`}
                onClick={handleToggle}
              >
                <div className="flex gap-4 justify-between items-center">
                  <p className="text-[19px] leading-[28.5px] -text-jungle-black font-medium">
                    {item.question}
                  </p>

                  {isOpen ? (
                    <Image src={CloseIcon} alt="close" />
                  ) : (
                    <Image src={OpenIcon} alt="open" />
                  )}
                </div>
                {isOpen && (
                  <div className="pt-3 lg:pr-20">
                    <p className="text-[15.34px] -text-gun-smoke leading-[23.01px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative flex lg:justify-end sm:justify-center">
          <Image
            src={sectionSeven.mainImage}
            alt="section image"
            className="absolute max-w-none top-1/2 -translate-y-1/2 left-[60%] -translate-x-1/2"
            width={760}
            height={473.61}
          />
        </div>
      </div>
    </section>
  );
}
