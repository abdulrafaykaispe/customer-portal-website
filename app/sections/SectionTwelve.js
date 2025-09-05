import SectionHeading from "../components/SectionHeading";
import MainLinkButton from "../components/MainLinkButton";

import Image from "next/image";

export default function SectionTwelve({ content }) {
  const {
    homePage: { sectionTwelve },
  } = content;

  return (
    <section
      id="challenges"
      data-scroll-offset-175
      className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left"
    >
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-16">
        <div className="lg:relative flex lg:justify-start sm:justify-center lg:order-1 sm:order-2">
          <div className="lg:absolute lg:-bg-titan-white lg:top-0 lg:left-0 lg:w-[551px] lg:h-[451px] lg:rounded-[10px] -z-10"></div>
          <Image
            src={sectionTwelve.mainImage}
            alt="section image"
            className="lg:mt-4 lg:ml-4"
            width={551}
            height={451}
          />
        </div>

        <div className="lg:pl-11 lg:order-2 sm:order-1">
          <SectionHeading
            containerClass="lg:text-left"
            heading={sectionTwelve.mainHeading}
            headingClass="mb-10"
            paragraph={sectionTwelve.mainParagraph}
            paragraphClass="mb-16"
          />

          <MainLinkButton
            href={sectionTwelve.mainButtonLink}
            containerClass="lg:justify-start sm:justify-center"
            text={sectionTwelve.mainButtonText}
            className="px-8"
          />
        </div>
      </div>
    </section>
  );
}
