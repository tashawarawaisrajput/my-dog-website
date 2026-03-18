// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WiseK9 | Premium Dog Training & Behavioural Services',
  description:
    'Expert dog training and certified behavioural therapy. Transform your dog with science-backed, compassionate methods that deliver real, lasting results.',
  keywords: 'dog training, dog behaviour, puppy training, certified behaviourist, professional dog trainer',
  openGraph: {
    title: 'WiseK9 | Premium Dog Training',
    description: 'Expert dog training by certified professionals.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body bg-cream-100 text-forest-700 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
