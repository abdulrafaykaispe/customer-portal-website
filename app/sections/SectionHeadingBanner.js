import { twMerge } from "tailwind-merge";

export default function SectionHeadingBanner({
  heading,
  paragraph,
  outerContainerClassName = "",
  innerContainerClassName = "",
  headingClassName = "",
  paragraphClassName = "",
}) {
  return (
    <section
      className={twMerge(
        "-bg-purply-blue flex flex-col justify-center items-center py-24 lg:margin-bottom-large sm:margin-bottom-small",
        outerContainerClassName
      )}
    >
      <div
        className={twMerge(
          "lg:container-large md:container-medium sm:container-small text-center",
          innerContainerClassName
        )}
      >
        <h2
          className={twMerge(
            "heading-style text-white mb-8 lg:px-56",
            headingClassName
          )}
        >
          {heading}
        </h2>
        <p
          className={twMerge(
            "text-[18px] text-white leading-[27px] lg:px-28",
            paragraphClassName
          )}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}
