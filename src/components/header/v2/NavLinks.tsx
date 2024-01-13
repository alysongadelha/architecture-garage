import { NavOptions } from '@/constants/Header'
import Link from 'next/link'
interface Props {
  router: string
  setNavbar: (arg: boolean) => void
}

export const NavLinks = ({ router, setNavbar }: Props) => {
  return (
    <ul className='h-screen items-center justify-center md:flex md:h-auto'>
      {NavOptions.map(({ title, url }) => {
        const isActive = router === title
        return (
          <li
            key={title}
            className={`${
              isActive &&
              'pointer-events-none rounded-md font-heading text-logoColor-brandAG md:bg-logoColor-brandAG md:text-logoColor-neutralAG'
            } cursor-pointer border-b-2 py-2 pb-6 text-center font-heading text-xl duration-300 hover:bg-logoColor-brandAG md:border-b-0 md:px-6 md:pb-2 md:hover:bg-transparent md:hover:text-accentColor`}
          >
            <Link href={url} onClick={() => setNavbar(false)}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
