"use client";

import { truncateText } from "@/utils/helpers";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";

export default function SectionOne({ content }) {
  const {
    capabilitesPage: { sectionOne },
  } = content;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    dragSpeed: 0.5,

    slides: {
      perView: 4,
      spacing: 30,
    },

    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 2,
          spacing: 25,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div ref={sliderRef} className="keen-slider">
        {sectionOne.gridData.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col py-8 px-6 gap-8 border-2 -border-quill-gray min-w-[310px] rounded-[16.66px] lg:items-start sm:items-center"
          >
            <div
              className={`flex justify-center items-center rounded-full p-4`}
              style={{ backgroundColor: item.bgColor }}
            >
              <Image
                src={item.icon}
                alt={`icon ${index + 1}`}
                width={item.width}
                height={item.height}
              />
            </div>
            <p className="text-[18px] -text-jungle-black leading-[22.28px] font-medium md:h-[44.56px]">
              {item.title}
            </p>
            <p className="text-[15.11px] -text-dune">
              {expandedIndex === index
                ? item.description
                : truncateText(item.description, 10)}{" "}
            </p>
            <div className="flex flex-grow items-end">
              <button
                className="text-[15px] text-black font-medium"
                onClick={() => {
                  toggleDescription(index);
                }}
              >
                {expandedIndex === index ? "Hide Details" : "See More"}
              </button>
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
              className={"dot-cf" + (currentSlide === idx ? " active" : "")}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
}
