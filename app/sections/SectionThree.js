import HeadingPill from "../components/HeadingPill";
import SecondaryLinkButton from "../components/SecondaryLinkButton";
import SectionHeading from "../components/SectionHeading";

import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    homePage: { sectionThree },
  } = content;

  return (
    <section
      id="key-features"
      data-scroll-offset-175
      className="-bg-tuna py-24 lg:margin-bottom-large sm:margin-bottom-small"
    >
      <div className="lg:container-large md:container-medium sm:container-small text-center">
        <HeadingPill text={sectionThree.mainHighlight} />
        <SectionHeading
          heading={sectionThree.mainHeading}
          headingClass="text-white"
          paragraph={sectionThree.mainParagraph}
          paragraphClass="lg:px-52 -text-quill-gray mb-16"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:text-center lg:text-left">
          {sectionThree.gridData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col py-8 px-6 gap-5 border-2 -border-mulled-wine rounded-[16.66px] lg:items-start sm:items-center"
            >
              <div
                className={`flex justify-center items-center rounded-full p-4`}
                style={{ backgroundColor: item.bgColor }}
              >
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.iconWidth}
                  height={item.iconHeight}
                />
              </div>
              <h3 className="text-[18.86px] leading-[24.28px] font-medium mt-4">
                {item.title}
              </h3>
              <p className="text-[15.11px] -text-silver-chalice mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <SecondaryLinkButton
          href={sectionThree.mainButtonLink}
          text={sectionThree.mainButtonText}
          className="border-white text-white mt-12"
        />
      </div>
    </section>
  );
}
