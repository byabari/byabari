import Resume, { Technologies } from "@/components/Resume";

export const metadata = {
  title: "Abari Abbassi",
  description:
    "Hi, I'm Abari Abbassi. I'm a product-minded Frontend Engineer. I enjoy building web apps from design to production.",
  openGraph: {
    title: "Abari Abbassi",
    description:
      "Hi, I'm Abari Abbassi. I'm a product-minded Frontend Engineer. I enjoy building web apps from design to production.",
    url: "https://byabari.com",
    siteName: "Abari Abbassi",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "Abari Abbassi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5">
          Hi, I'm Abari Abbassi
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          I'm a product-minded Frontend Engineer
        </h2>
        <p className="mb-4">
          I enjoy building web apps from design to production and my web
          framework of choice is React. Some of my personal projects are{" "}
          <a
            className="underline underline-offset-4"
            href="https://signerhq.com"
            target="_blank"
          >
            Signer
          </a>
          {", "}
          <a
            className="underline underline-offset-4"
            href="https://hotelfull.com"
            target="_blank"
          >
            Hotelfull
          </a>
          {" and "}
          <a
            className="underline underline-offset-4"
            href="https://linkfolders.com"
            target="_blank"
          >
            LinkFolders
          </a>
          .
        </p>
      </div>
      <Resume />
    </>
  );
}
