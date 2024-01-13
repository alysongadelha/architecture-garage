'use client'
import { RefObject, useEffect } from 'react'

export const closeOnOutsideClick = (
  elementRef: RefObject<HTMLElement>,
  isOpen: (value: boolean) => void,
) => {
  useEffect(() => {
    const hideElement = (e: any) => {
      if (!elementRef.current?.contains(e.target)) {
        isOpen(false)
      }
    }
    document.body.addEventListener('click', hideElement)
    return () => document.body.removeEventListener('click', hideElement)
  }, [])
}
