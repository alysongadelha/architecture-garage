import "./globals.css";
import {
  Inter,
  Montserrat,
  Open_Sans,
  Playfair_Display,
} from "next/font/google";

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
        className={`${openSans.variable} ${montSerrat.variable} ${playfairDisplay.variable}`}
      >
        <header>
          <h1>HEADER</h1>
        </header>
        <nav>
          <h1>NAVIGATION</h1>
        </nav>

        {children}
        <footer>
          <h1>FOOTER</h1>
        </footer>
      </body>
    </html>
  );
}
