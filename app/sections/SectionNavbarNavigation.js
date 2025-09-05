"use client";

import ArrowIcon from "/public/section-navbar-navigation-icon.svg";

import { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  { title: "Key Features", id: "key-features" },
  { title: "Order Management", id: "order-management" },
  { title: "Capabilities", id: "capabilities" },
  { title: "AI Powered", id: "ai-powered" },
  { title: "Insights", id: "insights" },
  { title: "Industries", id: "industries" },
  { title: "Challenges", id: "challenges" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function SectionNavbarNavigation() {
  const [topOffset, setTopOffset] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const updateNavHeights = () => {
      const primaryNavElement = document.getElementById("header");
      const primaryMobileNavElement = document.getElementById("headerMobile");

      const navHeight = primaryNavElement?.offsetHeight || 0;
      const mobileNavHeight = primaryMobileNavElement?.offsetHeight || 0;

      const isMobile = window.innerWidth <= 1200;
      setTopOffset(isMobile ? mobileNavHeight : navHeight);
    };

    updateNavHeights();
    window.addEventListener("resize", updateNavHeights);

    return () => {
      window.removeEventListener("resize", updateNavHeights);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section
      id="secondary-navbar"
      className="-bg-purply-blue sticky lg:py-5 sm:py-4 z-50 shadow-md"
      style={{ top: `${topOffset}px` }}
    >
      <div
        className={
          "lg:container-large md:container-medium sm:container-small md:container-medium sm:container-small"
        }
      >
        <div className="lg:flex sm:hidden justify-center items-center gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              <span onClick={() => scrollToSection(item.id)}>{item.title}</span>
              <Image src={ArrowIcon} alt="arrow icon" />
            </div>
          ))}
        </div>

        <div className="sm:flex lg:hidden justify-center items-center gap-8">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span>Go To Section</span>
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-screen overflow-hidden -bg-purply-blue shadow-lg transition-all duration-300 linear ${
                isDropdownOpen ? "max-h-96 " : "max-h-0"
              }`}
            >
              {data.map((item, index, array) => (
                <div
                  key={index}
                  className={`flex items-center justify-center gap-3 cursor-pointer p-2 ${
                    index === array.length - 1 ? "pb-4" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsDropdownOpen(false);
                  }}
                >
                  <span>{item.title}</span>
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
