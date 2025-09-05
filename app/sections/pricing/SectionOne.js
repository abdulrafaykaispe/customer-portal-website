"use client";

import CheckIcon from "/public/pricing/pricing-plan-check-icon.svg";

import { PRICING_OPTIONS } from "@/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SectionOne({ content }) {
  const {
    pricingPage: { sectionOne },
  } = content;
  const router = useRouter();
  const [selectedDuration, setSelectedDuration] = useState("3 Years");

  const options = ["Monthly", "1 Year", "2 Years", "3 Years"];
  const pricingPlans = [
    {
      plan: "Free Plan",
      description:
        "A free plan offers basic features at no cost, often with limitations on usage or customization.",
      price: PRICING_OPTIONS[selectedDuration].free,
      checkIcon: CheckIcon,
      points: sectionOne.freePlanPoints,
    },
    {
      plan: "Basic Plan",
      description:
        "A basic plan provides essential features at an affordable price, usually with limited upgrades.",
      price: PRICING_OPTIONS[selectedDuration].basic,
      defaultUsers: 5,
      checkIcon: CheckIcon,
      points: sectionOne.basicPlanPoints,
    },
    {
      plan: "Advanced Plan",
      description:
        "An advanced plan offers enhanced features and greater flexibility for a higher price.",
      price: PRICING_OPTIONS[selectedDuration].advanced,
      defaultUsers: 5,
      checkIcon: CheckIcon,
      points: sectionOne.advancePlanPoints,
    },
  ];

  const handleSubscribe = (plan, price, defaultUsers) => {
    const params = new URLSearchParams();
    params.set("duration", selectedDuration);
    params.set("plan", plan.toLowerCase().split(" ").at(0));
    params.set("price", price.toString());
    if (defaultUsers) {
      params.set("users", defaultUsers.toString());
    }

    router.push(`/process?${params.toString()}`);
  };

  return (
    <section className="lg:margin-bottom-large sm:margin-bottom-small lg:text-left sm:text-center bg-gradient-to-b from-[#E9E7FD] to-white">
      <div className="lg:container-large md:container-medium sm:container-small text-center pt-16">
        <div className="md:text-[18.61px] sm:text-xs -text-davy-gray font-medium inline-flex justify-center bg-white border-[1px] -border-quill-gray rounded-[27.91px]">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedDuration(option)}
              className={`flex text-center md:py-5 sm:py-3 md:px-10 sm:px-3.5 rounded-[27.91px] transition ${
                selectedDuration === option
                  ? "-bg-purply-blue text-white"
                  : "hover:bg-[#0055ff10]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:container-large md:container-medium sm:container-small grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-4 sm:gap-8 my-16">
        {pricingPlans.map((items, index, array) => (
          <div
            key={index}
            className={`flex flex-col gap-4 border-[1.5px] text-black -border-quill-gray p-10 rounded-[22px] lg:items-start sm:items-center ${
              index === array.length - 1
                ? "bg-gradient-to-b from-[#D3CFFB] from-1% to-[#FEFEFF] to-60% lg:col-span-1 md:col-span-2 lg:mx-0 md:mx-40"
                : "bg-white"
            }`}
          >
            <p
              className={`py-3 px-7 text-[16.73px] rounded-[11.58px] font-medium ${
                index === array.length - 1
                  ? "bg-white text-black"
                  : "-bg-purply-blue text-white"
              }`}
            >
              {items.plan}
            </p>
            <p className="text-[14px] leading-[21px] -text-battleship-gray">
              {items.description}
            </p>

            <p className="text-[36px] mb-3">
              <span className="font-medium">$ {items.price} </span>
              <span className="text-[16.94px] -text-battleship-gray">
                /User/Month
              </span>
            </p>

            <button
              onClick={() =>
                handleSubscribe(items.plan, items.price, items.defaultUsers)
              }
              className={`text-center w-full py-3 rounded-[12px] ${
                index === array.length - 1
                  ? "-bg-purply-blue text-white "
                  : "border-2 -border-gray-goose"
              }`}
            >
              Subscribe Now
            </button>

            <div className="border-[1px] border-[#00000024] my-4 w-full opacity-70"></div>

            <ul>
              {items.points.map((point, pointIndex) => (
                <li key={pointIndex} className="lg:flex gap-3 mb-4">
                  <Image
                    src={items.checkIcon}
                    alt="icon"
                    className="lg:inline-block sm:hidden"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
