import SecondaryLinkButton from "../components/SecondaryLinkButton";

export default function SectionFourteen({ content }) {
  const {
    homePage: { sectionFourteen },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="relative -bg-purply-blue flex lg:flex-row sm:flex-col lg:items-center gap-12 rounded-[40px] py-12 md:px-16 sm:px-8 overflow-clip">
        <div className="absolute bg-[#5C50FB] w-[431px] h-[431px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30"></div>
        <div className="absolute bg-[#6B61FF] w-[747px] h-[747px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-20"></div>
        <div className="absolute bg-[#766DFF] w-[977px] h-[977px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10"></div>

        <div className="z-40">
          <h3 className="text-[28.67px] leading-[43px] font-medium mb-8 lg:pr-64">
            {sectionFourteen.mainHeading}
          </h3>
          <p className="paragraph-style text-white lg:pr-40">
            {sectionFourteen.mainParagraph}
          </p>
        </div>
        <div className="flex justify-center flex-shrink-0 z-40">
          <SecondaryLinkButton
            href={sectionFourteen.mainButtonLink}
            text={sectionFourteen.mainButtonText}
            className="lg:text-[18.28px] lg:py-[0.875rem] px-10 text-white border-white"
          />
        </div>
      </div>
    </section>
  );
}
