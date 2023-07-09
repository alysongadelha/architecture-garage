import Image from "next/image";
import sqftIcon from "@public/icons/square-footage.png";
import storiesIcon from "@public/icons/stories.png";
import bedsIcon from "@public/icons/beds.png";
import bathsIcon from "@public/icons/baths.png";
import { ProjectsData } from "@/interface/Project";

type Props = {
  propsApi: ProjectsData;
};

const Card = ({ propsApi }: Props) => {
  const { image, squareFootage, stories, description, baths, beds, name } =
    propsApi;
  return (
    <div className=" h-[330px] w-[270px] overflow-hidden rounded-lg bg-slate-300 hover:shadow-lg hover:shadow-gray-950">
      <div className="h-[250px] w-[270px] bg-slate-400"></div>
      <div className="mt-[10px] h-[70px] w-[270px] flex-col bg-slate-500 py-1">
        {/* Icons */}
        <div className="flex items-center justify-around border-b-[1px] pb-1">
          <div className="flex w-9 items-center justify-center">
            <Image src={sqftIcon} alt="square-footage" />
          </div>
          <div className="flex w-9 items-center justify-center">
            <Image src={storiesIcon} alt="stories" />
          </div>
          <div className="flex w-9 items-center justify-center">
            <Image src={bedsIcon} alt="beds" />
          </div>
          <div className="flex w-9 items-center justify-center">
            <Image src={bathsIcon} alt="baths" />
          </div>
        </div>
        {/* Values */}
        <div className="flex  items-center justify-around pt-1">
          <div className="flex w-9 items-center justify-center">
            <p>{squareFootage}</p>
          </div>
          <div className="flex w-9 items-center justify-center">
            <p>{stories}</p>
          </div>
          <div className="flex w-9 items-center justify-center">
            <p>{beds}</p>
          </div>
          <div className="flex w-9 items-center justify-center">
            <p>{baths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
