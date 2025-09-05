import MainArrowLinkButton from "../components/MainArrowLinkButton";
import SecondaryLinkButton from "../components/SecondaryLinkButton";

import Image from "next/image";

export default function FooterCTA({ content }) {
  const { footer } = content;

  return (
    <div className="lg:container-large md:container-medium sm:container-small">
      <div className="-bg-ghost-white rounded-[27.91px] relative lg:flex justify-between -mb-52 md:px-12 sm:px-8 lg:text-left sm:text-center">
        <div className="flex flex-[1.4] flex-col py-12 gap-12">
          <p className="text-[29px] leading-[43.5px] -text-dune font-medium lg:pr-20">
            {footer.mainHeading}
          </p>

          <div className="flex md:flex-row sm:flex-col lg:justify-start md:justify-center md:self-auto sm:self-center gap-6">
            <MainArrowLinkButton
              href={footer.mainButtonLink}
              text={footer.mainButtonText}
              target="_blank"
            />
            <SecondaryLinkButton
              href={footer.secondaryButtonLink}
              text={footer.secondaryButtonText}
              className="px-11"
            />
          </div>
        </div>

        <div className="sm:hidden lg:flex lg:flex-[0.8] justify-end">
          <Image
            src={footer.mainImage}
            alt="footer image"
            width={447}
            height={313}
          />
        </div>
      </div>
    </div>
  );
}
