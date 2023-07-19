"use client";

import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type PropsContext = {
  navbar: boolean;
  setNavbar: (arg: boolean) => void;
};

export const AppContext = createContext<PropsContext>({
  navbar: false,
  setNavbar: () => null,
});

export const AppContextProvider = ({ children }: Props) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <AppContext.Provider value={{ navbar, setNavbar }}>
      {children}
    </AppContext.Provider>
  );
};
