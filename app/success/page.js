import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import SuccessMessage from "../sections/success/SuccessMessage";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function Success() {
  const content = await getContentFromFirestore();

  return (
    <>
      <Header />
      <MobileHeader />
      <SuccessMessage />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
