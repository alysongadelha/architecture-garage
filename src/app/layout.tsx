import "./globals.css";
import {
  Arimo,
  Montserrat,
  Open_Sans,
  Playfair_Display,
} from "next/font/google";
import Footer from "@/components/footer/Footer";
import { HeaderV2 } from "@/components/header/v2/HeaderV2";
import { AppContextProvider } from "@/hooks/AppContext";

const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

const arimoBold = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: "700",
});

export const metadata = {
  title: "Architecture Garage",
  description: "A website for Architecture Project Sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${arimo.variable}  ${openSans.variable} ${montSerrat.variable} ${playfairDisplay.variable} w-full gap-4 font-body text-logoColor-neutralAG`}
      >
        <AppContextProvider>
          <HeaderV2 />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
