import SectionHeading from "@/app/components/SectionHeading";

import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    insightsPage: { sectionThree },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <SectionHeading
        heading={sectionThree.mainHeading}
        paragraph={sectionThree.mainParagraph}
        paragraphClass="mb-16"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 justify-center items-center">
        {sectionThree.gridData.map((item, index, array) => (
          <div
            key={index}
            className={`flex flex-col lg:items-start sm:items-center gap-5 ${
              index === array.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
            }`}
          >
            <div className="h-[63px]">
              <Image
                src={item.icon}
                alt={`icon ${index + 1}`}
                width={item.width}
                height={item.height}
              />
            </div>
            <p className="text-[21.85px] leading-[32.78px] -text-thunder font-medium">
              {item.title}
            </p>
            <p className="text-[14.86px] leading-[22.29px] -text-smokey-gray">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
