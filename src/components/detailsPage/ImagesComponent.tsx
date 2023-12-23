"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
  projectImages: StaticImageData[] | string[];
};

const ImagesComponent = ({ projectImages }: Props) => {
  const [selectedImage, setSelectedImage] = useState(projectImages[0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isDefaultImageLoaded, setIsDefaultIsImageLoaded] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      {/* SELECTED IMAGE */}
      <div className={`relative col-span-1 min-h-[300px] lg:col-span-8`}>
        {isDefaultImageLoaded ? null : (
          <div className="absolute h-full w-full animate-pulse bg-gray-300" />
        )}
        <Image
          className="undraggable"
          src={selectedImage}
          onLoad={(e) => setIsDefaultIsImageLoaded(true)}
          alt="selected-image"
          fill={true}
          priority
          sizes="50vh"
        />
      </div>
      {/* IMAGE ARRAY */}
      <div className="col-span-1 lg:col-span-4 lg:border-l-2 ">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:ml-3 lg:grid-cols-2">
          {projectImages.map((image, index) => (
            <div
              className="relative col-span-1 grid h-[100px] cursor-pointer"
              key={`image-${index}`}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`absolute z-10 h-full w-full  ${
                  selectedImage === image &&
                  " bg-black/70 transition-all duration-500"
                }`}
              />
              {isImageLoaded ? null : (
                <div className="absolute z-10 h-full w-full animate-pulse bg-gray-300" />
              )}
              <Image
                className={`undraggable`}
                src={image}
                fill={true}
                alt={`image-number-${index + 1}`}
                onLoad={() => setIsImageLoaded(true)}
                sizes="10vh"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesComponent;
