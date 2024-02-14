import Image from "next/image";
import ImgDesk from "../../public/white-desk-work-study-aesthetics.jpg";
import { Roboto } from "next/font/google";
import ImgProject1 from "../../public/Projects/1.jpg";
import ImgProject2 from "../../public/Projects/2.jpg";
import ImgProject3 from "../../public/Projects/3.jpg";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
import Link from "next/link";
const Projects = ({}) => {
  return (
    <section className="min-h-screen py-10">
      <div className="container mx-auto lg:px-10">
        <div className="flex items-center bg-gray-900 gap-5 sm:justify-end p-5 mx-auto sm:ml-auto sm:mx-0 max-w-lg rounded-xl min-w-96 justify-center">
          <div className="relative h-[160px] w-[160px]">
            <Image
              src={ImgDesk}
              fill
              className="rounded-full object-cover"
              alt="white desk"
            ></Image>
          </div>
          <h2 className={`text-3xl font-bold text-white`}> Projects</h2>
        </div>
        <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid font-sans gap-5 mt-10 px-10">
          <div className="p-10 border-2 border-transparent rounded-xl hover:border-[#ebd400] duration-500 ease-in-out overflow-hidden group">
            <h2 className="text-sm text-[#ebd400]">BRANDING</h2>
            <p className="text-3xl font-bold mt-1">Zoik agency</p>
            <Link href="https://www.google.com/">
              <div className="py-5">
                <Image
                  src={ImgProject1}
                  alt="project 1"
                  width={640}
                  height={640}
                  className="w-full rounded-xl rotate-12 translate-y-[50px] group-hover:translate-y-0 group-hover:rotate-0 duration-500 origin-top-left"
                ></Image>
              </div>
            </Link>
          </div>
          <div className="p-10 border-2 border-transparent rounded-xl hover:border-[#ebd400] duration-500 ease-in-out overflow-hidden group">
            <h2 className="text-sm text-[#ebd400]">PHOTOGRAPHY</h2>
            <p className="text-3xl font-bold mt-1">The Watch</p>
            <Link href="https://www.google.com/">
              <div className="py-5">
                <Image
                  src={ImgProject2}
                  alt="project 2"
                  width={640}
                  height={640}
                  className="w-full rounded-xl rotate-12 translate-y-[50px] group-hover:translate-y-0 group-hover:rotate-0 duration-500 origin-top-left"
                ></Image>
              </div>
            </Link>
          </div>
          <div className="p-10 border-2 border-transparent rounded-xl hover:border-[#ebd400] duration-500 ease-in-out overflow-hidden group">
            <h2 className="text-sm text-[#ebd400]">WEBSITE</h2>
            <p className="text-3xl font-bold mt-1">Polo</p>
            <Link href="https://www.google.com/">
              <div className="py-5">
                <Image
                  src={ImgProject3}
                  alt="project 3"
                  width={640}
                  height={640}
                  className="w-full rounded-xl rotate-12 translate-y-[50px] group-hover:translate-y-0 group-hover:rotate-0 duration-500 origin-top-left"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
