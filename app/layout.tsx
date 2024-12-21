import type { Metadata } from 'next';
import './globals.css';
import { Roboto, Secular_One, Urbanist } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Qest Frontend Assignment',
  description: 'Frontend Assignment for qest.',
};

const urbanist = Urbanist({
  preload: true,
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

const secularOne = Secular_One({
  display: 'swap',
  weight: '400',
  variable: '--font-secular-one',
  subsets: ['latin'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${urbanist.variable} ${secularOne.variable} ${roboto.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
