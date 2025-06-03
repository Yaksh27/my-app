import './globals.css';
import Navbar from './components/Navbar';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'Your Portfolio',
  description: "Yaksh's modern portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
