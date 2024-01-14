'use client'

import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type NavbarContext = {
  navbar: boolean
  setNavbar: (arg: boolean) => void
}

export const NavbarContext = createContext<NavbarContext>({
  navbar: false,
  setNavbar: () => null,
})

export const NavbarContextProvider = ({ children }: Props) => {
  const [navbar, setNavbar] = useState(false)

  return (
    <NavbarContext.Provider value={{ navbar, setNavbar }}>
      {children}
    </NavbarContext.Provider>
  )
}
