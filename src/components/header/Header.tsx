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
      setIsFixedNav(window.scrollY > 120);
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <header className="z-20 col-span-12 grid grid-cols-12 bg-whiteColor-header py-4">
      <HeaderFixed pageName={pageName} isFixedNav={isFixedNav} />
      <HeaderContainer
        imageProps={{
          src: architectureGarageLogo,
          alt: "Architecture Garage Logo",
        }}
        pageName={pageName}
      />
    </header>
  );
};

export default Header;
