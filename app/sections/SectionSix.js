import BackgroundImage from "/public/transform-your-business-background-image.png";
import SecondaryLinkButton from "../components/SecondaryLinkButton";
import SectionHeading from "../components/SectionHeading";

export default function SectionSix({ content }) {
  const {
    homePage: { sectionSix },
  } = content;

  return (
    <section
      id="ai-powered"
      data-scroll-offset-175
      className="lg:margin-bottom-large sm:margin-bottom-small py-20 text-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundColor: "rgba(52, 51, 81)",
      }}
    >
      <div className="lg:container-large md:container-medium sm:container-small pb-2.5">
        <SectionHeading
          heading={sectionSix.mainHeading}
          headingClass="lg:px-56 text-white"
          paragraph={sectionSix.mainParagraph}
          paragraphClass="lg:px-36 text-white"
        />
        <SecondaryLinkButton
          href={sectionSix.mainButtonLink}
          text={sectionSix.mainButtonText}
          className="border-white text-white"
        />
      </div>
    </section>
  );
}
