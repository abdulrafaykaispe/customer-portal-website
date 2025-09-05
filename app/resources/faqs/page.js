import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionOne from "@/app/sections/resources/SectionOne";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function FAQS() {
  const content = await getContentFromFirestore();
  const {
    faqPage: { bannerData },
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
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
