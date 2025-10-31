import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WithNavbarFooter from "@/components/structure/WithNavbarFooter";
import AOSWrapper from "@/components/utils/AOSWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AOSWrapper>
          <WithNavbarFooter>
            {children}
          </WithNavbarFooter>
        </AOSWrapper>
      </body>
    </html>
  );
}
