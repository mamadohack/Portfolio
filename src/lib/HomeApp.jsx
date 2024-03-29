import Link from "next/link";
import Image from "next/image";
import imgPerson from "../../public/1000.jpg";
import happyman from "../../public/portrait-happy-excited-man-holding-laptop-computer.png";
import { useTranslations } from "next-intl";



const HomeApp = ({}) => {
  const t = useTranslations("Homepage");
  return (
    <section
      className="lg:min-h-screen relative overflow-hidden flex justify-center items-center min-h-[960px]"
      id="home"
      style={{ backgroundColor: "#ebd400" }}
    >
      <div className="container px-5 lg:px-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-7/12 mb-40">
            <div className="relative lg:top-32 -top-[70px]  z-20">
              <div className="flex items-center mb-4 relative">
                <div className="relative rounded-full">
                  <Image
                    alt="image"
                    src={imgPerson}
                    width={90}
                    height={90}
                    className="rounded-full object-cover"
                  ></Image>
                  {/* <Image
                  alt="image"
                  src="/happy-bearded-young-man.jpg"
                  fill
                  className="rounded-full object-cover"
                ></Image> */}
                </div>
                <h3
                  className=" font-bold ms-5 bg-white px-3 py-1 rounded-full text-3xl rtl:text-3xl "
                  style={{
                    color: "#212529",
                  }}
                >
                  {t("title")}
                </h3>
              </div>
              <h3
                className="bg-white px-5 md:py-2 py-1 rounded-full font-bold mb-4 max-w-max text-3xl rtl:text-3xl text-pretty "
                style={{
                  color: "#212529",
                }}
              >
                {t("title-discription")}
              </h3>
              <Link href="#" className="">
                <h3 className="px-5 py-3 rounded-full cursor-pointer text-white max-w-max	font-semibold x text-xl rtl:text-3xl">
                  {t("title-button")}
                </h3>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-5/12 z-20 relative">
            <div className="w-[350px] h-[350px] bg-white rounded-full absolute -top-40 lg:top-0 left-0 right-0 mx-auto -z-20 "></div>
            <div className="absolute -top-24 lg:top-0 rtl:scale-x-[-1]">
              <Image
                src={happyman}
                alt="ok1ey"
                width={720}
                height={480}
                priority
              ></Image>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 right-0 h-full z-10"
        >
          <path
            className="duration-200"
            fill="var(--background)"
            opacity={1}
            d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeApp;
