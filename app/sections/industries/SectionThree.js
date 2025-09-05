import SectionHeading from "@/app/components/SectionHeading";

import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    industriesPage: { sectionThree },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left">
      <SectionHeading
        heading={sectionThree.mainHeading}
        paragraph={sectionThree.mainParagraph}
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {sectionThree.gridData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:items-start sm:items-center gap-4"
          >
            <div className="h-[60.48px]">
              <Image
                src={item.icon}
                alt={`icon ${index + 1}`}
                width={item.width}
                height={item.height}
              />
            </div>

            <p className="text-[20px] -text-thunder font-medium">
              {item.title}
            </p>
            <p className="text-[18px] leading-[27px] -text-smokey-gray">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
