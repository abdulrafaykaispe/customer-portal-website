"use client";

import Link from "next/link";
import Logo from "/public/images/KaispeLogo.png";
import Hamburger from "/public/mobile-hamburger-icon.png";
import CloseIcon from "/public/mobile-close-icon.png";
import LeftArrow from "/public/mobile-arrow-down.png";
import SignInHoverMenu from "../components/SignInHoverMenu";

import { mobileNavLinks } from "@/data/data";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  return (
    <header
      id="headerMobile"
      className="sticky top-0 lg:hidden sm:block bg-white z-50"
    >
      <div className="py-5 md:container-medium sm:container-small">
        <div className="flex justify-between items-center relative z-20">
          <Link href="/">
            <Image src={Logo} alt="logo" width={123} priority />
          </Link>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <Image src={CloseIcon} alt="close icon" width={42} priority />
            ) : (
              <Image src={Hamburger} alt="hamburger icon" width={42} priority />
            )}
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-full -bg-page z-10 pt-28 transition-all duration-700 ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } pointer-events-${isMenuOpen ? "auto" : "none"}`}
        >
          <nav className="flex flex-col space-y-6 text-xl -text-jungle-black md:container-medium sm:container-small">
            {mobileNavLinks.map((link, index) => (
              <div key={index}>
                {link.submenu ? (
                  <>
                    <div
                      className="flex justify-between"
                      onClick={() => toggleSubmenu(link.label)}
                    >
                      {link.label}
                      <Image
                        src={LeftArrow}
                        alt="arrow"
                        width={26}
                        height={26}
                        className={`transform ${
                          activeSubmenu === link.label
                            ? "rotate-180"
                            : "-rotate-90"
                        }`}
                      />
                    </div>
                    {activeSubmenu === link.label && (
                      <div className="flex flex-col pl-5 mt-3 space-y-3">
                        {link.submenu.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href}
                            target={subLink.external ? "_blank" : "_self"}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="flex justify-between items-center"
                  >
                    {link.label}
                    <Image
                      src={LeftArrow}
                      alt="arrow"
                      width={26}
                      height={26}
                      className="-rotate-90"
                    />
                  </Link>
                )}
              </div>
            ))}

            <div onClick={openSignInModal}>Sign In</div>
            {signInModalOpen && (
              <div
                className="absolute lg:top-0 md:-top-52 sm:top-0 left-0 w-full h-full flex justify-center items-center"
                onClick={closeSignInModal}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <SignInHoverMenu />
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
