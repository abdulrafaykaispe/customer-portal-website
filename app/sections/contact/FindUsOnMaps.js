import SectionHeading from "@/app/components/SectionHeading";

import Image from "next/image";

export default function FindUsOnMaps({ content }) {
  const {
    contactUsPage: { sectionThree },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small">
      <SectionHeading
        heading={sectionThree.mainHeading}
        headingClass="font-medium mb-4"
        paragraph={sectionThree.mainParagraph}
        paragraphClass="text-[18.96px] leading-[28.45px] lg:px-48"
      />

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-8 sm:gap-16">
        {sectionThree.gridData.map((office, index) => (
          <div key={index}>
            <div className="-bg-ghost-white p-4">
              <Image
                src={office.image}
                alt={`map address ${index + 1}`}
                className="w-full"
                width={624}
                height={466.61}
              />
            </div>
            <div className="text-center text-black mt-8">
              <p className="text-[22.89px] mb-2 font-medium">{office.title}</p>
              <p className="text-[16.78px] leading-[25.18px] lg:px-24">
                {office.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
