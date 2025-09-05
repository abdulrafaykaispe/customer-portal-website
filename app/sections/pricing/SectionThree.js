import FrequentlyAskedQuestions from "../resources/SectionOne";
import MainArrowLinkButton from "@/app/components/MainArrowLinkButton";

export default function SectionThree({ content }) {
  const {
    pricingPage: { sectionThree },
  } = content;
  return (
    <section className="lg:margin-bottom-large sm:margin-bottom-small">
      <div className="lg:container-large md:container-medium sm:container-small flex lg:flex-row sm:flex-col sm:items-center gap-8 lg:text-left sm:text-center mb-12">
        <div className="lg:w-10/12">
          <h5 className="text-[35px] -text-jungle-black font-semibold mb-3">
            {sectionThree.mainHeading}
          </h5>
          <p className="text-[18px] -text-black-cow leading-[27px]">
            {sectionThree.mainParagraph}
          </p>
        </div>
        <div className="lg:w-1/2 lg:text-right">
          <MainArrowLinkButton
            href={sectionThree.mainButtonLink}
            text={sectionThree.mainButtonText}
          />
        </div>
      </div>

      <FrequentlyAskedQuestions index={3} content={content} />
    </section>
  );
}
