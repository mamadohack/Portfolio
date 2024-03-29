"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";
import { BiWorld } from "react-icons/bi";




// style={{ backgroundColor: "#ebd400" }}
const NavBar = ({}) => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [showNavbar, setShowNavbar] = useState(false);
  const sideNavRef = useRef(null);
  const [colorNavbar, setColorNavbar] = useState({
    colornavar: "var(--background)",
    textcolor: "var(--text-color)",
  });
  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setShowNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 50 && colorNavbar.colornavar === "var(--background)") {
        setColorNavbar({
          colornavar: "#ebd400",
          textcolor: "var(--text-color)",
        }); //#ebd400
      } else if (scrollY < 50 && colorNavbar.colornavar === "#ebd400") {
        setColorNavbar({
          colornavar: "var(--background)",
          textcolor: "var(--text-color)",
        });
      }
    });
  }, [colorNavbar]);

  return (
    <nav
      className=" border-gray-200 fixed top-5 left-0 right-0 h-[73px] z-[25]  "
      ref={sideNavRef}
    >
      <div className="px-5 ">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg"
          style={{
            backgroundColor: colorNavbar.colornavar,
            color: colorNavbar.textcolor,
          }}
        >
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            {/* <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              width={32}
              height={32}
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-4xl font-semibold whitespace-nowrap tracking-widest">
              {t("First")}
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => {
              setShowNavbar((p) => !p);
            }}
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 "
          >
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              showNavbar ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4  border-t-0 border-white rounded-b-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:items-center">
              <li>
                <Link
                  href="#home"
                  locale="ar"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-gray-400 rtl:text-2xl text-xl"
                  aria-current="page"
                >
                  {t("Home")}
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 rounded md:border-0  md:p-0 hover:text-gray-400 rtl:text-2xl text-xl"
                >
                  {t("About")}
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 px-3 rounded md:border-0 md:p-0 hover:text-gray-400 rtl:text-2xl text-xl"
                >
                  {t("Projects")}
                </a>
              </li>
              <li>
                <a
                  href="#Footer"
                  className="block py-2 px-3 rounded md:border-0 md:p-0 hover:text-gray-400 rtl:text-2xl text-xl"
                >
                  {t("Contact")}
                </a>
              </li>
              <li className="after:start-3 md:after:start-0  after:bg-[--bottom-border-color] after:content-[''] after:w-[25px] after:h-[2px] after:absolute relative  md:after:-bottom-2 after:bottom-0">
                <a
                  href={locale === "en" ? "/ar" : "/en"}
                  className="block rounded-full hover:text-gray-400 py-2 px-3 md:p-0 text-[25px]"
                >
                  {/* {locale === "en" ? "LNG : AR" : "لغة : الانجليزية"} */}
                  <BiWorld/>
                </a>
              </li>
              <li className="after:start-3 md:after:start-0  after:bg-[--bottom-border-color] after:content-[''] after:w-[25px] after:h-[2px] after:absolute relative  md:after:-bottom-2 after:bottom-0 "style={{marginInlineStart:"1rem"}}>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
