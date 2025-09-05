import MainLinkButton from "../components/MainLinkButton";
import SectionHeading from "../components/SectionHeading";

import Image from "next/image";

export default function SectionEleven({ content }) {
  const {
    homePage: { sectionEleven },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-16">
        <div>
          <SectionHeading
            containerClass="lg:text-left"
            heading={sectionEleven.mainHeading}
            headingClass="mb-10"
            paragraph={sectionEleven.mainParagraph}
            paragraphClass="mb-16"
          />

          <MainLinkButton
            href={sectionEleven.mainButtonLink}
            containerClass="lg:justify-start sm:justify-center"
            text={sectionEleven.mainButtonText}
          />
        </div>

        <div className="flex lg:justify-end sm:justify-center">
          <Image
            src={sectionEleven.mainImage}
            alt="section image"
            width={550}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
