import Image from "next/image";

export default function SectionEight({ content }) {
  const {
    homePage: { sectionEight },
  } = content;

  return (
    <section
      id="insights"
      data-scroll-offset-175
      className="bg-[#F9F9FF] py-20 lg:margin-bottom-large sm:margin-bottom-small"
    >
      <div className="lg:container-large md:container-medium sm:container-small lg:text-left sm:text-center pb-2.5">
        <div className="flex lg:flex-row sm:flex-col justify-end lg:items-center gap-8 mb-12">
          <h2 className="heading-style lg:w-1/2 lg:pr-12">
            {sectionEight.mainHeading}
          </h2>
          <p className="paragraph-style lg:w-1/2 lg:pl-24">
            {sectionEight.mainHeading}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 sm:text-center lg:text-left">
          {sectionEight.gridData.map((item, index, array) => (
            <div
              key={index}
              className={`bg-white flex flex-col p-8 gap-5 border-[1.2px] -border-platinum rounded-[16.66px] lg:items-start sm:items-center ${
                index === array.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
              }`}
            >
              <div className="-bg-purply-blue flex justify-center items-center rounded-full p-3">
                <Image
                  src={item.icon}
                  alt={`icon ${index + 1}`}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <p className="text-[15.11px] -text-dove-gray mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
