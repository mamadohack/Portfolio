"use client"
import '@/app/[locale]/globals.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTheme } from "next-themes";

const Page = (props) => {
  const { theme, setTheme} = useTheme();
  console.log(props);
  return (
    <main className="min-h-screen">
      <div className="mt-20 bg-red-500 group dark:bg-blue-700 ">
        <FaLongArrowAltRight className="text-5xl mx-auto scale-x-[-1] group-hover:translate-x-[-50px] duration-200" />
      </div>
      <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
      {/* <div>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mx-auto block"
        >
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div> */}
    </main>
  );
};

export default Page;
