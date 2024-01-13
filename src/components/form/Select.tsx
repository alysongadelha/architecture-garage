import { ISelectOptions } from '@/interfaces/FormComponents'
import React from 'react'

type Props = {
  id: string
  options: ISelectOptions[]
  selectionAction: (value: string | number) => void
}

const Select = ({ id, options, selectionAction }: Props) => {
  return (
    <select
      className='max-w-[220px] bg-logoColor-brandAG bg-arrowDown bg-auto p-2 text-heading5 capitalize shadow-bot'
      name={id}
      id={id}
      onChange={(e) => selectionAction(e.target.value)}
    >
      <option className='text-heading5' value='' label='Escolha aqui...' />
      {options.map((option) => (
        <option key={option.label} className='' value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
