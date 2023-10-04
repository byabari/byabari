import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bari Abbassi",
  description: "Product-minded full-stack software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-[#011FA4] text-[#FFFFFF] min-h-screen flex flex-col items-center"
        }
      >
        <div className="w-full max-w-[700px] p-4">
          <Navbar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
