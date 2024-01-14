import React from 'react'
import Select, { SelectType } from '../form/Select'
import { ProjectTypes } from '@/interfaces/Project'

type Props = {
  onSelectAction: (value: number) => void
  projectTypeOptions: ProjectTypes
}

const ProjectDefinition = ({ onSelectAction, projectTypeOptions }: Props) => {
  return (
    <div className='col-span-1 flex flex-col gap-10 px-2 sm:py-2 lg:col-span-4'>
      <div className='flex flex-col gap-3'>
        <h5 className='text-heading5 font-bold'>
          Defina que tipo de projeto deseja
        </h5>
        <Select
          id='project-definition'
          options={projectTypeOptions}
          onSelect={onSelectAction as SelectType}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h4 className='text-heading4 font-bold'>Descrição</h4>
        <p className='text-xs'>
          Arquivos digitais em PDF para que seja impresso ou visualizado em meio
          digita l (*Vem com uma permissão legal para alterar o projeto).
          Entregue digitalmente, normalmente entre 1 e 2 dias úteis.
        </p>
      </div>
    </div>
  )
}

export default ProjectDefinition
