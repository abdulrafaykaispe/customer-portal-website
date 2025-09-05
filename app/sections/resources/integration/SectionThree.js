import SectionHeading from "@/app/components/SectionHeading";

import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    integrationPage: { sectionThree },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-16">
        <div className="flex lg:justify-start sm:justify-center lg:order-1 sm:order-2">
          <Image
            src={sectionThree.mainImage}
            alt="section image"
            width={456}
            height={456}
          />
        </div>

        <div className="flex flex-col lg:items-start sm:items-center lg:order-2 sm:order-1">
          <SectionHeading
            containerClass="lg:text-left"
            heading={sectionThree.mainHeading}
            paragraph={sectionThree.mainParagraph}
          />
          {sectionThree.gridData.map((item, index) => (
            <div
              key={index}
              className="flex lg:flex-row sm:flex-col gap-4 lg:justify-start lg:items-start sm:items-center sm:justify-start mb-8"
            >
              <div className="-bg-titan-white flex justify-center items-center rounded-[10.87px] p-3 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="-text-jungle-black text-[17px] leading-[22.1px] font-medium">
                  {item.title}
                </h3>
                <p className="-text-pale-sky text-[14px] leading-[21px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
