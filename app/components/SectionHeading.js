import { twMerge } from "tailwind-merge";

export default function SectionHeading({
  heading,
  paragraph,
  containerClass,
  headingClass,
  paragraphClass,
}) {
  return (
    <div className={twMerge("text-center", containerClass)}>
      <h2 className={twMerge("heading-style mb-6", headingClass)}>{heading}</h2>
      <p className={twMerge("paragraph-style mb-10", paragraphClass)}>
        {paragraph}
      </p>
    </div>
  );
}
