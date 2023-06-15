import Header from "@/components/header/Header";
import "./globals.css";
import {
  Arimo,
  Inter,
  Montserrat,
  Open_Sans,
  Playfair_Display,
} from "next/font/google";
import Footer from "@/components/footer/Footer";

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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Architecture Garage",
  description: "A site for Architecture Project Sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${arimo.variable}  ${openSans.variable} ${montSerrat.variable} ${playfairDisplay.variable} grid grid-cols-12 gap-4 font-body text-logoColor-neutralAG`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
