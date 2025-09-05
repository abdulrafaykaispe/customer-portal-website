import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SecondaryLinkButton({
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
        "bg-transparent inline-flex border-2 -border-davy-gray text-[15.76px] -text-davy-gray font-medium px-8 py-[0.625rem] rounded-full",
        className
      )}
      {...props}
    >
      {text}
    </Link>
  );
}
