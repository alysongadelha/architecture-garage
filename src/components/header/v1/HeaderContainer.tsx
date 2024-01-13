import Link from 'next/link'
import HeaderNav from './HeaderNav'
import Image, { StaticImageData } from 'next/image'

interface StaticRequire {
  default: StaticImageData
}
type StaticImport = StaticRequire | StaticImageData

interface ImageProps {
  width?: number
  src: string | StaticImport
  alt: string
}

interface Props {
  imageProps: ImageProps
  pageName: string
}

const HeaderContainer = ({ imageProps, pageName }: Props) => {
  const { src, alt, width } = imageProps
  return (
    <>
      <div className='container mx-auto w-10/12 py-2'>
        {/* NAVIGATION DIV */}
        <div className='flex flex-col items-center justify-between gap-4 lg:flex-row'>
          <div className='hidden w-auto lg:block'>
            <Link href='/'>
              <Image src={src} alt={alt} width={width} />
            </Link>
          </div>
          <HeaderNav router={pageName} />
        </div>
        {/* TEXT BOX */}
        {/* <HeaderTextBox pageName={pageName} /> */}
      </div>
      {/* <hr className="col-span-10 col-start-2 my-1 border-b-2" /> */}
    </>
  )
}

export default HeaderContainer
