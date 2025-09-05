"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";

export default function SectionFour({ content }) {
  const {
    aiSolutionsPage: { sectionFour },
  } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    dragSpeed: 0.5,

    slides: {
      perView: 4,
      spacing: 50,
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
        {sectionFour.gridData.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col lg:items-start sm:items-center gap-5 min-w-[290px]"
          >
            <div className="h-[63px]">
              <Image
                src={item.icon}
                alt={`icon ${index + 1}`}
                width={item.width}
                height={item.height}
              />
            </div>
            <p className="text-[21.85px] leading-[32.78px] -text-thunder font-medium">
              {item.title}
            </p>
            <p className="text-[14.86px] leading-[22.29px] -text-smokey-gray">
              {item.description}
            </p>
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
