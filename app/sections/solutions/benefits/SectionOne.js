import Image from "next/image";

export default function SectionOne({ content }) {
  const {
    benefitsPage: { sectionOne },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 justify-center items-stretch">
        {sectionOne.gridData.map((item, index, array) => (
          <div
            key={index}
            className={`-bg-soap-stone flex flex-col p-8 gap-5 border-2 -border-iron rounded-[11.15px] lg:items-start sm:items-center ${
              index === array.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
            }`}
          >
            <div className="h-[55px]">
              <Image
                src={item.icon}
                alt={`icon ${index + 1}`}
                width={item.width}
                height={item.height}
              />
            </div>
            <h3 className="text-[20px] -text-jungle-black leading-[26px] font-medium">
              {item.title}
            </h3>
            <p className="text-[12px] -text-gun-smoke leading-[18px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
