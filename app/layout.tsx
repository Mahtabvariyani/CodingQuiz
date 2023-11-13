import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Test your Knowledge or Learn something",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundStyle = {
    background: `linear-gradient(rgba(var(--background-start-rgb), 0.6), rgba(var(--background-end-rgb), 0.3)), url("/room.jpg") center / cover no-repeat`,
  };

  return (
    <html lang="en">
      <body style={backgroundStyle} className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
