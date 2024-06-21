import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portifa',
  description: 'Do papai',
};

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--my-font-family',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
