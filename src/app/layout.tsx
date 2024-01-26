import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/provider";
import Header from "@/app/_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laroti Bakery",
  description: "Simple Bakery Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <Provider>
          <Header />
          <div className="container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
