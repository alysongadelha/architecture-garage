"use client";

import Image from "next/image";
import sqmtIcon from "@public/icons/square-meters.png";
import storiesIcon from "@public/icons/stories.png";
import bedsIcon from "@public/icons/beds.png";
import bathsIcon from "@public/icons/baths.png";
import { ProjectsData } from "@/interfaces/Project";
import mockImage from "@public/image/mockCardImage.png";
import { useRouter } from "next/navigation";

type Props = {
  project: ProjectsData;
};

const Card = ({ project }: Props) => {
  const router = useRouter();

  const { projectId, image, squareMeters, stories, teaser, baths, beds, name } =
    project;

  const handleclick = () => {
    router.push(`/shop/dp/${projectId}`);
  };

  return (
    <div
      className="group/card h-[330px] w-[270px] cursor-pointer bg-transparent"
      onClick={handleclick}
    >
      {/* Image and Text hovered */}
      <div className="group relative h-[250px] w-[270px] overflow-hidden rounded-t group-hover/card:shadow-lg group-hover/card:shadow-gray-950/40">
        <div className="bg-text invisible absolute flex h-[250px] w-[270px] translate-y-full flex-col justify-end px-3 pb-5  text-center transition-all duration-500 group-hover:visible group-hover:translate-y-0">
          <span className=" font-bold text-slate-900">{name}</span>
          <span className=" font-bold text-slate-900">{teaser}</span>
        </div>

        <Image
          src={image || mockImage}
          width={270}
          height={250}
          alt="house-image"
          className="cover h-full w-full"
        />
      </div>
      {/* Details */}
      <div className="mt-[10px] h-[70px] w-[270px] flex-col overflow-x-hidden rounded-b bg-logoColor-brandAG shadow-lg group-hover/card:shadow-lg group-hover/card:shadow-gray-950/40">
        {/* Icons */}
        <div className="flex max-h-[38px] items-center justify-around py-1">
          <div className="flex w-9 items-center justify-center">
            <Image src={sqmtIcon} alt="square-footage" />
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
        <div className="flex max-h-[17px] items-center justify-around border-y-[1px] border-black bg-logoColor-surfaceMuted text-[10px] shadow-md shadow-gray-900/40">
          <div className="flex w-9 items-center justify-center">
            <p>{`${squareMeters}.00`}</p>
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
