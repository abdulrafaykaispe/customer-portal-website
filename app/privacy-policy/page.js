import SectionHeadingBanner from "../sections/SectionHeadingBanner";
import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import PrivacyPolicies from "../sections/policies-and-terms/PrivacyPolicies";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function PrivacyPolicy() {
  const content = await getContentFromFirestore();

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        outerContainerClassName="!mb-0"
        heading="Privacy Policy"
        paragraph="We're here to help! reach us by email us at info@kaispe.com for any quries or concerns."
      />
      <PrivacyPolicies content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
