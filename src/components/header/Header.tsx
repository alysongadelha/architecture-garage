"use client";

import architectureGarageLogo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import HeaderFixed from "./HeaderFixed";
import { useEffect, useState } from "react";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  let pageName: string;
  const [isFixedNav, setIsFixedNav] = useState(false);

  switch (usePathname()) {
    case "/shop":
      pageName = "All Projects";
      break;
    case "/about-us":
      pageName = "About Us";
      break;
    default:
      pageName = "Home";
      break;
  }
  useEffect(() => {
    const scroll = () => {
      setIsFixedNav(window.scrollY > 110);
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <header className="relative z-10 w-full bg-logoColor-surfaceMuted shadow-md">
      <HeaderFixed pageName={pageName} isFixedNav={isFixedNav} />
      <HeaderContainer
        imageProps={{
          src: architectureGarageLogo,
          alt: "Architecture Garage Logo",
          width: 100,
        }}
        pageName={pageName}
      />
    </header>
  );
};

export default Header;
