import Image from "next/image";
import Link from "next/link";

export default function HoverDownMenu({ data }) {
  return (
    <div className="-bg-page inline-flex flex-col rounded-b-[10px] px-6 shadow-[0_7.41px_42.35px_0_rgba(0,0,0,0.12)]">
      {data.map((items, index) => {
        return (
          <Link
            href={items.link}
            key={index}
            target={items.link.includes("https") ? "_blank" : "_self"}
          >
            <ul
              className={`flex items-start gap-4 py-6 ${
                index === data.length - 1
                  ? ""
                  : "border-b-[0.84px] border-[#EBEBEB]"
              }`}
            >
              <div
                className={`flex justify-center items-center w-[46.5px] h-[48.7px] rounded-[11.51px] ${
                  index === 0 ? "-bg-purply-blue" : "-bg-titan-white"
                }`}
              >
                <Image src={items.icon} alt="icon" />
              </div>
              <div>
                <li className="text-[18px] -text-thunder font-medium">
                  {items.linkName}
                </li>
                <li className="text-[14.82px] -text-carbon-gray">
                  {items.linkDescription}
                </li>
              </div>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}
