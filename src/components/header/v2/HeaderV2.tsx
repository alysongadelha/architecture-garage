'use client'

import Link from 'next/link'
import Image from 'next/image'
import architectureGarageLogo from '@/assets/logo.svg'
import architectureGarageLogoSmall from '@/assets/logo-fixed.svg'
import closeIcon from '@public/icons/close.svg'
import hamburgerIcon from '@public/icons/hamburger-menu.svg'
import { useContext } from 'react'
import { NavLinks } from './NavLinks'
import { usePathname } from 'next/navigation'
import { NavbarContext } from '@/hooks/NavbarContext'

export const HeaderV2 = () => {
  const { navbar, setNavbar } = useContext(NavbarContext)

  let pageName: string
  switch (usePathname()) {
    case '/shop':
      pageName = 'Projetos'
      break
    case '/about-us':
      pageName = 'Sobre'
      break
    case '/':
      pageName = 'Início'
      break
    default:
      pageName = ''
      break
  }

  return (
    <>
      <nav className='fixed left-0 right-0 top-0 z-30 w-full bg-logoColor-surfaceMuted'>
        <div className='mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl'>
          <div>
            <div className='flex items-center justify-between py-3 md:block md:py-5'>
              {/* Logo */}
              <Link href='/'>
                <Image
                  src={architectureGarageLogo}
                  alt={'alt'}
                  width={100}
                  className='undraggable hidden md:block'
                  priority={true}
                />
                <Image
                  src={architectureGarageLogoSmall}
                  alt={'alt'}
                  width={50}
                  className='undraggable block md:hidden'
                />
              </Link>
              {/* Hamburger button for mobile */}
              <div className='md:hidden'>
                <button
                  className='rounded-md p-2 outline-none focus:border-gray-400'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src={closeIcon}
                      alt='close-icon'
                      width={30}
                      height={30}
                    />
                  ) : (
                    <Image
                      src={hamburgerIcon}
                      alt='open-icon'
                      width={30}
                      height={30}
                      className='focus:border-none active:border-none'
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center overflow-hidden pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block p-12 md:p-0' : 'hidden'
              }`}
            >
              <NavLinks router={pageName} setNavbar={setNavbar} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
