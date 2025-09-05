"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";

export default function SectionOne({ content }) {
  const {
    insightsPage: { sectionOne },
  } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isInitialPosition, setIsInitialPosition] = useState(true);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    dragSpeed: 0.5,

    slides: {
      perView: 1.6,
      spacing: 30,
    },

    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 1.2,
          spacing: 25,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 1.17,
          spacing: 15,
        },
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      const isInitial = Math.abs(slider.track.details.position) < 1;
      setIsInitialPosition(isInitial);
    },
    created(slider) {
      setLoaded(true);
      setIsInitialPosition(Math.abs(slider.track.details.position) < 1);
    },
    detailsChanged(slider) {
      const isInitial = Math.abs(slider.track.details.position) < 1;
      setIsInitialPosition(isInitial);
    },
  });

  return (
    <section className="lg:margin-bottom-large sm:margin-bottom-small">
      <div className="lg:container-large md:container-medium sm:container-small text-center mb-16">
        <h3 className="text-[32px] -text-jungle-black leading-[48px] font-medium mb-6">
          {sectionOne.mainHeading}
        </h3>
        <p className="paragraph-style lg:px-48">{sectionOne.mainParagraph}</p>
      </div>

      <div
        ref={sliderRef}
        className={`keen-slider transition-all duration-1000 ${
          isInitialPosition ? "lg:pl-24 md:pl-16 sm:pl-8" : "pl-0"
        }`}
      >
        {sectionOne.gridData.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide -bg-soap-stone flex flex-col p-8 gap-8 border-2 -border-quill-gray min-w-[868px] rounded-[16.66px] lg:items-start sm:items-center lg:text-left sm:text-center"
          >
            <p className="text-[24px] -text-jungle-black leading-[31.2px] font-medium text-center w-full">
              {item.heading}
            </p>
            <div className="border-[1px] -border-quill-gray w-full opacity-50"></div>
            <div className="flex flex-col lg:items-start sm:items-center">
              <Image
                src={item.iconOne}
                alt={`icon ${index + 1}`}
                className="mb-4"
                width={50}
                height={50}
              />
              <p className="text-[20px] -text-jungle-black font-medium mb-2">
                {item.titleOne}
              </p>
              <p className="text-[14.59px] -text-pale-sky leading-[21.88px]">
                {item.descriptionOne}
              </p>
            </div>
            <div className="flex flex-col lg:items-start sm:items-center flex-grow justify-end">
              <Image
                src={item.iconTwo}
                alt={`icon ${index + 1}`}
                className="mb-4"
                width={50}
                height={50}
              />
              <p className="text-[20px] -text-jungle-black font-medium mb-2">
                {item.titleTwo}
              </p>
              <p className="text-[14.59px] -text-pale-sky leading-[21.88px]">
                {item.descriptionTwo}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={"dot-ov" + (currentSlide === idx ? " active" : "")}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
}
