import Header from "../sections/Header";
import MobileHeader from "../sections/MobileHeader";
import CancelMessage from "../sections/cancel/CancelMessage";
import FooterCTA from "../sections/FooterCTA";
import Footer from "../sections/Footer";

import { getContentFromFirestore } from "../services/apiData";

export default async function Cancel() {
  const content = await getContentFromFirestore();

  return (
    <>
      <Header />
      <MobileHeader />
      <CancelMessage />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
