import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import SectionOne from "@/app/sections/solutions/capabilities/SectionOne";
import SectionTwo from "@/app/sections/solutions/capabilities/SectionTwo";
import SectionThree from "@/app/sections/solutions/capabilities/SectionThree";
import SectionFour from "@/app/sections/solutions/capabilities/SectionFour";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function Capabilities() {
  const content = await getContentFromFirestore();
  const {
    capabilitesPage: { bannerData },
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
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
