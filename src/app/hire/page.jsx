import Link from "next/link";
import Image from "next/image";
import '@/app/[locale]/globals.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const Page = ({}) => {
  return (
    <main className="min-h-screen">
      <div className="mt-20 bg-red-500 group">
        <FaLongArrowAltRight className="text-5xl mx-auto scale-x-[-1] group-hover:translate-x-[-50px] duration-200" />
      </div>
    </main>
  );
};

export default Page;
