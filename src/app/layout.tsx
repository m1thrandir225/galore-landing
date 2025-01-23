import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import {ThemeProvider} from "@/context/ThemeProvider";

const benzinFont = localFont({
  src: "../../public/fonts/Benzin-Bold.ttf",
  variable: "--font-benzin",
});

const satoshiFont = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const stardomFont = localFont({
  src: "../../public/fonts/Stardom-Regular.otf",
  variable: "--font-stardom",
});

export const metadata: Metadata = {
  title: "Galore",
  description: "Your next favourite cocktail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${benzinFont.variable} ${stardomFont.variable} ${satoshiFont.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
