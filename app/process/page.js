import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import ProcessLayout from "../sections/process/ProcessLayout";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function Process() {
  const content = await getContentFromFirestore();

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        outerContainerClassName="sm:mb-0"
        heading="Pricing Process"
        paragraph="Unsure which plan best suits your needs? Contact us for expert advice!"
      />
      <ProcessLayout />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
