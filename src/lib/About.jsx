import Image from "next/image";
import img1 from "../../public/couple-working-from-home-together-sofa.jpg";
import Link from "next/link";
import imgPerson from "../../public/1000.jpg";
import { useTranslations } from "next-intl";
import { Lalezar } from "next/font/google";
import { MdOutlineAlternateEmail } from "react-icons/md";


const lalezar = Lalezar({ subsets: ["arabic"], weight: ["400"] });

const About = ({}) => {
  const t = useTranslations("About");
  return (
    <>
      <section
        className="min-h-[80vh] flex justify-center items-center py-[70px] lg:py-0 border-b-2"
        id="about"
      >
        <div className="container mx-auto lg:px-10">
          <div className="flex flex-wrap px-8 lg:px-0">
            <div className="w-full lg:w-1/2 ">
              {/* <Image
                src={imgPerson}
                alt="img1"
                width={456}
                height={456}
                className="block rounded-[20px] w-full h-auto"
              ></Image> */}
              <Image
                src={img1}
                alt="img1"
                width={456}
                height={456}
                className="block rounded-[20px] w-full h-auto"
              ></Image>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-0 lg:pl-10  lg:rtl:pr-10 lg:rtl:pl-0">
              <div>
                <div className="flex items-center bg-[#ebd400] justify-end xl:justify-between gap-5 rounded-[15px] py-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-white ms-10 font-bold lg:max-w-min max-w-max rtl:text-5xl ">
                    {t("My Story")}
                  </h2>
                  <Image
                    alt="image"
                    src={imgPerson}
                    width={160}
                    height={160}
                    className="rounded-full block h-[160px] object-cover  me-10"
                  ></Image>
                  {/* <Image
                    alt="image"
                    src="/happy-bearded-young-man.jpg"
                    width={160}
                    height={160}
                    className="rounded-full block h-[160px] object-cover  mr-10"
                  ></Image> */}
                </div>

                <div>
                  <h2 className={"my-5 text-2xl font-bold"}></h2>
                  <p className="text-[#717275] text-lg text-balanced leading-10 rtl:text-2xl rtl:leading-[3rem]">
                    {t("def")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] flex justify-center items-center py-[70px] lg:py-0 border-b-2">
        <div className="container px-5">
          <div className="flex flex-wrap px-2 lg:px-14 ">
            <div className="w-full lg:w-1/2 border-2  rounded-[15px]">
              <h3 className=" sm:text-3xl text-xl font-bold border-b-2 md:p-5 p-3 rtl:text-4xl">
                {t("Information")}
              </h3>
              <p>
                <span className="min-w-[140px] p-3 selection:bg-black text-xl font-semibold text-[#ebd400] inline-block border-e-2 rtl:text-2xl">
                  {t("Name")}
                </span>
                <span className="ms-5 sm:text-xl text-[#717275] rtl:text-2xl">
                  {t("Kermadi Mohammed")}
                </span>
              </p>
              <p>
                <span className="min-w-[140px] p-3  text-xl font-semibold text-[#ebd400] inline-block border-e-2 rtl:text-2xl">
                  {t("Birthday")}{" "}
                </span>
                <span className="ms-5 sm:text-xl text-[#717275] rtl:text-2xl">
                  {t("March 30, 1998")}
                </span>
              </p>
              <p>
                <span className="min-w-[140px] p-3  text-xl font-semibold text-[#ebd400] inline-block border-e-2 rtl:text-2xl">
                  {t("Phone")}{" "}
                </span>
                <span className="ms-5 sm:text-xl text-[#717275] rtl:text-2xl">
                  <Link href="tel: +213698966328">
                    06&nbsp;98&nbsp;96&nbsp;63&nbsp;28
                  </Link>
                </span>
              </p>
              <p className="flex items-center">
                <span className="min-w-[140px] p-3 text-xl font-semibold text-[#ebd400] inline-block border-e-2 rtl:text-2xl">
                  {t("Email")}{" "}
                </span>
                <span className="ms-5 sm:text-xl text-[#717275] rtl:text-2xl">
                  <Link
                    href="mailto:kermadimohamed7@gmail.com"
                    className="text-gray-700 inline-block rounded-full border-2 p-2 hover:border-gray-700 duration-200"
                  >
                    <MdOutlineAlternateEmail />
                  </Link>
                </span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap lg:mt-5 mt-10 lg:ps-10 ">
              <div className="w-1/2  border-b-2 border-e-2">
                <h2 className="text-6xl font-bold p-2 ">1+</h2>
                <p className="text-[#ebd400] p-2 text-xl rtl:text-2xl">
                  {t("Years of Experiences")}
                </p>
              </div>
              <div className="w-1/2  border-b-2 ps-5">
                <h2 className="text-6xl font-bold p-2 ">3</h2>
                <p className="text-[#ebd400] p-2 text-xl rtl:text-2xl">
                  {t("Happy Customers")}
                </p>
              </div>
              <div className="w-1/2  border-e-2">
                <h2 className="text-6xl font-bold p-2">5</h2>
                <p className="text-[#ebd400] p-2 text-xl rtl:text-2xl">
                  {t("Project Finished")}
                </p>
              </div>
              <div className="w-1/2 pl-5">
                <h2 className="text-6xl font-bold p-2">5+</h2>
                <p className="text-[#ebd400] p-2 text-xl rtl:text-2xl">
                  {t("Digital Awards")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
