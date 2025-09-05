import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MainLinkButton({
  href = "/",
  text,
  containerClass = "",
  className = "",
  target = "_self",
  ...props
}) {
  return (
    <div className={twMerge("flex", containerClass)}>
      <Link
        href={href}
        target={target}
        className={twMerge(
          "-bg-purply-blue text-[15px] font-medium px-8 py-3.5 rounded-full",
          className
        )}
        {...props}
      >
        {text}
      </Link>
    </div>
  );
}
