import ArrowRight from "/public/button-right-arrow.svg";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MainArrowLinkButton({
  href = "/",
  text,
  className = "",
  target = "_self",
  ...props
}) {
  return (
    <Link
      href={href}
      target={target}
      className={twMerge(
        "-bg-purply-blue rounded-full text-[16px] inline-flex justify-between gap-4 py-3 px-6 items-center",
        className
      )}
      {...props}
    >
      {text}

      <div>
        <Image src={ArrowRight} alt="arrow right" />
      </div>
    </Link>
  );
}
