import { officeLocations } from "@/data/data";
import Image from "next/image";

export default function GetInTouch({ content }) {
  const {
    contactUsPage: { sectionOne },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      {/* <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-4 py-16">
        <h2 className="-text-jungle-black text-[56px] lg:pr-64 font-medium">
          Let&apos;s Get In Touch
        </h2>
        <p className="text-[18.51px] leading-[27.76px] -text-black-cow lg:pl-10">
          Get your complex and repetitive manual business processes automated
          and achieve the overall operational efficiency. Please enter your
          details, and we will get back to you, or feel free to call us. We
          would love to hear from you.
        </p>
      </div> */}

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-44 sm:gap-8 justify-center items-center pt-24 mb-16">
        <div className="relative text-white">
          <div className="absolute top-0 left-0 md:py-16 md:px-14 sm:p-4 lg:text-left sm:text-center">
            <h4 className="lg:text-[38px] md:medium-text sm:small-text lg:leading-[44px] mb-6">
              {sectionOne.mainHeading}
            </h4>
            <p className="md:text-[16px] md:leading-6 sm:text-sm">
              {sectionOne.mainParagraph}
            </p>
          </div>
          <Image
            src={sectionOne.mainImage}
            alt="section image"
            className="w-full"
            width={584}
            height={316}
          />
        </div>

        <div className="text-black text-[22.89px] font-medium flex flex-col gap-6 lg:items-start sm:items-center lg:pr-48">
          {sectionOne.gridData.map((office, index) => (
            <div key={index}>
              <p className="mb-1.5">{office.title}</p>
              <p className="text-[16.78px] leading-[25.18px] font-normal mb-2">
                {office.address}
              </p>
              {office.phone && (
                <p className="text-[16.78px] underline font-normal mb-4">
                  {office.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
