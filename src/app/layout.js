import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Libro de Cocina",
  description: "Lugar para encontrar tus recetas favoritas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
