import './globals.css'
import { Arimo, Montserrat, Playfair_Display } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { HeaderV2 } from '@/components/header/v2/HeaderV2'
import { AppContextProvider } from '@/hooks/AppContext'

const montSerrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-montserrat',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-playfair-display',
  style: 'italic',
})

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-arimo',
})

export const metadata = {
  title: 'Architecture Garage',
  description: 'A website for Architecture Project Sales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body
        className={`${arimo.className} ${montSerrat.variable} ${playfairDisplay.variable} font-body w-full gap-4 text-logoColor-neutralAG`}
      >
        <AppContextProvider>
          <HeaderV2 />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
