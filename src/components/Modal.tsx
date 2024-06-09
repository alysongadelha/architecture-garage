'use client'

import { useEffect, useState } from 'react'

type ModalProps = {
  isShowModal: boolean
  onRequestClose: () => void
  children: React.ReactNode
  title?: string
}

const Modal = ({
  isShowModal,
  onRequestClose,
  children,
  title,
}: ModalProps) => {
  const [htmlElement, setHtmlElement] = useState<HTMLHtmlElement | null>(null)

  useEffect(() => {
    setHtmlElement(document.querySelector('html'))
  }, [])

  useEffect(() => {
    if (htmlElement === null) return
    isShowModal
      ? (htmlElement.style.overflowY = 'hidden')
      : (htmlElement.style.overflowY = '')
  }, [isShowModal])

  if (htmlElement === null) return

  return isShowModal ? (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-logoColor-neutralMutedAG/40'>
      <div
        className='h-5/6 w-3/4 overflow-y-scroll rounded-lg bg-logoColor-surfaceMuted p-5 md:h-fit'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <header className='my-2'>
          <button
            className='float-right text-xl font-bold uppercase'
            onClick={onRequestClose}
          >
            x
          </button>
          {title ? <h2 className='text-2xl font-bold'>{title}</h2> : null}
        </header>
        {children}
      </div>
    </div>
  ) : null
}

export default Modal
