import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Providers } from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <main className={"max-w-3xl mx-auto p-4"}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
