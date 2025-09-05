import BackgroundShape from "/public/cta-background-shape-image-two.png";
import MainLinkButton from "../components/MainLinkButton";

import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import SectionOne from "../sections/industries/SectionOne";
import SectionTwo from "../sections/EndingBackgroundCTA";
import SectionThree from "../sections/industries/SectionThree";
import SectionFour from "../sections/industries/SectionFour";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function Industries() {
  const content = await getContentFromFirestore();
  const {
    industriesPage: { bannerData, sectionTwo },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        heading={bannerData.mainHeading}
        paragraph={bannerData.mainParagraph}
      />
      <SectionOne content={content} />
      <SectionTwo
        backgroundImage={BackgroundShape}
        title={sectionTwo.mainHeading}
        titleClassName="mb-8"
        paragraph={sectionTwo.mainParagraph}
        paragraphClassName="mb-10"
      >
        <MainLinkButton
          href={sectionTwo.mainButtonLink}
          text={sectionTwo.mainButtonText}
          className="px-10"
        />
      </SectionTwo>
      <SectionThree content={content} />
      <SectionFour content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
