import { createElement } from 'react'

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label: string
  className: string
}

const Heading = ({ tag, label, className }: Props) => {
  return createElement(
    tag,
    { className: `uppercase z-10 font-heading effect ${className}` },
    label,
  )
}

export default Heading
