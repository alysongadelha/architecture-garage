'use client'
import { RefObject, useEffect, useState } from 'react'

export const useOnClickOutside = (
  elementRef: RefObject<HTMLElement>,
  initialState: boolean,
) => {
  const [isOpen, setIsOpen] = useState(initialState)
  useEffect(() => {
    const hideElement = (e: any) => {
      if (elementRef.current && !elementRef.current?.contains(e.target)) {
        setIsOpen(!isOpen)
      }
    }

    if (isOpen) window.addEventListener('click', hideElement)
    return () => {
      window.removeEventListener('click', hideElement)
    }
  }, [isOpen, elementRef])

  return { isOpen, setIsOpen }
}
