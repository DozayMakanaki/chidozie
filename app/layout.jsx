"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the 'splashScreenShown' flag is set in sessionStorage
    const splashScreenShown = sessionStorage.getItem("splashScreenShown");

    if (!splashScreenShown) {
      // If the flag is not set, show the SplashScreen, set the flag in sessionStorage
      setIsLoading(true);
      sessionStorage.setItem("splashScreenShown", "true");
    }
  }, []);

  const finishLoading = () => {
    // Set loading to false when the SplashScreen finishes
    setIsLoading(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        {isLoading && isHome ? (
          <SplashScreen
            className="bg-dark-blue"
            finishLoading={finishLoading}
          />
        ) : (
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
