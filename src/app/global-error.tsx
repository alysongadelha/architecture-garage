'use client'
import { Container } from '@/components/container/Container'
import Footer from '@/components/footer/Footer'
import { HeaderV2 } from '@/components/header/v2/HeaderV2'
import { NavbarContextProvider } from '@/hooks/NavbarContext'
import { Arimo } from 'next/font/google'
import { useRouter } from 'next/navigation'

type GlobalErrorProps = {
  error: Error
}

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-arimo',
})

const GlobalError = ({ error }: GlobalErrorProps) => {
  const { push } = useRouter()
  return (
    <html lang='pt-br'>
      <body
        className={`${arimo.className} font-body w-full gap-4 text-logoColor-neutralAG`}
      >
        <NavbarContextProvider>
          <HeaderV2 />
          <Container>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => push('/')}>Try again</button>
          </Container>
          <Footer />
        </NavbarContextProvider>
      </body>
    </html>
  )
}

export default GlobalError
