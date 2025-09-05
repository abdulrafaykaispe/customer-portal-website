import BackgroundShape from "/public/cta-background-shape-image-two.png";

import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import SectionOne from "@/app/sections/resources/integration/SectionOne";
import SectionTwo from "@/app/sections/resources/integration/SectionTwo";
import SectionThree from "@/app/sections/resources/integration/SectionThree";
import SectionFour from "@/app/sections/EndingBackgroundCTA";
import StartIntegrating from "@/app/sections/resources/integration/SectionFive";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function Integration() {
  const content = await getContentFromFirestore();
  const {
    integrationPage: { bannerData, sectionFour },
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
      <SectionTwo content={content} />
      <SectionThree content={content} />
      <SectionFour
        backgroundImage={BackgroundShape}
        title={sectionFour.mainHeading}
        titleClassName="mb-5"
        paragraph={sectionFour.mainParagraph}
        paragraphClassName="mb-8"
      ></SectionFour>
      <StartIntegrating content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
