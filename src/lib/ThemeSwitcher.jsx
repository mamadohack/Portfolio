"use client";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

const ThemeSwitcher = ({}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (theme == "system") {
    resolvedTheme == "dark" ? setTheme("dark") : setTheme("light");
  }
  if (!mounted) {
    return (
      <div className="text-end">
        <label class="switch">
          <input
            type="checkbox"
          />
          <span class="slider round">
            <FaRegSun className="absolute bottom-[5px] left-[7px] text-[18px] z-20" />
            <FaMoon className="absolute bottom-[5px] right-[9px] z-20 text-[17px]" />
          </span>
        </label>
      </div>
    );
  }
  return (
    <div className="text-end">
      <label class="switch">
        <input
          type="checkbox"
          checked={theme == "dark" ? true : false}
          onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
        <span class="slider round">
          <FaRegSun className="absolute bottom-[5px] left-[7px] text-[18px] z-20" />
          <FaMoon className="absolute bottom-[5px] right-[9px] z-20 text-[17px] duration-200" />
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
