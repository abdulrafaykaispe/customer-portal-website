"use client";

import BackgroundImage from "/public/industries-we-serve-background-image.png";
import HeadingPill from "../components/HeadingPill";
import MainLinkButton from "../components/MainLinkButton";
import SectionHeading from "../components/SectionHeading";

import { useState, Fragment } from "react";
import Image from "next/image";

export default function SectionTen({ content }) {
  const {
    homePage: { sectionTen },
  } = content;
  const { optionOne, optionTwo, optionThree } = sectionTen;
  const [activeTab, setActiveTab] = useState("Industries");

  return (
    <section
      id="industries"
      data-scroll-offset-175
      className="text-center overflow-x-clip"
    >
      <div className="lg:container-large md:container-medium sm:container-small">
        <div className="bg-white md:inline-flex sm:hidden justify-center border-[0.78px] md:text-base sm:text-xs border-[#D9D9D9] rounded-full mb-12">
          <button
            className={`w-52 h-[52px] rounded-full font-medium transition duration-300 ${
              activeTab === "Industries"
                ? "-bg-purply-blue text-white"
                : "text-[#5D5D5D]"
            }`}
            onClick={() => setActiveTab("Industries")}
          >
            Industries
          </button>
          <button
            className={`w-52 h-[52px] rounded-full font-medium transition duration-300 ${
              activeTab === "Integration"
                ? "-bg-purply-blue text-white"
                : "text-[#5D5D5D]"
            }`}
            onClick={() => setActiveTab("Integration")}
          >
            Integration
          </button>
          <button
            className={`w-52 h-[52px] rounded-full font-medium transition duration-300 ${
              activeTab === "API Documentation"
                ? "-bg-purply-blue text-white"
                : "text-[#5D5D5D]"
            }`}
            onClick={() => setActiveTab("API Documentation")}
          >
            API Documentation
          </button>
        </div>

        <div className="relative sm:block md:hidden mb-12">
          <select
            className="w-full border-[0.78px] border-[#D9D9D9] rounded-full px-4 py-2 pr-10 text-[#5D5D5D] focus:outline-none"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="Industries">Industries</option>
            <option value="Integration">Integration</option>
            <option value="API Documentation">API Documentation</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <svg
              className="h-5 w-5 -text-jungle-green"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {activeTab === "Industries" && (
        <section className="lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left overflow-x-clip">
          <div
            className="flex flex-col justify-center items-center pt-12"
            style={{
              backgroundImage: `url(${BackgroundImage.src})`,
            }}
          >
            <HeadingPill
              text={optionOne.mainHighlight}
              className="bg-[#E6EEFF] -text-purply-blue px-8"
            />
            <h2 className="heading-style">{optionOne.mainHeading}</h2>

            <div className="flex my-12">
              <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
                {[...new Array(2)].fill(0).map((_, arrayIndex) => (
                  <Fragment key={arrayIndex}>
                    {optionOne.gridData.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="relative rounded-[10.13px] flex-shrink-0"
                      >
                        <Image
                          src={item.image}
                          alt={`image ${itemIndex + 1}`}
                          width={370}
                          height={408}
                        />

                        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[26px] leading-[35.62px] font-medium text-center">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:container-large md:container-medium sm:container-small mt-10">
            <SectionHeading
              heading={optionOne.secondaryHeading}
              paragraph={optionOne.secondaryParagraph}
              paragraphClass="lg:px-24"
            />
            <MainLinkButton
              href={optionOne.mainButtonLink}
              text={optionOne.mainButtonText}
              containerClass="justify-center"
            />
          </div>
        </section>
      )}

      {activeTab === "Integration" && (
        <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small sm:text-center lg:text-left">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-32 sm:gap-20">
            <div className="flex flex-col gap-2 lg:items-start sm:items-center -text-dark-gray">
              <HeadingPill
                text={optionTwo.mainHighlight}
                className="bg-[#E6EEFF] -text-purply-blue px-8"
              />
              <SectionHeading
                containerClass="lg:text-left"
                heading={optionTwo.mainHeading}
                paragraph={optionTwo.mainParagraph}
                paragraphClass="mb-0"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src={optionTwo.mainImage}
                alt="section image"
                width={543.53}
                height={362}
              />
            </div>
          </div>
          <div className="text-center mt-16 space-y-8">
            <h3 className="lg:text-2xl sm:text-xl -text-jungle-black font-medium lg:px-40">
              {optionThree.secondaryHeading}
            </h3>
            <MainLinkButton
              containerClass="justify-center"
              href={optionTwo.mainButtonLink}
              text={optionTwo.mainButtonText}
              className="text-white"
            />
          </div>
        </section>
      )}

      {activeTab === "API Documentation" && (
        <section className="bg-[#F9F9FF] py-16 lg:margin-bottom-large sm:margin-bottom-small">
          <div className="lg:container-large md:container-medium sm:container-small sm:text-center lg:text-left">
            <div className="flex flex-col justify-center items-center text-center">
              <SectionHeading
                heading={optionThree.mainHeading}
                paragraph={optionThree.mainParagraph}
                paragraphClass="lg:px-32 mb-9"
              />
              <h3 className="lg:text-xl sm:text-lg -text-jungle-black font-medium mb-9">
                {optionThree.secondaryParagraph}
              </h3>
              <MainLinkButton
                containerClass="justify-center"
                href={optionThree.mainButtonLink}
                target="_blank"
                text={optionThree.mainButtonText}
                className="text-white"
              />
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
