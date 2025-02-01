import type { Metadata } from "next";
import { Kosugi_Maru, Kaisei_Decol, Rubik } from "next/font/google";
import "./globals.scss";

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  subsets: ["latin-ext"],
  weight: "400",
});

const kosugiMaru = Kosugi_Maru({
  variable: "--font-kosugi-maru",
  subsets: ["latin-ext"],
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kaiseiDecol.variable} ${kosugiMaru.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
