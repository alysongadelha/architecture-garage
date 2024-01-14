'use client'
import { useRef, useState } from 'react'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { ISelectOptions } from '@/interfaces/FormComponents'

type DataType = string | number
export type SelectType = (value: DataType) => void

type Props = {
  id: string
  options: ISelectOptions[]
  onSelect: SelectType
}

const Select = ({ id, options, onSelect }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useOnClickOutside(btnRef, false)

  const handleSelect = (label: string, value: number | string) => {
    setSelectedOption(label)
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <div
      id={id}
      className='relative  max-w-[250px] bg-logoColor-brandAG text-heading5 capitalize shadow-bot'
    >
      <div
        ref={btnRef}
        className={`flex cursor-pointer justify-between p-2 shadow-bot ${
          isOpen && 'border-b-2 border-accentColor'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{selectedOption || 'Escolha aqui ...'}</div>
        <div
          className={`${
            isOpen && 'rotate-180'
          } w-5 bg-arrowDown bg-center bg-no-repeat duration-100`}
        />
      </div>
      {isOpen ? (
        <ul className='absolute w-full cursor-pointer bg-logoColor-brandAG '>
          {options.map(({ value, label }) => (
            <li
              className='p-2 hover:bg-logoColor-surfaceMuted hover:text-accentColor'
              key={label}
              onClick={() => handleSelect(label, value)}
            >
              {label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
