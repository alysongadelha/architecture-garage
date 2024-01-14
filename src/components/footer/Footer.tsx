'use client'
import Link from 'next/link'
import { FooterInfo } from './FooterInfo'
import { Footerlinks } from '@/constants/Footer'
import Image from 'next/image'
import footerLog from '@/assets/footerLogo.svg'
import { medias } from '@/constants/FooterMedias'
import { useContext } from 'react'
import { NavbarContext } from '@/hooks/NavbarContext'

const Footer = () => {
  const { navbar } = useContext(NavbarContext)

  if (navbar) return null
  return (
    <footer className='w-full bg-logoColor-surfaceMuted'>
      <div className='container mx-auto flex w-10/12 flex-col justify-between lg:flex-row'>
        <div className=' my-4'>
          <Image
            src={footerLog}
            priority={true}
            alt='Footer Logo'
            className='undraggable'
          />
        </div>
        {Footerlinks.map((links) => (
          <div key={links.title} className=' my-3 text-gray-700'>
            <h3 className='font-heading text-heading3 font-bold'>
              {links.title}
            </h3>
            <ul>
              {links.links.map((item) => (
                <li key={item.title} className='my-3'>
                  <Link
                    className='text-heading5 font-thin duration-300 hover:text-accentColor'
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='my-3 '>
          <h3 className='text-heading3 font-bold text-gray-700'>
            Mídias Sociais
          </h3>
          <div className='inline-flex flex-wrap'>
            {medias.map(({ mediaName, path, icon }) => (
              <Link
                key={mediaName}
                className='m-1 cursor-pointer items-center justify-center rounded-full bg-logoColor-brandAG p-2  hover:shadow-lg'
                href={path}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterInfo />
    </footer>
  )
}

export default Footer
