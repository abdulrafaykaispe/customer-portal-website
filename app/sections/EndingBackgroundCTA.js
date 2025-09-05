import { twMerge } from "tailwind-merge";

export default function EndingBackgroundCTA({
  backgroundImage = null,
  title = "",
  paragraph = "",
  endingTitle = "",
  OuterContainerclassName = "",
  innerContainerClassName = "",
  titleClassName = "",
  paragraphClassName = "",
  endingTitleClassName = "",
  children,
}) {
  return (
    <section
      className={twMerge(
        "-bg-alabaster text-center lg:margin-bottom-large sm:margin-bottom-small bg-cover bg-center bg-no-repeat",
        OuterContainerclassName
      )}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : "none",
      }}
    >
      <div
        className={twMerge(
          "lg:container-large md:container-medium sm:container-small py-16",
          innerContainerClassName
        )}
      >
        <div className="flex flex-col justify-between items-center">
          {title && (
            <h2
              className={twMerge(
                "heading-style font-medium mb-5",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}

          {paragraph && (
            <p
              className={twMerge(
                "-text-black-cow text-[20.85px] leading-[31.27px] mb-8 lg:px-20",
                paragraphClassName
              )}
            >
              {paragraph}
            </p>
          )}

          {endingTitle && (
            <h3
              className={twMerge(
                "-text-thunder text-[27.1px] leading-[40.66px] font-medium",
                endingTitleClassName
              )}
            >
              {endingTitle}
            </h3>
          )}

          {children && <div>{children}</div>}
        </div>
      </div>
    </section>
  );
}
