import BackgroundShape from "/public/cta-background-shape-image-two.png";

import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import SectionOne from "@/app/sections/solutions/ai-solutions/SectionOne";
import SectionTwo from "@/app/sections/solutions/ai-solutions/SectionTwo";
import SectionThree from "@/app/sections/solutions/ai-solutions/SectionThree";
import SectionFour from "@/app/sections/solutions/ai-solutions/SectionFour";
import SectionFive from "@/app/sections/EndingBackgroundCTA";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";
import MainLinkButton from "@/app/components/MainLinkButton";
import SecondaryLinkButton from "@/app/components/SecondaryLinkButton";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function AISolutions() {
  const content = await getContentFromFirestore();
  const {
    aiSolutionsPage: { bannerData, sectionFive },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        heading={bannerData.mainHeading}
        headingClassName="lg:px-64"
        paragraph={bannerData.mainParagraph}
      />
      <SectionOne content={content} />
      <SectionTwo content={content} />
      <SectionThree content={content} />
      <SectionFour content={content} />
      <SectionFive
        innerContainerClassName="py-20"
        backgroundImage={BackgroundShape}
        title={sectionFive.mainHeading}
        titleClassName="mb-9"
        paragraph={sectionFive.mainParagraph}
        paragraphClassName="mb-11"
      >
        <div className="flex md:flex-row sm:flex-col md:justify-center sm:items-center gap-4">
          <MainLinkButton
            href={sectionFive.mainButtonLink}
            text={sectionFive.mainButtonText}
            className="px-10"
          />
          <SecondaryLinkButton
            href={sectionFive.secondaryButtonLink}
            target="_blank"
            text={sectionFive.secondaryButtonText}
            className="py-3 px-8 -border-purply-blue -text-purply-blue"
          />
        </div>
      </SectionFive>
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
