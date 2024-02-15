"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// style={{ backgroundColor: "#ebd400" }}
const NavBar = ({}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [colorNavbar, setColorNavbar] = useState("transparent");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 50 && colorNavbar === "transparent") {
        setColorNavbar("#ebd400"); //#ebd400
      } else if (scrollY < 50 && colorNavbar === "#ebd400") {
        setColorNavbar("transparent");
      }
    });
  }, [colorNavbar]);

  return (
    <nav className=" border-gray-200 fixed top-5 left-0 right-0 h-[73px] z-[25] ">
      <div className="px-5 ">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg"
          style={{ backgroundColor: colorNavbar }}
        >
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
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
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-white font-sans tracking-widest">
              First
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => {
              setShowNavbar((p) => !p);
            }}
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4  border-t-0 border-white rounded-b-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#101820] md:bg-transparent
            "
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:p-0 text-white hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
