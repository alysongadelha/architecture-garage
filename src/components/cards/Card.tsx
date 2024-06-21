'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CardSkeleton from '../Skeleton/CardSkeleton'
import { ProjectsData } from '@/interfaces/Project'

import imageNotFound from '@public/image/imageNotFound.png'
import sqmtIcon from '@public/icons/square-meters.png'
import storiesIcon from '@public/icons/stories.png'
import bedsIcon from '@public/icons/beds.png'
import bathsIcon from '@public/icons/baths.png'

type Props = {
  project: ProjectsData
}

const Card = ({ project }: Props) => {
  const router = useRouter()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const { projectId, image, squareMeters, stories, teaser, baths, beds, name } =
    project

  const handleclick = () => {
    router.push(`/shop/dp/${projectId}`)
  }

  return (
    <>
      <div
        className={
          'group/card h-[330px] w-[270px] cursor-pointer bg-transparent'
        }
        onClick={handleclick}
      >
        {isImageLoaded ? null : <CardSkeleton />}
        {/* Image and Text hovered */}
        <div
          className={`group relative h-[250px] w-[270px] overflow-hidden rounded-t group-hover/card:shadow-lg group-hover/card:shadow-gray-950/40 `}
        >
          <div className='bg-text invisible absolute z-10 flex h-[250px] w-[270px] translate-y-full flex-col justify-end px-3 pb-5  text-center transition-all duration-500 group-hover:visible group-hover:translate-y-0'>
            <span className=' font-bold text-slate-900'>{name}</span>
            <span className=' font-bold text-slate-900'>{teaser}</span>
          </div>

          <Image
            src={image || imageNotFound}
            fill
            alt='house-image'
            onLoad={() => setIsImageLoaded(true)}
            sizes='33vw'
          />
        </div>
        {/* Details */}
        <div
          className={`undraggable mt-[10px] h-[70px] w-[270px] flex-col overflow-x-hidden rounded-b bg-logoColor-brandAG shadow-lg group-hover/card:shadow-lg group-hover/card:shadow-gray-950/40 ${
            isImageLoaded ? 'visible' : 'hidden'
          }`}
        >
          {/* Icons */}
          <div className='flex max-h-[38px] items-center justify-around py-1'>
            <div className='flex w-9 items-center justify-center'>
              <Image
                src={sqmtIcon}
                alt='square-footage'
                className='undraggable'
              />
            </div>
            <div className='flex w-9 items-center justify-center'>
              <Image src={storiesIcon} alt='stories' className='undraggable' />
            </div>
            <div className='flex w-9 items-center justify-center'>
              <Image src={bedsIcon} alt='beds' className='undraggable' />
            </div>
            <div className='flex w-9 items-center justify-center'>
              <Image src={bathsIcon} alt='baths' className='undraggable' />
            </div>
          </div>
          {/* Values */}
          <div className='flex max-h-[17px] items-center justify-around border-y-[1px] border-black bg-logoColor-surfaceMuted text-[10px] shadow-md shadow-gray-900/40'>
            <div className='flex w-9 items-center justify-center'>
              <p>{`${squareMeters}.00`}</p>
            </div>
            <div className='flex w-9 items-center justify-center'>
              <p>{stories}</p>
            </div>
            <div className='flex w-9 items-center justify-center'>
              <p>{beds}</p>
            </div>
            <div className='flex w-9 items-center justify-center'>
              <p>{baths}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
