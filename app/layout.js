import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://byabari.com/" />
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
        <meta name="msapplication-TileColor" content="#F1F1F1" />
        <meta name="theme-color" content="#F1F1F1" />
      </head>
      <body
        className={
          inter.className +
          " text-[#151515] bg-[#F1F1F1] min-h-screen flex flex-col items-center"
        }
      >
        <div className="w-full max-w-[700px] p-4">
          <main className="pb-44">{children}</main>
          <footer className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              {[
                {
                  text: "Instagram",
                  href: "https://instagram.com/tangierbyabari",
                  src: "/instagram.svg",
                },
                {
                  text: "Twitter",
                  href: "https://twitter.com/byabari",
                  src: "/twitter.svg",
                },
                {
                  text: "LinkedIn",
                  href: "https://linkedin.com/in/byabari",
                  src: "/linkedin.svg",
                },
                {
                  text: "GitHub",
                  href: "https://github.com/byabari",
                  src: "/github.svg",
                },
              ].map((link) => (
                <a href={link.href} target="_blank">
                  <Image
                    src={link.src}
                    alt={`${link.text} logo`}
                    className="invert"
                    width={12}
                    height={12}
                    priority
                  />
                </a>
              ))}
            </div>
            <div className="text-xs font-light text-[#faf6ea]">© 2024</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
