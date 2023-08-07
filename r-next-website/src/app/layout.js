import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe",
  description: "Win or Lose",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className="min-h-screen">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
