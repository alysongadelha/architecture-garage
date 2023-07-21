import MockText from "@/components/MockText";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import logo from "@public/ag-logo-written.svg";

export default function Home() {
  return (
    <Container>
      <div className="bg-blur  flex h-[450px] items-center justify-center rounded-sm bg-home bg-cover bg-center bg-no-repeat">
        <div className="relative flex h-full flex-col justify-center ">
          {/* Image */}
          <div className="z-10 flex justify-center  md:relative md:-left-2 lg:justify-start">
            <Image src={logo} alt="" width={460} />
          </div>
          {/* Text */}
          <div className="z-10 flex justify-center lg:justify-start">
            <p className="text-center text-heading3 font-extrabold">
              <span className="bg-logoColor-brandAG">
                Temos o melhor projeto para você{" "}
              </span>
              construir seu futuro
            </p>
          </div>
          <div className="absolute -right-1 hidden h-[93%] w-[20%] bg-logoColor-brandAG shadow-transparent lg:block"></div>
        </div>
      </div>
    </Container>
  );
}
