"use client";

import { truncateText } from "@/utils/helpers";
import { useState } from "react";
import Image from "next/image";

export default function SectionOne({ content }) {
  const {
    industriesPage: { sectionOne },
  } = content;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
        {sectionOne.gridData.map((item, index) => (
          <div
            key={index}
            className="-bg-alabaster flex flex-col -bg-section border-[1.37px] -border-mercury rounded-[12.75px]"
          >
            <Image
              src={item.image}
              alt={`icon ${index + 1}`}
              className="w-full"
              width={422}
              height={249.41}
            />
            <div className="flex flex-col lg:items-start sm:items-center flex-grow gap-4 p-7">
              <p className="-text-jungle-black text-[22px] leading-[28.6px] font-medium">
                {item.title}
              </p>
              <p className="-text-pale-sky text-[17px] leading-[25.5px]">
                {expandedIndex === index
                  ? item.description
                  : truncateText(item.description, 14)}{" "}
              </p>
              <div className="flex flex-grow items-end">
                <button
                  className="text-[16px] -text-purply-blue font-medium"
                  onClick={() => {
                    toggleDescription(index);
                  }}
                >
                  {expandedIndex === index ? "Hide Details" : "View More..."}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
