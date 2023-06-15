import Link from "next/link";
import HeaderNav from "./HeaderNav";
import Image, { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;

interface ImageProps {
  width?: number;
  src: string | StaticImport;
  alt: string;
}

interface Props {
  imageProps: ImageProps;
  pageName: string;
}

const HeaderContainer = ({ imageProps, pageName }: Props) => {
  const { src, alt, width } = imageProps;
  return (
    <>
      <div className="col-span-12 col-start-2 py-2">
        {/* NAVIGATION DIV */}
        <div className="grid grid-cols-6 items-center gap-4">
          <div className="col-span-1 grid  ">
            <Link href="/">
              <Image src={src} alt={alt} width={width} />
            </Link>
          </div>
          <HeaderNav router={pageName} />
        </div>
        {/* TEXT BOX */}
        {/* <HeaderTextBox pageName={pageName} /> */}
      </div>
      {/* <hr className="col-span-10 col-start-2 my-1 border-b-2" /> */}
    </>
  );
};

export default HeaderContainer;
