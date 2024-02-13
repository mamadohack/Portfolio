import Image from "next/image";
import img1 from "../../public/couple-working-from-home-together-sofa.jpg";
import Link from "next/link";
import imgPerson from "../../public/1000.jpg";

const About = ({}) => {
  return (
    <>
      <section
        className="min-h-screen flex justify-center items-center py-[70px]"
        id="about"
      >
        <div className="container mx-auto lg:px-10">
          <div className="flex flex-wrap px-8">
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
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-0 lg:pl-10 font-sans">
              <div>
                <div className="flex items-center bg-[#ebd400] justify-end xl:justify-between gap-5 rounded-[15px] font-sans">
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white ml-10 font-bold lg:max-w-min max-w-max">
                    My Story
                  </h2>
                  <Image
                    alt="image"
                    src={imgPerson}
                    width={160}
                    height={160}
                    className="rounded-full block h-[160px] object-cover  mr-10"
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
                  <h2 className="my-5 text-2xl font-bold font-sans">
                    a little bit about Joshua
                  </h2>
                  <p className="text-[#717275] text-lg/6 text-pretty">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    nostrum, voluptatum corporis hic exercitationem cupiditate
                    quia et enim corrupti blanditiis, beatae aperiam iure magni
                    at saepe, cum ex suscipit mollitia.
                  </p>
                  <p className="text-[#717275] text-lg/6 mt-5 text-pretty">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, quisquam dolores. Voluptatem animi cupiditate
                    ipsum laborum aperiam totam fugiat rem sit omnis tempora,
                    est quasi magnam corporis molestias delectus veniam 2020!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center mb-20">
        <div className="container">
          <div className="flex flex-wrap px-8 lg:px-14 font-sans">
            <div className="w-full lg:w-1/2 border-2  rounded-[15px]">
              <h3 className="font-sans sm:text-3xl text-xl font-bold border-b-2 md:p-5 p-3">
                Information
              </h3>
              <p>
                <span className="min-w-[140px] p-3 selection:bg-black text-xl font-semibold text-[#ebd400] inline-block border-r-2">
                  Name
                </span>
                <span className="ml-5 text-xl text-[#717275]">
                  Kermadi Mohammed
                </span>
              </p>
              <p>
                <span className="min-w-[140px] p-3  text-xl font-semibold text-[#ebd400] inline-block border-r-2">
                  Birthday
                </span>
                <span className="ml-5 text-xl text-[#717275]">
                  March 30, 1998
                </span>
              </p>
              <p>
                <span className="min-w-[140px] p-3  text-xl font-semibold text-[#ebd400] inline-block border-r-2">
                  Phone
                </span>
                <span className="ml-5 text-xl text-[#717275]">
                  <Link href="tel: +213698966328">06 98 96 63 28</Link>
                </span>
              </p>
              <p>
                <span className="min-w-[140px] p-3 text-xl font-semibold text-[#ebd400] inline-block border-r-2">
                  Email
                </span>
                <span className="ml-5 text-xl text-[#717275]">
                  <Link href="mailto:kermadimohamed7@gmail.com">
                    kermadimohamed7@gmail.com
                  </Link>
                </span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap lg:mt-5 mt-10 lg:pl-10">
              <div className="w-1/2  border-b-2 border-r-2">
                <h2 className="text-6xl font-bold p-2 font-sans">20+</h2>
                <p className="text-[#ebd400] p-2 text-xl ">
                  Years of Experiences
                </p>
              </div>
              <div className="w-1/2  border-b-2 pl-5">
                <h2 className="text-6xl font-bold p-2 ">245</h2>
                <p className="text-[#ebd400] p-2 text-xl font-sans">
                  Happy Customers
                </p>
              </div>
              <div className="w-1/2  border-r-2">
                <h2 className="text-6xl font-bold p-2">640</h2>
                <p className="text-[#ebd400] p-2 text-xl font-sans">
                  Project Finished
                </p>
              </div>
              <div className="w-1/2 pl-5">
                <h2 className="text-6xl font-bold p-2">72+</h2>
                <p className="text-[#ebd400] p-2 text-xl font-sans">
                  Digital Awards
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
