"use client";
import { AppContext } from "@/hooks/AppContext";
import React, { useContext } from "react";

interface Props {
  position?: "relative" | "absolute" | "static" | "fixed" | "sticky";
  children: React.ReactNode;
}

export const Container = ({ position = "relative", children }: Props) => {
  const { navbar } = useContext(AppContext);

  if (navbar) return null;
  return (
    <section
      className={`container mx-auto mt-20 w-10/12 md:mt-36 lg:min-h-[58vh] ${position} mb-4`}
    >
      {children}
    </section>
  );
};
