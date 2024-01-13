import { NavOptions } from '@/constants/Header'
import Link from 'next/link'
interface Props {
  router: string
}
const HeaderNav = ({ router }: Props) => {
  return (
    <div className='col-span-3 col-end-7 hover:ease-in '>
      <div className='flex flex-col justify-around lg:flex-row'>
        {NavOptions.map(({ title, url }) => {
          const isActive = router === title
          return (
            <Link
              href={url}
              key={title}
              className={`${
                isActive &&
                'pointer-events-none rounded-md bg-logoColor-brandAG'
              } mx-4 cursor-pointer px-2 py-1 text-heading3 font-bold text-logoColor-neutralMutedAG transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-125`}
            >
              {title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderNav
