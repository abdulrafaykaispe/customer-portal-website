import MainLinkButton from "@/app/components/MainLinkButton";
import SectionHeading from "@/app/components/SectionHeading";

export default function SectionFour({ content }) {
  const {
    industriesPage: { sectionFour },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small text-center">
      <SectionHeading
        heading={sectionFour.mainHeading}
        headingClass="font-medium mb-7"
        paragraph={sectionFour.mainParagraph}
        paragraphClass="lg:px-48 mb-10"
      />

      <MainLinkButton
        href={sectionFour.mainButtonLink}
        target="_blank"
        text={sectionFour.mainButtonText}
        containerClass="justify-center"
        className="px-10"
      />
    </section>
  );
}
