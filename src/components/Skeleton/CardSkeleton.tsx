import React from "react";

type Props = {};

const CardSkeleton = (props: Props) => {
  return (
    <div className="absolute z-20 h-[330px] w-[270px] animate-pulse cursor-wait">
      {/* Image*/}
      <div className="flex h-[250px] w-[270px] items-center justify-center rounded-t bg-gray-300">
        <div className="h-[95%] w-[95%] bg-gray-400" />
      </div>
      {/* Details */}
      <div className="mt-[10px] h-[70px] w-[270px] flex-col rounded-b bg-gray-300 shadow-lg">
        {/* Icons */}
        <div className="flex max-h-[38px] items-center justify-center py-1">
          <div className="h-6 w-[95%] bg-gray-400" />
        </div>
        {/* Values */}
        <div className="flex h-[17px] items-center justify-center border-y-[1px] border-gray-400 bg-logoColor-surfaceMuted">
          <div className="h-3 w-[95%]  bg-gray-400 py-1" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
