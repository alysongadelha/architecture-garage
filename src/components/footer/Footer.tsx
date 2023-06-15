/* eslint-disable react/jsx-key */
import Link from "next/link";
import { FooterInfo } from "./FooterInfo";
import { FooterOptions } from "@/constants/Footer";
import Image from "next/image";
import footerLog from "@/assets/footerLogo.svg";
import { medias } from "@/constants/FooterMedias";

const Footer = () => {
  return (
    <footer className="z-10 col-span-12 grid grid-cols-12 bg-logoColor-surfaceMuted">
      <div className="col-span-10 col-start-2 grid grid-cols-6 gap-2">
        <div className="col-span-2 my-4">
          <Image src={footerLog} alt="Footer Logo" />
        </div>
        {FooterOptions.map((footerOption) => (
          <div
            key={footerOption.main}
            className="col-span-1 my-3 text-gray-700"
          >
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
        <div className="col-span-1 my-3 ">
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
