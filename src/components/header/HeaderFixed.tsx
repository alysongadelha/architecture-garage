import HeaderContainer from "./HeaderContainer";
import architectureGarageLogo from "@/assets/logo.svg";

interface Props {
  isFixedNav: boolean;
  pageName: string;
}
const HeaderFixed = ({ isFixedNav, pageName }: Props) => {
  return (
    <div
      className={`${
        isFixedNav ? "opacity-100 " : "opacity-0"
      } fixed top-0 col-span-12 grid w-full grid-cols-12 rounded-md bg-whiteColor-header drop-shadow-lg transition-opacity`}
    >
      <HeaderContainer
        imageProps={{
          src: architectureGarageLogo,
          alt: "small logo",
          width: 50,
        }}
        pageName={pageName}
      />
    </div>
  );
};

export default HeaderFixed;
