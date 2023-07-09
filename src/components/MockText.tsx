import Image from "next/image";
import underConstruction from "@/assets/underConstruction.png";
import { Container } from "./container/Container";
interface Props {
  page: string;
}

const MockText = ({ page }: Props) => (
  <>
    <Image
      src={underConstruction}
      alt="underConstruction"
      className="absolute top-28 h-[70%] w-full opacity-40"
    />

    <main className="z-10 col-span-10 col-start-2 flex min-h-[63vh] flex-col items-center overflow-hidden rounded-md">
      <h1 className=" rounded-md bg-logoColor-neutralShadedAG bg-opacity-60 text-center text-heading1 font-bold uppercase">
        Sorry, we&apos;re doing some work on the page: <u>{page}</u>
      </h1>
    </main>
  </>
);

export default MockText;
