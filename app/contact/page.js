import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import SectionOne from "../sections/contact/SectionOne";
import SectionTwo from "../sections/contact/SectionTwo";
import FindUsOnMaps from "../sections/contact/FindUsOnMaps";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function Contact() {
  const content = await getContentFromFirestore();
  const {
    contactUsPage: { bannerData },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        outerContainerClassName="sm:mb-0"
        heading={bannerData.mainHeading}
        paragraph={bannerData.mainParagraph}
        paragraphClassName="lg:px-48"
      />
      <SectionOne content={content} />
      <SectionTwo content={content} />
      <FindUsOnMaps content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
