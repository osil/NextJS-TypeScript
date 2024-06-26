import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { ThemeProvider } from "./ThemeProvider";
import { NavbarWithMegaMenu } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <StoreProvider>
        <ThemeProvider>
          <body className={inter.className}>
            <NavbarWithMegaMenu />
            <div className="container w-auto mx-auto mt-5">{children}</div>
          </body>
        </ThemeProvider>
      </StoreProvider>
    </html>
  );
}
