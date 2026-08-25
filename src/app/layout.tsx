import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ilya Dolotov: aplikacje webowe i mobilne dla firm',
  description:
    'Aplikacje dla firm, które chcą zastąpić ręczne pilnowanie zamówień, klientów i wewnętrznych procesów.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} antialiased`}
        data-design-contract="997c71b1"
      >
        {children}
      </body>
    </html>
  );
}
