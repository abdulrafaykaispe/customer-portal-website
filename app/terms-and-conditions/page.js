import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import TermsNConditions from "../sections/policies-and-terms/TermsNConditions";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function TermsAndConditions() {
  const content = await getContentFromFirestore();
  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        outerContainerClassName="!mb-0"
        heading="Terms & Conditions"
        paragraph="Welcome! These Terms & Conditions govern your use of our SaaS application provided by KAISPE. By accessing or using our application, you agree to be bound by these Terms."
      />
      <TermsNConditions content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
