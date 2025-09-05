import { twMerge } from "tailwind-merge";

export default function HeadingPill({ text, className = "" }) {
  return (
    <div
      className={twMerge(
        "inline-block -bg-mulled-wine px-6 py-2 rounded-full text-[16.63px] font-medium mb-6",
        className
      )}
    >
      {text}
    </div>
  );
}
