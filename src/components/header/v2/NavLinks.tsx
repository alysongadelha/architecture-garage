import { MenuOptions } from "@/constants/Header";
import Link from "next/link";
interface Props {
  router: string;
  setNavbar: (arg: boolean) => void;
  navbar: boolean;
}

export const NavLinks = ({ router, setNavbar, navbar }: Props) => {
  return (
    <ul className="h-screen items-center justify-center md:flex md:h-auto">
      {MenuOptions.map(({ name, path }) => {
        const isActive = router === name;
        return (
          <li
            key={name}
            className={`${
              isActive &&
              "pointer-events-none rounded-md text-logoColor-brandAG md:bg-logoColor-brandAG md:text-logoColor-neutralAG"
            } cursor-pointer border-b-2 py-2 pb-6 text-center text-xl transition delay-150 duration-300 ease-in-out hover:bg-logoColor-brandAG md:border-b-0 md:px-6 md:pb-2 md:hover:-translate-y-3 md:hover:scale-125 md:hover:bg-transparent`}
          >
            <Link href={path} onClick={() => setNavbar(!navbar)}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
