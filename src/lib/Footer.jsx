import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
const Footer = ({}) => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 px-[30px]">
          <div className="grid grid-cols-subgrid col-span-2 gap-2">
            <div className=" font-sans border-r col-span-2 md:col-span-1">
              <h3 className="font-semibold text-sm">SERVICES</h3>
              <ul className="mt-2">
                <li className="inline-block">
                  <Link
                    href="#"
                    className="mr-3 mt-2 inline-block min-w-[70px] border border-gray duration-200 hover:bg-[#101820] hover:text-white p-1 px-2 rounded-full text-sm text-[#717275] "
                  >
                    Websites
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="#"
                    className="mr-3 mt-2 inline-block min-w-[70px] border border-gray duration-200 hover:bg-[#101820] hover:text-white p-1 px-2 rounded-full text-sm text-[#717275] "
                  >
                    Branding
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="#"
                    className="mr-3 mt-2 inline-block min-w-[70px] border border-gray duration-200 hover:bg-[#101820] hover:text-white p-1 px-2 rounded-full text-sm text-[#717275] "
                  >
                    Ecommerce
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="#"
                    className="text-center mt-2 inline-block min-w-[70px] border border-gray-300 duration-200 hover:bg-[#101820] hover:text-white p-1 px-2 rounded-full text-sm text-[#717275] "
                  >
                    SEO
                  </Link>
                </li>
              </ul>
              <h3 className="font-semibold text-sm mt-5">STAY CONNECTED</h3>
              <ul className="mt-5 space-x-2 text-lg">
                <li className="inline-block p-2 rounded-full border border-gray-300 hover:text-white hover:bg-[#101820] duration-200">
                  <Link href="#">
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="inline-block p-2 rounded-full border border-gray-300 hover:text-white hover:bg-[#101820] duration-200">
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                </li>
                <li className="inline-block p-2 rounded-full border border-gray-300 hover:text-white hover:bg-[#101820] duration-200">
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="inline-block p-2 rounded-full border border-gray-300 hover:text-white hover:bg-[#101820] duration-200">
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
              <h3 className="font-semibold text-sm mt-5">START A PROJECT</h3>
              <p className="mt-5 text-gray-500">
                I’m available for freelance projects
              </p>
            </div>
            <div className=" col-span-2 md:col-span-1">
              <h3 className="font-semibold text-sm">START A PROJECT</h3>
              <p className="mt-5 text-gray-500">
                I’m available for freelance projects
              </p>
              <h3 className="font-semibold text-sm mt-10">EMAIL</h3>
              <p className="mt-5 text-gray-500">
                <Link href="mailto:kermadimohamed7@gmail.com">
                  kermadimohamed7@gmail.com
                </Link>
              </p>
              <h3 className="font-semibold text-sm mt-10">CALL</h3>
              <p className="mt-5 text-gray-500">
                <Link href="tel: +213698966328">06 98 96 63 28</Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-subgrid col-span-2 gap-5">
            <div className="">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                className=" w-full outline-none focus:border-yellow-500 duration-200 border-2 rounded p-2 h-full text-gray-500"
              />
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className=" w-full outline-none focus:border-yellow-500 duration-200 border-2 rounded p-2 h-full text-gray-500"
              />
            </div>
            <div className="relative">
              <input
                type="checkbox"
                name="Website"
                id="website"
                className="inline-block w-full h-full bg-transparent appearance-none checked:border-yellow-500 duration-200 border-2 rounded"
              />
              <label
                htmlFor="website"
                className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center "
              >
                <FaGlobe className="text-center mx-auto mb-1 text-yellow-500" />
                <span className="text-gray-500">Website</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                name="Website"
                id="website"
                className="inline-block w-full h-full bg-transparent appearance-none checked:border-yellow-500 duration-200 border-2 rounded"
              />
              <label
                htmlFor="Branding"
                className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center "
              >
                <FaRegLightbulb className="text-center mx-auto mb-1 text-yellow-500" />
                <span className="text-gray-500">Branding</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                name="Ecommerce"
                id="Ecommerce"
                className="inline-block w-full h-full bg-transparent appearance-none checked:border-yellow-500 duration-200 border-2 rounded"
              />
              <label
                htmlFor="Ecommerce"
                className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center "
              >
                <RiSmartphoneLine className="text-center mx-auto mb-1 text-yellow-500" />
                <span className="text-gray-500">Ecommerce</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                name="SEO"
                id="SEO"
                className="inline-block w-full h-full bg-transparent appearance-none checked:border-yellow-500 duration-200 border-2 rounded"
              />
              <label
                htmlFor="SEO"
                className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center "
              >
                <FaGoogle className="text-center mx-auto mb-1 text-yellow-500" />
                <span className="text-gray-500">SEO</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
