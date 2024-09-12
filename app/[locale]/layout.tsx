import type { Metadata } from "next";
import { Inter } from "@next/font/google"; // Import Inter font from Google
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import { ThemeProvider } from "@/components/theme-provider"


// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable", // Using variable for different weights
});

export const metadata: Metadata = {
  title: "g. ui/ux",
  description: "Sr. UI / UX Design",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure locale is passed as a string to getMessages
  const messages = await getMessages({ locale });


  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased bg-black`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
