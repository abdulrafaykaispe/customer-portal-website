import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SectionTwo({ content }) {
  const {
    homePage: { sectionTwo },
  } = content;

  return (
    <section className="overflow-x-clip mt-4 mb-16">
      <div className="flex">
        <div className="flex gap-6 pr-6 flex-none animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, arrayIndex) => (
            <Fragment key={arrayIndex}>
              {sectionTwo.gridData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  draggable={false}
                  target="_blank"
                  className="bg-[#F8FAFF] border-[1.5px] border-[#EEEEEE] inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-full lg:w-[300px] md:w-[290px] sm:w-[280px]"
                >
                  <div
                    className="flex justify-center items-center flex-shrink-0 md:w-[84.97px] md:h-[84.97px] sm:w-[79.97px] sm:h-[79.97px] rounded-full"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Image
                      src={item.icon}
                      alt={`image ${index + 1}`}
                      width={item.width}
                      height={item.height}
                      draggable={false}
                    />
                  </div>
                  <span className="md:text-lg sm:text-base -text-jungle-green font-semibold">
                    {item.title}
                  </span>
                </Link>
              ))}
            </Fragment>
          ))}
        </div>
        z
      </div>
    </section>
  );
}
