"use client"
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeP = ({ children,...props }) => {
  return (
    <ThemeProvider enableSystem {...props}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeP;
