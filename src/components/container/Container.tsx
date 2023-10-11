"use client";
import { AppContext } from "@/hooks/AppContext";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
  position?: "relative" | "absolute" | "static" | "fixed" | "sticky";
  minimumScreenSize?: boolean;
  marginTopDefinition?: [number, number, number];
}

export const Container = ({
  children,
  position = "relative",
  minimumScreenSize = false,
  marginTopDefinition,
}: Props) => {
  const { navbar } = useContext(AppContext);
  const [marginSmall, marginMedium, marginLarge] = marginTopDefinition ?? [
    20, 36, 36,
  ];
  const marginTopProps = {
    marginSmall: {
      spaceDefault: `mt-20`,
      spaceCustom: `mt-4`,
    },
    marginMedium: {
      spaceDefault: `md:mt-36`,
      spaceCustom: `md:mt-4`,
    },
    marginLarge: {
      spaceDefault: `lg:mt-36`,
      spaceCustom: `lg:mt-4`,
    },
  };

  if (navbar) return null;
  return (
    <section
      className={` container mx-auto mb-4 min-h-min w-10/12  ${position} 
      ${
        marginTopProps["marginSmall"][
          marginSmall >= 20 ? "spaceDefault" : "spaceCustom"
        ]
      } 
      ${
        marginTopProps["marginMedium"][
          marginMedium >= 36 ? "spaceDefault" : "spaceCustom"
        ]
      }
      ${
        marginTopProps["marginLarge"][
          marginLarge >= 36 ? "spaceDefault" : "spaceCustom"
        ]
      }
      ${minimumScreenSize ? `lg:min-h-min]` : "lg:min-h-container"}`}
    >
      {children}
    </section>
  );
};
