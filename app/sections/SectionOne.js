"use client";

import PlayButton from "/public/hero-image-play-button.svg";
import GoldPartnerIcon from "/public/hero-gold-partner-icon.svg";
import PurpleLogo from "/public/microsoft-purple-logo.svg";
import BlueLogo from "/public/microsoft-blue-logo.svg";
import MainArrowLinkButton from "../components/MainArrowLinkButton";
import SecondaryLinkButton from "../components/SecondaryLinkButton";
import HeadingPill from "../components/HeadingPill";

import Image from "next/image";
import Link from "next/link";

export default function SectionOne({ content }) {
  const {
    homePage: { sectionOne },
  } = content;

  return (
    <section>
      <div className="lg:container-large md:container-medium sm:container-small lg:my-16 md:my-12 sm:my-8 sm:text-center lg:text-left">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-0 sm:gap-16 items-center">
          <div className="flex flex-col">
            <HeadingPill
              text={sectionOne.mainHighlight}
              className="lg:self-start sm:self-center bg-[#E6EEFF] -text-purply-blue mb-4"
            />
            <h1 className="-text-jungle-green text-[41.48px] leading-[59.73px] font-semibold mb-8">
              {sectionOne.mainHeading}
            </h1>
            <div className="relative lg:flex gap-4 mb-10">
              <div className="lg:w-[20px] lg:max-h-full -bg-purply-blue opacity-20"></div>
              <p className="-text-carbon-gray text-[17px] leading-[25.5px] lg:pr-12">
                {sectionOne.mainParagraph}
              </p>
            </div>
            <div className="flex lg:flex-row sm:flex-col lg:gap-8 sm:gap-6 items-center mb-8">
              <MainArrowLinkButton
                href={sectionOne.mainButtonLink}
                target="_blank"
                text={sectionOne.mainButtonText}
              />
              <SecondaryLinkButton
                href={sectionOne.secondaryButtonLink}
                text={sectionOne.secondaryButtonText}
              />
            </div>
            <div className="flex lg:justify-start sm:justify-center items-center gap-5">
              <Image src={GoldPartnerIcon} alt="gold partner logo" />
              <Image src={PurpleLogo} alt="gold partner logo" width={78} />
              <Image src={BlueLogo} alt="gold partner logo" width={78} />
            </div>
          </div>

          <div className="relative flex lg:justify-end sm:justify-center">
            <Image
              src={sectionOne.mainImage}
              alt="hero image"
              width={672}
              height={452.78}
              priority
            />
            <Link
              href={sectionOne.youtubeVideoLink}
              target="_blank"
              className="cursor-pointer border-none bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Image src={PlayButton} alt="play button" priority />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
