"use client";

import PlayButton from "/public/hero-image-play-button.svg";
import HeadingPill from "../components/HeadingPill";
import MainArrowLinkButton from "../components/MainArrowLinkButton";
import SectionHeading from "../components/SectionHeading";
import CloseIcon from "/public/mobile-close-icon.png";

import { useState } from "react";
import Image from "next/image";

export default function StoriesVideos({ content }) {
  const {
    homePage: { sectionThirteen },
  } = content;
  const { optionOne, optionTwo } = sectionThirteen;
  const [activeTab, setActiveTab] = useState("stories");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small text-center">
      <div className="bg-white inline-flex justify-center border-[0.78px] border-[##D9D9D9] rounded-full mb-12">
        <button
          className={`md:px-16 sm:px-10 lg:py-3.5 md:py-3 sm:py-2 rounded-full font-medium transition duration-300 ${
            activeTab === "stories"
              ? "-bg-purply-blue text-white"
              : "text-[#5D5D5D]"
          }`}
          onClick={() => setActiveTab("stories")}
        >
          Stories
        </button>
        <button
          className={`md:px-16 sm:px-10 lg:py-3.5 md:py-3 sm:py-2 rounded-full font-medium transition duration-300 ${
            activeTab === "videos"
              ? "-bg-purply-blue text-white"
              : "text-[#5D5D5D]"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-12 lg:text-left">
        {activeTab === "stories" ? (
          <div className="flex flex-col">
            <HeadingPill
              text={optionOne.mainHighlight}
              className="lg:self-start sm:self-center bg-[#E6EEFF] -text-purply-blue mb-4"
            />
            <SectionHeading
              containerClass="lg:text-left"
              heading={optionOne.mainHeading}
              paragraph={optionOne.mainParagraph}
            />
            <div className="inline-flex w-full lg:justify-start sm:justify-center">
              <MainArrowLinkButton
                href={optionOne.mainButtonLink}
                target="_blank"
                text={optionOne.mainButtonText}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <HeadingPill
              text={optionTwo.mainHighlight}
              className="lg:self-start sm:self-center bg-[#E6EEFF] -text-purply-blue mb-4"
            />
            <div className="bg-white flex rounded-[20px] overflow-clip shadow-[0_16px_80px_0_rgba(0,0,0,0.08)] mt-6">
              <blockquote>
                <div className="p-8">
                  <Image
                    src={optionTwo.quoteIcon}
                    alt="quote icon"
                    className="inline-block"
                    width={82}
                    height={82}
                  />
                  <p className="-text-jungle-black md:text-lg sm:text-base mt-2">
                    {optionTwo.review}
                  </p>
                </div>
                <cite>
                  <div className="bg-[#F9FAFC] p-8 flex items-center lg:justify-start sm:justify-center gap-6">
                    <Image
                      src={optionTwo.personImage}
                      alt="avatar"
                      width={73}
                      height={73}
                    />
                    <div className="md:text-base sm:text-xs text-left">
                      <div className="-text-jungle-black not-italic mb-1">
                        {optionTwo.name}
                      </div>
                      <div className="-text-jungle-black not-italic">
                        {optionTwo.designation}
                      </div>
                    </div>
                  </div>
                </cite>
              </blockquote>
            </div>
          </div>
        )}

        <div className="flex lg:justify-end sm:justify-center">
          {activeTab === "stories" && (
            <Image
              src={optionOne.mainImage}
              alt="section image"
              width={573}
              height={536}
            />
          )}
          {activeTab === "videos" && (
            <div className="relative inline-flex">
              <button
                className="cursor-pointer border-none bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src={PlayButton}
                  alt="play button"
                  priority
                  className="md:w-[107px] md:h-[107px] sm:w-[67px] sm:h-[67px]"
                />
              </button>
              <Image
                src={optionTwo.mainImage}
                alt="section image"
                className="rounded-[20px]"
                width={573}
                height={536}
              />
            </div>
          )}
        </div>

        {showVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowVideo(false);
              }
            }}
          >
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white text-3xl font-bold"
              >
                <Image src={CloseIcon} alt="close icon" width={36} />
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={optionTwo.videoLink}
                  title="Real Impact of KAISPE’s Supply Chain Management App | Customer Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
