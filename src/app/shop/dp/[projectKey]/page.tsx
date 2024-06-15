import { Container } from '@/components/container/Container'
import Image, { StaticImageData } from 'next/image'
import BuySection from '@/components/buySection/BuySection'
import { getProjectDetailsAction } from '@/actions/getProjectDetails'
import ImagesComponent from '@/components/detailsPage/ImagesComponent'

// Icons
import storiesIcon from '@public/icons/stories-m.png'
import bedsIcon from '@public/icons/beds-m.png'
import bathsIcon from '@public/icons/baths-m.png'
import landSize from '@public/icons/land-size.png'
import office from '@public/icons/office.png'
import pool from '@public/icons/pool.png'
import garage from '@public/icons/covered-garage.png'
import sqmtIcon from '@public/icons/square-meters.png'
import gourmetArea from '@public/icons/gourmet-area.png'
import Heading from '@/components/form/Heading'
import { getProjectsAction } from '@/actions/getProjects'

interface Props {
  params: {
    [key: string]: string
  }
}

type iconImages = { [key: string]: StaticImageData }

const iconImages: iconImages = {
  landSize,
  sqmtIcon,
  storiesIcon,
  bedsIcon,
  bathsIcon,
  garage,
  office,
  gourmetArea,
  pool,
}

export async function generateStaticParams() {
  const projects = await getProjectsAction()

  return projects?.map((project) => {
    projectKey: project.id
  })
}

const ProjectDetailsPage = async ({ params }: Props) => {
  const { projectKey } = params

  const project = await getProjectDetailsAction(projectKey)

  return (
    <>
      <Container minimumScreenSize>
        <section className='flex flex-col'>
          <h1 className='text-heading3'>
            <span className=' text-logoColor-brandAG'>#</span> {project.name}
          </h1>
          <ImagesComponent projectImages={project.imageArray} />
        </section>
      </Container>
      {/* ICONS */}
      {project.assets.length ? (
        <section className='mx-auto my-6 flex w-full select-none flex-wrap justify-center bg-logoColor-surfaceMuted'>
          {project.assets.map((icon) => (
            <div
              key={icon.id}
              className='flex flex-col items-center p-2 text-center text-icon lg:mx-6'
            >
              <Image
                className='undraggable'
                width={45}
                height={45}
                src={iconImages[icon.alt]}
                alt={icon.alt}
              />
              <p className='uppercase'>{icon.iconName}</p>
              <p className='text-sm font-bold uppercase'>{icon.iconValue}</p>
            </div>
          ))}
        </section>
      ) : null}
      {/* Separated component */}
      <BuySection
        projectTypes={project.projectTypes}
        additionalOptions={project.additionalOptions}
      />
      {/* About the project */}
      {project.longDescription.length ? (
        <Container marginTopDefinition={[10, 4, 4]} minimumScreenSize>
          <main className='flex flex-col gap-4 bg-logoColor-surfaceMuted p-2 px-10'>
            <Heading
              tag='h3'
              label='Sobre o Projeto'
              className='text-heading3'
            />
            <div className='lg:min-h-96 flex flex-col justify-center gap-6 '>
              {project.longDescription.map((paragraph) => (
                <p key={paragraph} className='text-paragraph leading-loose'>
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
        </Container>
      ) : null}
    </>
  )
}

export default ProjectDetailsPage
