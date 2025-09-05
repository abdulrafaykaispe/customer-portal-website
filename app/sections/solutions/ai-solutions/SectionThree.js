"use client";

import { aiMajorBenefits } from "@/data/data";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";

export default function SectionThree({ content }) {
  const {
    aiSolutionsPage: { sectionThree },
  } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
    <section className="bg-[#0055FF0A] lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="lg:container-large md:container-medium sm:container-small py-20">
        <h2 className="heading-style mb-12 text-center">
          {sectionThree.mainHeading}
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {sectionThree.gridData.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col py-8 px-6 gap-8 border-2 -border-quill-gray min-w-[310px] rounded-[16.66px] lg:items-start sm:items-center"
            >
              <div className="-bg-bright-blue flex justify-center items-center p-3 rounded-[13.44px]">
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <p className="text-[18px] -text-jungle-black leading-[22.28px] font-medium">
                {item.title}
              </p>
              <p className="text-[15.11px] -text-dune">{item.description}</p>
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
      </div>
    </section>
  );
}
