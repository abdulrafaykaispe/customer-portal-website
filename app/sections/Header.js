"use client";

import Logo from "/public/images/KaispeLogo.png";
import ArrowDown from "/public/tiny-arrow-down.svg";
import MainLinkButton from "../components/MainLinkButton";
import HoverDownMenu from "../components/HoverDownMenu";
import SignInHoverMenu from "../components/SignInHoverMenu";

import Image from "next/image";
import Link from "next/link";
import { solutionsData, resourcesData } from "@/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  {
    name: "Solutions",
    type: "dropdown",
    data: solutionsData,
  },
  {
    name: "Resources",
    type: "dropdown",
    data: resourcesData,
  },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [solutionsLinkLeft, setSolutionsLinkLeft] = useState(0);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [resourcesLinkLeft, setResourcesLinkLeft] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showSignInHover, setShowSignInHover] = useState(false);
  const headerRef = useRef(null);
  const signInRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSolutionsMenu(false);
      setShowResourcesMenu(false);
      setShowSignInHover(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        signInRef.current &&
        !signInRef.current.contains(event.target) &&
        hoverRef.current &&
        !hoverRef.current.contains(event.target)
      ) {
        setShowSignInHover(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = useCallback(
    (event, type) => {
      const linkElement = event.currentTarget;

      if (linkElement) {
        const linkRect = linkElement.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();
        const leftPosition = linkRect.left - headerRect.left;

        if (type === "solutions") {
          setSolutionsLinkLeft(leftPosition);
          setShowSolutionsMenu(true);
          setShowResourcesMenu(false);
        } else if (type === "resources") {
          setResourcesLinkLeft(leftPosition);
          setShowResourcesMenu(true);
          setShowSolutionsMenu(false);
        }
      }
    },
    [headerRef]
  );

  const handlingMouseEnterForAll = useCallback(() => {
    setShowSolutionsMenu(false);
    setShowResourcesMenu(false);
  }, []);

  return (
    <header
      id="header"
      className="sticky top-0 -bg-header shadow-[0_4px_30px_0_rgba(0,0,0,0.06)] lg:block sm:hidden z-60"
      onMouseLeave={handlingMouseEnterForAll}
      ref={headerRef}
    >
      <div className="lg:container-large md:container-medium sm:container-small relative z-10 py-6">
        <div className="flex justify-between items-center text-[15px] font-medium">
          <Link href="/" onMouseEnter={handlingMouseEnterForAll}>
            <Image priority src={Logo} alt="logo" width={170} />
          </Link>

          <nav className="flex gap-11">
            {mainLinks.map((link, index) => {
              if (link.type === "dropdown") {
                return (
                  <div
                    key={index}
                    className="relative after:content-[''] after:block after:h-[3px] after:rounded-full after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:-bg-purply-blue after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-110"
                    onMouseEnter={(e) =>
                      handleMouseEnter(e, link.name.toLowerCase())
                    }
                  >
                    <div
                      className={`hover-container ${
                        pathname.startsWith(`/${link.name.toLowerCase()}`)
                          ? "-text-purply-blue"
                          : "-text-jungle-green"
                      } flex items-center gap-2`}
                    >
                      {link.name}
                      <Image
                        src={ArrowDown}
                        alt="arrow down"
                        className="rotate-arrow"
                      />
                    </div>

                    {(link.name === "Solutions"
                      ? showSolutionsMenu
                      : showResourcesMenu) && (
                      <div
                        style={{
                          top: `${headerHeight}px`,
                          left: `${
                            link.name === "Solutions"
                              ? solutionsLinkLeft
                              : resourcesLinkLeft
                          }px`,
                        }}
                        className="fixed z-50 transition-all duration-300 ease-in-out"
                        onMouseLeave={() =>
                          link.name === "Solutions"
                            ? setShowSolutionsMenu(false)
                            : setShowResourcesMenu(false)
                        }
                      >
                        <HoverDownMenu data={link.data} />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`relative ${
                    pathname === link.path
                      ? "-text-purply-blue"
                      : "-text-jungle-green"
                  } after:content-[''] after:block after:h-[3px] after:rounded-full after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:-bg-purply-blue after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-110`}
                  onMouseEnter={handlingMouseEnterForAll}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div
            onMouseEnter={handlingMouseEnterForAll}
            className="flex items-center gap-7"
          >
            <div
              ref={signInRef}
              onClick={() => setShowSignInHover(!showSignInHover)}
              className="cursor-pointer -text-jungle-green"
            >
              Sign In
            </div>

            {showSignInHover && (
              <div
                ref={hoverRef}
                className="absolute -translate-x-1/2"
                style={{
                  top: `${headerHeight}px`,
                  left: `${
                    signInRef.current.getBoundingClientRect().left +
                    signInRef.current.getBoundingClientRect().width * 0.5
                  }px`,
                }}
              >
                <SignInHoverMenu />
              </div>
            )}

            <MainLinkButton
              href="https://kspcs.powerappsportals.com"
              text="Support Portal"
              target="_blank"
              className="py-3 px-7 shadow-[0_4px_20px_0_rgba(71,59,240,0.30)]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
