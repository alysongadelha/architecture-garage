'use client'

import { AdditionalOptions } from '@/interfaces/Project'
import { getTotalValueFromOptions } from '@/utils'
import { useRef, useState } from 'react'

export interface OptionalItem {
  label: string
  value: number
}

type Props = {
  additionalOptions: AdditionalOptions
  projectTypeValue: number
  setModal: () => void
}

const Items: OptionalItem[] = [
  {
    label: 'Imagens para Divulgação',
    value: 1000,
  },
  { label: 'Projeto Luminotécnicos', value: 2000 },
  { label: 'Projeto de Interiores', value: 4200 },
  { label: 'Projeto de Mobiliários', value: 2999.9 },
  {
    label: 'RRT (Registro de Resp. Técnica) somente do projeto',
    value: 300,
  },
]

const Optionals = ({
  projectTypeValue,
  setModal,
  additionalOptions,
}: Props) => {
  const [checkedValues, setCheckedValues] = useState<Array<OptionalItem>>([])

  const totalValue = getTotalValueFromOptions(checkedValues, projectTypeValue)

  const BRCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function checkboxChange(checked: boolean, item: OptionalItem): void {
    if (checked) {
      setCheckedValues([
        ...checkedValues,
        { label: item.label, value: item.value },
      ])
    } else {
      setCheckedValues(
        checkedValues.filter(
          (checkedValue) => checkedValue.label !== item.label,
        ),
      )
    }
  }

  return (
    <div className='col-span-1 flex flex-col gap-10 px-2 sm:py-2 lg:col-span-4 lg:border-l-2 lg:border-black'>
      <div className='flex flex-col gap-3'>
        <h4 className='text-heading4 font-bold'>Opcionais</h4>
        {/* Items */}
        <div className='flex flex-col gap-6'>
          <ul>
            {additionalOptions.map((option) => (
              <li className='flex justify-between gap-2' key={option.label}>
                <div className='flex gap-2 align-middle'>
                  <input
                    className='form-checkbox h-3 w-3 cursor-pointer rounded-full '
                    type='checkbox'
                    name={option.label}
                    id={option.label}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      checkboxChange(e.target.checked, option)
                    }
                  />
                  <label className='cursor-pointer' htmlFor={option.label}>
                    {option.label}
                  </label>
                </div>
                <span>{BRCurrency.format(option.value)}</span>
              </li>
            ))}
          </ul>
        </div>
        <h4 className='text-heading4 font-bold'>O que não fornecemos</h4>
        <div className='flex justify-between'>
          <span
            className='cursor-pointer self-center font-accent duration-300 hover:text-accentColor'
            onClick={() => setModal()}
          >
            Leia mais &gt;&gt;
          </span>
          <div className='flex flex-col text-center'>
            <span className='font-bold'>{BRCurrency.format(totalValue)}</span>
            <button className='w-36 bg-logoColor-brandAG px-4 py-2 text-heading5 capitalize shadow-bot transition-all duration-300 hover:bg-accentColor hover:shadow-lg'>
              comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optionals
