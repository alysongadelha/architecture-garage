import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export const medias = [
  {
    mediaName: 'Facebook',
    path: 'https://www.facebook.com/',
    icon: <Facebook className='h-4 w-4 ' />,
  },
  {
    mediaName: 'Twitter',
    path: 'https://twitter.com/',
    icon: <Twitter className='h-4 w-4 ' />,
  },
  {
    mediaName: 'Instagram',
    path: 'https://www.instagram.com/?hl=en',
    icon: <Instagram className='h-4 w-4 ' />,
  },
  {
    mediaName: 'Linkedin',
    path: 'https://www.linkedin.com/feed/',
    icon: <Linkedin className='h-4 w-4 ' />,
  },
]
