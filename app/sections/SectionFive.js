import MainLinkButton from "../components/MainLinkButton";

import Image from "next/image";

export default function SectionFive({ content }) {
  const {
    homePage: { sectionFive },
  } = content;

  return (
    <section
      id="capabilities"
      data-scroll-offset-175
      className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left"
    >
      <div className="relative bg-[#473BF008] border-2 -border-quill-gray rounded-[40px] lg:pb-0 md:pb-12 sm:pb-6 overflow-hidden">
        <div className="flex lg:flex-row lg:items-center sm:flex-col lg:gap-0 sm:gap-8 md:p-12 md:pb-16 sm:pt-6 sm:pb-12 sm:px-6">
          <h2 className="heading-style lg:w-1/2">{sectionFive.mainHeading}</h2>
          <p className="paragraph-style lg:w-1/2">
            {sectionFive.mainParagraph}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr_1.5fr] md:grid-cols-2 sm:grid-cols-1 gap-8 lg:pl-12 lg:pr-32 md:px-12 sm:px-6">
          {sectionFive.gridData.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col py-8 px-6 gap-5 border-2 -border-platinum rounded-[16.66px] lg:items-start sm:items-center lg:mb-12"
            >
              <div
                className={`flex justify-center items-center rounded-full p-4`}
                style={{ backgroundColor: item.bgColor }}
              >
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <h3 className="text-[18.86px] -text-jungle-black leading-[24.28px] font-medium mt-4">
                {item.title}
              </h3>
              <p className="text-[15.11px] -text-gun-smoke">
                {item.description}
              </p>
            </div>
          ))}

          <Image
            src={sectionFive.mainImage}
            alt="section image"
            className="lg:inline-block sm:hidden absolute right-0 bottom-0"
            width={537}
            height={412}
          />
        </div>
      </div>

      <MainLinkButton
        href={sectionFive.mainButtonLink}
        text={sectionFive.mainButtonText}
        containerClass="justify-center mt-10"
      />
    </section>
  );
}
