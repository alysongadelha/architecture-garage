import React from "react";

interface Props {
  position?: "relative" | "absolute" | "static" | "fixed" | "sticky";
  children: React.ReactNode;
}

export const Container = ({ position = "static", children }: Props) => {
  return (
    <main
      className={`z-10 col-span-10 col-start-2 min-h-[63vh] overflow-hidden rounded-md bg-red-500 ${position}`}
    >
      {children}
    </main>
  );
};
