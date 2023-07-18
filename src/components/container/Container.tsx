import React from "react";

interface Props {
  position?: "relative" | "absolute" | "static" | "fixed" | "sticky";
  children: React.ReactNode;
}

export const Container = ({ position = "relative", children }: Props) => {
  return (
    <div
      className={`container mx-auto mt-20 min-h-[75vh] w-10/12 md:mt-36 ${position} mb-4`}
    >
      {children}
    </div>
  );
};
