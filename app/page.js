import BackgroundShape from "/public/cta-background-shape-image-one.jpg";
import LinkButtonArrow from "./components/MainArrowLinkButton";

import Header from "./sections/Header";
import MobileHeader from "./sections/MobileHeader";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionNavbarNavigation from "./sections/SectionNavbarNavigation";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import SectionNine from "./sections/SectionNine";
import SectionTen from "./sections/SectionTen";
import SectionEleven from "./sections/SectionEleven";
import SectionTwelve from "./sections/SectionTwelve";
import SectionThirteen from "./sections/SectionThirteen";
import SectionFourteen from "./sections/SectionFourteen";
import SectionFifteen from "./sections/SectionFifteen";
import SectionSixteen from "./sections/EndingBackgroundCTA";
import SectionSeventeen from "./sections/SectionSeventeen";
import FooterCTA from "./sections/FooterCTA";
import Footer from "./sections/Footer";

import { getContentFromFirestore } from "./services/apiData";

export default async function Home() {
  const content = await getContentFromFirestore();
  const {
    homePage: { sectionSixteen },
  } = content;

  return (
    <>
      <Header />
      <MobileHeader />
      <SectionOne content={content} />
      <SectionTwo content={content} />
      <SectionNavbarNavigation content={content} />
      <SectionThree content={content} />
      <SectionFour content={content} />
      <SectionFive content={content} />
      <SectionSix content={content} />
      <SectionSeven content={content} />
      <SectionEight content={content} />
      <SectionNine content={content} />
      <SectionTen content={content} />
      <SectionEleven content={content} />
      <SectionTwelve content={content} />
      <SectionThirteen content={content} />
      <SectionFourteen content={content} />
      <SectionFifteen content={content} />
      <SectionSixteen
        backgroundImage={BackgroundShape}
        title={sectionSixteen.mainHeading}
        titleClassName="mb-10"
        paragraph={sectionSixteen.mainParagraph}
        paragraphClassName="mb-12"
      >
        <LinkButtonArrow
          href={sectionSixteen.mainButtonLink}
          text={sectionSixteen.mainButtonText}
        />
      </SectionSixteen>
      <SectionSeventeen content={content} />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
