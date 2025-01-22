import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_compontents/Navbar";
import Footer from "./_compontents/Footer";
import Animation from "./_compontents/LoadingAnimation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khairul.Info",
  description: "Generated by Khairul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased dark:bg-[#171923]`}
      >
        <div className="mx-4 flex flex-col dark:text-white lg:mx-auto lg:max-w-[1214px]">
          <Animation>
            <div className="sticky left-0 right-0 top-0 z-30 flex flex-col items-center justify-center">
              <Navbar />
            </div>

            <main>{children}</main>
            <Footer />
          </Animation>
        </div>
      </body>
    </html>
  );
}
