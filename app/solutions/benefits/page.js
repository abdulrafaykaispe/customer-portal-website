import BackgroundShape from "/public/cta-background-shape-image-two.png";
import MainLinkButton from "@/app/components/MainLinkButton";

import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import SectionOne from "@/app/sections/solutions/benefits/SectionOne";
import SectionTwo from "@/app/sections/EndingBackgroundCTA";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function Benefits() {
  const content = await getContentFromFirestore();
  const {
    benefitsPage: { bannerData, sectionTwo },
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
      <SectionTwo
        backgroundImage={BackgroundShape}
        title={sectionTwo.mainHeading}
        titleClassName="mb-9"
        paragraph={sectionTwo.mainParagraph}
        paragraphClassName="mb-11"
      >
        <MainLinkButton
          href={sectionTwo.mainButtonLink}
          text={sectionTwo.mainButtonText}
          className="px-10"
        />
      </SectionTwo>
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
