import MainArrowLinkButton from "@/app/components/MainArrowLinkButton";
import SectionHeading from "@/app/components/SectionHeading";

export default function StartIntegrating({ content }) {
  const {
    integrationPage: { sectionFive },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <SectionHeading
        containerClass="lg:text-left"
        heading={sectionFive.mainHeading}
        headingClass="font-medium"
        paragraph={sectionFive.mainParagraph}
        paragraphClass="lg:pr-96"
      />
      <MainArrowLinkButton
        href={sectionFive.mainButtonLink}
        target="_blank"
        text={sectionFive.mainButtonText}
      />
    </section>
  );
}
