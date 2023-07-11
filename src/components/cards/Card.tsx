import Image from "next/image";
import sqftIcon from "@public/icons/square-footage.png";
import storiesIcon from "@public/icons/stories.png";
import bedsIcon from "@public/icons/beds.png";
import bathsIcon from "@public/icons/baths.png";
import { ProjectsData } from "@/interface/Project";
import mockImage from "@public/image/mockCardImage.png";

type Props = {
  propsApi: ProjectsData;
};

const Card = ({ propsApi }: Props) => {
  const { image, squareFootage, stories, description, baths, beds, name } =
    propsApi;
  return (
    <div className=" h-[330px] w-[270px] cursor-pointer overflow-hidden rounded-lg bg-slate-100 hover:shadow-lg hover:shadow-gray-950">
      {/* Image and Text hovered */}
      <div className="group relative h-[250px] w-[270px] overflow-hidden">
        <div className="invisible absolute flex h-[250px] w-[270px] translate-y-full items-center justify-center bg-gray-700/70 text-center transition-all duration-500 group-hover:visible group-hover:translate-y-0">
          <p className="text-white ">{`Project name: "${
            name || "fail to load"
          }" and a description: "${description || "fail to load"}"`}</p>
        </div>
        <div className="">
          <Image
            src={image || mockImage}
            width={270}
            height={250}
            alt="house-image"
          />
        </div>
      </div>
      {/* Details */}
      <div className="mt-[10px] h-[70px] w-[270px] flex-col bg-slate-300">
        {/* Icons */}
        <div className="flex max-h-[38px] items-center justify-around border-b-[1px] py-1">
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
        <div className="flex max-h-[17px] items-center justify-around border-b-[1px] text-[10px]">
          <div className="flex w-9 items-center justify-center">
            <p>{`${squareFootage}.00`}</p>
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
