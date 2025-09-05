import BackgroundShape from "/public/cta-background-shape-image-two.png";

import MobileHeader from "../sections/MobileHeader";
import Header from "../sections/Header";
import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import SectionOne from "../sections/pricing/SectionOne";
import SectionTwo from "../sections/EndingBackgroundCTA";
import SectionThree from "../sections/pricing/SectionThree";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";
import MainLinkButton from "../components/MainLinkButton";

import { getContentFromFirestore } from "../services/apiData";

export default async function Pricing() {
  const content = await getContentFromFirestore();
  const {
    pricingPage: { bannerData, sectionTwo },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        outerContainerClassName="sm:mb-0"
        heading={bannerData.mainHeading}
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
      <SectionThree content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
