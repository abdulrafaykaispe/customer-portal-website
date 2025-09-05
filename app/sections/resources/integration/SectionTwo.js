import SectionHeading from "@/app/components/SectionHeading";
import BackgroundImage from "/public/resources/seamless-integration-background-image.png";

import Image from "next/image";

export default function SectionTwo({ content }) {
  const {
    integrationPage: { sectionTwo },
  } = content;

  return (
    <section
      className="lg:margin-bottom-large sm:margin-bottom-small bg-center bg-cover bg-no-repeat text-center pt-16 pb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${BackgroundImage.src})`,
      }}
    >
      <div className="lg:container-large md:container-medium sm:container-small">
        <SectionHeading
          heading={sectionTwo.mainHeading}
          paragraph={sectionTwo.mainParagraph}
          paragraphClass="lg:px-44 mb-12"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-stretch lg:text-left sm:text-center">
          {sectionTwo.gridData.map((item, index, array) => (
            <div
              key={index}
              className={`bg-[#FFFFFFBF] border-2 -border-quill-gray flex flex-col gap-4 p-10 lg:items-start sm:items-center rounded-[30px] ${
                index === array.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
              }`}
            >
              <div className="bg-[#0055FF14] flex justify-center items-center p-4 rounded-[14.64px]">
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <p className="-text-jungle-black text-[25px] leading-[37.5px] font-medium">
                {item.title}
              </p>
              <p className="-text-black-cow text-[18.85px] leading-[28.28px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
