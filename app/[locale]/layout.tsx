import type { Metadata } from "next";
import { Inter } from "@next/font/google"; // Import Inter font from Google
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable", // Using variable for different weights
});

export const metadata: Metadata = {
  title: "G. ui/ux",
  description: "An UI UX Portfolio experience",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Fetch messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased bg-black`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
