import MainLinkButton from "@/app/components/MainLinkButton";

import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    capabilitesPage: { sectionThree },
  } = content;

  return (
    <section className="bg-[#0055FF0A] lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="lg:container-large md:container-medium sm:container-small py-14">
        <h2 className="heading-style mb-12 text-center">
          {sectionThree.mainHeading}
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-12">
          {sectionThree.gridData.map((item, index, array) => (
            <div
              key={index}
              className={`
                flex flex-col gap-8 lg:items-start sm:items-center py-8 px-6 border-2 -border-quill-gray rounded-[10.47px] ${
                  index === array.length - 1
                    ? "-bg-alabaster lg:rounded-tr-[83.75px] lg:col-span-1 md:col-span-2"
                    : "bg-transparent"
                }`}
            >
              <div className="-bg-bright-blue flex justify-center items-center p-4 rounded-[13.44px]">
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>

              <p className="-text-thunder text-[18.88px] leading-[24.54px] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[27.1px] -text-thunder leading-[40.66px] font-medium mb-10 text-center">
          {sectionThree.secondaryHeading}
        </p>
        <MainLinkButton
          href={sectionThree.mainButtonLink}
          text={sectionThree.mainButtonText}
          containerClass="justify-center"
        />
      </div>
    </section>
  );
}
