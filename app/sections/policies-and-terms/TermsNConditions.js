"use client";

import Icon from "/public/time-icon.svg";

import Image from "next/image";

const scrollToSection = (title) => {
  const element = document.getElementById(title);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function TermsNConditions({ content }) {
  const {
    termsAndConditionsPage: { mainHeadings, gridData },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small">
      <div className="grid lg:grid-cols-[1fr_2.5fr] sm:grid-cols-1 items-stretch lg:py-20 md:py-16 sm:py-12">
        <div className="py-2 px-8 border-r-2 border-l-slate-800 space-y-8 lg:inline-block sm:hidden">
          {gridData.map(({ title }) => (
            <h3
              key={title}
              className="text-lg text-[#737373] cursor-pointer hover:text-[#473BF0] font-medium"
              onClick={() => scrollToSection(title)}
            >
              {title}
            </h3>
          ))}
        </div>
        <div className="py-2 lg:px-10 text-[#334770] text-sm">
          <div className="flex items-center gap-4 mb-3">
            <Image src={Icon} alt="icon" />
            <span className="text-[#473BF0]">{mainHeadings.effectiveDate}</span>
          </div>
          <p className="mb-6">{mainHeadings.mainHeadline}</p>

          <div className="space-y-8">
            {gridData.map((item) => (
              <div
                key={item.title}
                id={item.title}
                data-scroll-offset="true"
                className="space-y-3.5"
              >
                <h3 className="text-[#1F1F1F] text-2xl font-semibold">
                  {item.title}
                </h3>
                {item.desOne && <p className="">{item.desOne}</p>}
                <ul className="list-disc list-inside space-y-1 pl-3">
                  {item.points &&
                    item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                </ul>
                {item.desTwo && <p>{item.desTwo}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-[#1F1F1F] text-2xl text-center font-medium lg:px-64">
        {mainHeadings.endHeading}
      </h3>
    </section>
  );
}
