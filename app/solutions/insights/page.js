import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import SectionOne from "@/app/sections/solutions/insights/SectionOne";
import SectionTwo from "@/app/sections/solutions/insights/SectionTwo";
import SectionThree from "@/app/sections/solutions/insights/SectionThree";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function Insights() {
  const content = await getContentFromFirestore();
  const {
    insightsPage: { bannerData },
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
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
