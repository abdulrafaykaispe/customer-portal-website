import CancelIcon from "/public/cancel/cancel-icon.svg";

import Image from "next/image";

export default function CancelMessage() {
  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small text-center mt-28">
      <div className="shadow-[0_20px_50px_0_rgba(0,0,0,0.29)] flex flex-col justify-center items-center p-20 -text-jungle-black lg:mx-52 -border-b-purply-blue border-b-8">
        <Image src={CancelIcon} alt="icon" className="mb-8" />
        <h2 className="text-[35px] leading-[47.95px] font-medium mb-4">
          Please try again or use a different payment method
        </h2>
        <p className="text-[22px] leading-[30.14px] -text-paragraph-light">
          We appreciate your interest, but your payment was declined
        </p>
      </div>
    </section>
  );
}
