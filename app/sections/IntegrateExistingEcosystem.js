import MainLinkButton from "../components/MainLinkButton";
import SectionHeading from "../components/SectionHeading";
import SectionImage from "/public/integrate-existing-ecosystem-image.png";

import Image from "next/image";

export default function IntegrateExistingEcosystem() {
  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small text-center">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-16 mb-14">
        <SectionHeading
          containerClass="lg:text-left"
          heading="Integrate with your Existing Ecosystem for Seamless Operations"
          headingClass="mb-10"
          paragraph="At KAISPE, we understand the challenges of managing multiple systems and processes in today's fast-paced business world. That's why we've designed our Customer Portal to integrate seamlessly with your existing infrastructure, helping you save time, reduce costs, and boost efficiency."
          paragraphClass="mb-0"
        />

        <div className="flex lg:justify-end sm:justify-center">
          <Image src={SectionImage} alt="section image" />
        </div>
      </div>

      <p className="text-[22px] -text-jungle-black leading-[33px] font-medium lg:px-44 mb-8">
        Connect with your CRM, ERP, and inventory management systems for
        real-time data synchronization and streamlined workflows.
      </p>
      <MainLinkButton
        href="/resources/integration"
        text="See Integrations"
        containerClass="justify-center"
      />
    </section>
  );
}
