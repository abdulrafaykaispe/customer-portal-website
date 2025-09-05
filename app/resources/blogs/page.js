import Header from "@/app/sections/Header";
import MobileHeader from "@/app/sections/MobileHeader";
import SectionHeadingBanner from "@/app/sections/SectionHeadingBanner";
import BlogGrid from "@/app/sections/blogs/BlogGrid";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export default async function Blogs() {
  const content = await getContentFromFirestore();
  const {
    blogsPage: { bannerData },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionHeadingBanner
        heading={bannerData.mainHeading}
        paragraph={bannerData.mainParagraph}
      />
      <BlogGrid />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
