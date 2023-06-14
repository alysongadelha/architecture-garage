import { MenuOptions } from "@/constants/Header";
import Link from "next/link";
interface Props {
  router: string;
}
const HeaderNav = ({ router }: Props) => {
  return (
    <nav className="col-span-3 col-end-7 hover:ease-in ">
      <ul className="flex justify-around p-2">
        {MenuOptions.map(({ name, path }) => {
          const isActive = router === name;
          return (
            <li
              key={name}
              className={`${
                isActive &&
                "pointer-events-none rounded-md bg-logoColor-orangeAG"
              }   mx-4 cursor-pointer px-2 py-1 text-xl text-logoColor-grayAG transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-125 `}
            >
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
