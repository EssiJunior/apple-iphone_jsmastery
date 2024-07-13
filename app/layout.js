"use client"

import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/theme';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Apple iPhone",
//   description: "Next js based clone of iPhone website",
// };

export default function RootLayout({ children }) {
  // Theme state
  const [theme, setTheme] = useState(darkTheme);

  // Theme toggler
  const toggleTheme = (theme) => {
      setTheme(theme);
  };

  return (
    <html lang="en">
      <body className={`${theme.tag==='light' ? 'text-black bg-white border-[#3b3b3b]':'text-white bg-black border-[#3b3b3b]'} ${inter.className}`}>
        
      <ThemeProvider theme={theme}>
        <Navbar toggleTheme={toggleTheme}/>
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
