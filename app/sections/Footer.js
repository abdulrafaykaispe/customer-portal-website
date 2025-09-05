import KaispeLogo from "/public/kaispe-footer-logo.svg";
import MicrosoftPurpleLogo from "/public/microsoft-purple-logo.svg";
import MicrosoftBlueLogo from "/public/microsoft-blue-logo.svg";
import GoldPartner from "/public/gold-partner-logo.svg";

import { socialMediaLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ content }) {
  const { footer } = content;

  return (
    <footer>
      <div className="-bg-footer pt-64 flex flex-col justify-end">
        <div className="lg:container-large md:container-medium sm:container-small">
          <div className="flex lg:flex-row sm:flex-col gap-12 lg:text-left sm:text-center">
            <div className="lg:flex-[2] flex flex-col lg:items-start sm:items-center gap-8">
              <Image src={KaispeLogo} alt="kaispe logo" />
              <p className="text-[13.17px] lg:px-0 md:px-24 sm:px-0">
                {footer.description}
              </p>
              <div className="flex gap-4 items-center">
                <Image src={GoldPartner} alt="microsoft partner logo" />
                <Image src={MicrosoftPurpleLogo} alt="microsoft logo" />
                <Image src={MicrosoftBlueLogo} alt="microsoft logo" />
              </div>
            </div>

            <div className="lg:flex-[1] flex flex-col lg:items-start sm:items-center gap-8">
              <div className="flex flex-col gap-3 text-[14.48px] text-white">
                <p className="text-[19.31px] font-semibold">Overview</p>
                <div className="relative before:absolute lg:before:left-0 lg:before:-translate-x-0 sm:before:left-1/2 sm:before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[34px] before:h-[3px] before:-bg-bright-blue mb-1"></div>
                {footer.overview.map((item, index) => (
                  <Link key={index} href={item.href} target={item.target}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:flex-[1] flex flex-col lg:items-start sm:items-center gap-8">
              <div className="flex flex-col gap-3 text-[14.48px] text-white">
                <p className="text-[20.71px] font-semibold">Quick Access</p>
                <div className="relative before:absolute lg:before:left-0 lg:before:-translate-x-0 sm:before:left-1/2 sm:before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[34px] before:h-[3px] before:-bg-bright-blue mb-1"></div>
                {footer.quickAccess.map((item, index) => (
                  <Link key={index} href={item.href} target={item.target}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:flex-[1.3] flex flex-col lg:items-start sm:items-center gap-8 text-[14.48px] text-white">
              <div className="flex flex-col gap-3">
                <p className="text-[19.31px] font-semibold text-white">Email</p>
                <div className="relative before:absolute lg:before:left-0 lg:before:-translate-x-0 sm:before:left-1/2 sm:before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[34px] before:h-[3px] before:-bg-bright-blue mb-1"></div>
                <p>{footer.email}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[19.31px] font-semibold text-white">
                  Contact Number
                </p>
                <div className="relative before:absolute lg:before:left-0 lg:before:-translate-x-0 sm:before:left-1/2 sm:before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[34px] before:h-[3px] before:-bg-bright-blue mb-1"></div>
                {footer.contactNumbers.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>

            <div className="lg:flex-[2] flex flex-col gap-4 text-[14.06px] text-white">
              <p className="text-[18.75px] font-semibold text-white">Address</p>
              <div className="relative before:absolute lg:before:left-0 lg:before:-translate-x-0 sm:before:left-1/2 sm:before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-[34px] before:h-[3px] before:-bg-bright-blue mb-1"></div>
              {footer.addresses.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <div className="flex gap-2 lg:justify-start sm:justify-center items-center">
                {socialMediaLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-full border-gray-300 p-1 ${
                      index === socialMediaLinks.length - 1
                        ? "flex items-center justify-center h-[26.2px]"
                        : ""
                    }`}
                  >
                    <Link href={link.link} target="_blank">
                      <Image src={link.icon} alt={link.alt} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-12 pb-8 flex flex-col gap-8">
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-screen before:border-t-[0.4px] before:border-white before:opacity-15"></div>
            <div className="flex lg:flex-row sm:flex-col justify-between lg:gap-0 sm:gap-6">
              <p className="text-[17px]">
                &copy; 2025&nbsp;
                <Link
                  href="https://www.kaispe.com/"
                  className="-text-dodger-blue underline"
                  target="_blank"
                >
                  KAISPE
                </Link>
                <span className="-text-light-blue">.</span> All Rights Reserved.
              </p>
              <Link
                href="/privacy-policy"
                target="_blank"
                className="-text-dodger-blue underline text-[18px]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
