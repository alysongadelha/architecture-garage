"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
  projectImages: StaticImageData[] | string[];
};

const ImagesComponent = ({ projectImages }: Props) => {
  const [selectedImage, setSelectedImage] = useState(projectImages[0]);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      {/* PRINCIPAL IMAGE */}
      <div
        className={`col-span-1 min-h-[300px] lg:col-span-8`}
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="col-span-1 lg:col-span-4 lg:border-l-2 ">
        <div className="grid grid-cols-2 justify-center gap-6 md:grid-cols-4 lg:ml-3 lg:grid-cols-2">
          {projectImages.map((image, index) => (
            <div
              className="relative col-span-1 grid cursor-pointer justify-center"
              key={index}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`absolute z-10 h-full w-full  ${
                  selectedImage === image &&
                  " bg-black/70 transition-all duration-500"
                }`}
              />
              <Image src={image} width={150} height={100} alt="test" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesComponent;
