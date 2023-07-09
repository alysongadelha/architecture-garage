/* eslint-disable react/jsx-key */
import Link from "next/link";
import { FooterInfo } from "./FooterInfo";
import { FooterOptions } from "@/constants/Footer";
import Image from "next/image";
import footerLog from "@/assets/footerLogo.svg";
import { medias } from "@/constants/FooterMedias";

const Footer = () => {
  return (
    <footer className="w-full bg-logoColor-surfaceMuted">
      <div className="container mx-auto flex w-10/12 flex-col justify-between lg:flex-row">
        <div className=" my-4">
          <Image src={footerLog} alt="Footer Logo" />
        </div>
        {FooterOptions.map((footerOption) => (
          <div key={footerOption.main} className=" my-3 text-gray-700">
            <h3 className="text-heading3 font-bold">{footerOption.main}</h3>
            <ul>
              {footerOption.options.map((option) => (
                <li key={option.name} className="my-3">
                  <Link
                    className=" text-heading5 font-semibold"
                    href={option.path}
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="my-3 ">
          <h3 className="text-heading3 font-bold text-gray-700">
            Midias Sociais
          </h3>
          <div className="inline-flex flex-wrap">
            {medias.map(({ mediaName, path, icon }) => (
              <Link
                key={mediaName}
                className="m-1 cursor-pointer items-center justify-center rounded-full bg-logoColor-brandAG p-2  hover:shadow-lg"
                href={path}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
