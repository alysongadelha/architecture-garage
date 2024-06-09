'use client'

import { useRef, useState } from 'react'
import ItemsIncluded from './ItemsIncluded'
import Optionals from './Optionals'
import ProjectDefinition from './ProjectDefinition'
import SectionContainer from './SectionContainer'
import { AdditionalOptions, ProjectTypes } from '@/interfaces/Project'
import { weDoNotOffer } from '@/constants/we-do-no-offer'
import Modal from '../Modal'

type Props = {
  projectTypes: ProjectTypes
  additionalOptions: AdditionalOptions
}

const BuySection = ({ projectTypes, additionalOptions }: Props) => {
  const [projectTypeSelectedValue, setProjectTypeSelectedValue] =
    useState<number>(0)
  const [isShowModal, setIsShowModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <SectionContainer>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <ProjectDefinition
            projectTypeOptions={projectTypes}
            onSelectAction={(value: number) =>
              setProjectTypeSelectedValue(value)
            }
          />
          <ItemsIncluded />
          <Optionals
            additionalOptions={additionalOptions}
            projectTypeValue={projectTypeSelectedValue}
            setModal={() => setIsShowModal(true)}
          />
        </div>
      </SectionContainer>
      <Modal
        isShowModal={isShowModal}
        onRequestClose={() => setIsShowModal(false)}
        title='O que não fornecemos:'
      >
        <div ref={modalRef}>
          <p>Os itens abaixo, não são fornecidos pela “AG”:</p>
          <ul className='bullet my-4'>
            {weDoNotOffer.map((offer, index) => (
              <li
                key={index}
                className='ml-4 before:top-[4px] before:h-3 before:w-3'
              >
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default BuySection
