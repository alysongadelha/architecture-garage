"use client";
import { useContext } from "react";
import { AppContext } from "@/hooks/AppContext";
import { Container } from "./container/Container";
interface Props {
  page: string;
}

const MaintenanceDiv = ({ page }: Props) => {
  const { navbar } = useContext(AppContext);

  if (navbar) return null;

  return (
    <Container>
      <main className="flex h-[450px] flex-col items-center justify-between overflow-hidden rounded-md bg-maintenance bg-center bg-no-repeat lg:h-[58vh]">
        <div className="bg-logoColor-neutralShadedAG bg-opacity-90 ">
          <h1 className=" text-center text-heading1 font-bold uppercase">
            Sorry, we&apos;re doing some work on the page: <u>{page}</u>
          </h1>
        </div>
        {/* <div className="rounded-md bg-logoColor-neutralShadedAG bg-opacity-90 p-4 text-center text-heading3 font-bold uppercase">
          <button>Click here to go back to the main page</button>
        </div> */}
      </main>
    </Container>
  );
};

export default MaintenanceDiv;
