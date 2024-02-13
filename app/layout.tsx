import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/ui/globals.css";
import { LayoutProps } from "@/lib/@types/props";

const inter = Rubik({ 
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-rubik"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
