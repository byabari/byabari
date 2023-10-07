import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "@/components/Link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bari Abbassi",
  description: "Product-minded full-stack software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#011FA4" />
        <meta name="theme-color" content="#011FA4" />
      </head>
      <body
        className={
          inter.className +
          " bg-[#011FA4] text-[#FFFFFF] min-h-screen flex flex-col items-center"
        }
      >
        <div className="w-full max-w-[700px] p-4">
          <Navbar />
          <main className="pb-44">{children}</main>
          <footer className="flex items-center justify-between">
            <div className="text-xs font-light">© 2023 Bari Abbassi</div>
            <div className="flex items-center gap-x-3">
              {[
                {
                  text: "Instagram",
                  href: "https://instagram.com/bariabbassi",
                  src: "/instagram.svg",
                },
                {
                  text: "Twitter",
                  href: "https://twitter.com/bariabbassi",
                  src: "/twitter.svg",
                },
                {
                  text: "LinkedIn",
                  href: "https://linkedin.com/in/bariabbassi",
                  src: "/linkedin.svg",
                },
                {
                  text: "GitHub",
                  href: "https://github.com/bariabbassi",
                  src: "/github.svg",
                },
              ].map((link) => (
                <Link href={link.href} target="_blank">
                  <Image
                    src={link.src}
                    alt={`${link.text} logo`}
                    className="invert hover:underline underline-offset-4"
                    width={12}
                    height={12}
                    priority
                  />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
