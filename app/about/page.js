import Image from "next/image";
import Link from "@/components/Link";

export const metadata = {
  title: "About – Abari Abbassi",
  description:
    "Hi, I'm Abari Abbassi. I'm a product-minded Frontend Engineer. I enjoy building web apps from design to production.",
};

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-24 mb-8">About</h1>
      <div className="space-y-5 mb-12">
        <p>
          Hi, my name is Abari Abbassi. I was born in Amsterdam, gew up between
          Morocco and Amsterdam, studied Computer Science in Paris, and did an
          exchange semester in Japan.
        </p>
        <p>
          I've worked with several sturtups. Among them is Hubs. Hubs is an
          on-demand manufacturing marketplace. I joined Hubs at the peak of
          their rapid growth stage. During my time there, the company was
          acquired for $280 million and was rebranded from 3D Hubs to Hubs.
        </p>
        <p>
          Following that, I joined Practice. Practice is a CRM-like product for
          coaches and consultants. I joined Practice right after their seed
          round, led by a16z, and helped build some of the core parts of the
          product.
        </p>
        <p>
          Apart from my computer work, I also have a passion for photography.
          You can check out some of my work on Instagram (
          <Link
            className="inline"
            href="https://instagram.com/tangierbyabari"
            target="_blank"
          >
            @tangierbyabari
          </Link>
          ).
        </p>
        <p>
          Let's chat! Shoot me an email:{" "}
          <a href="mailto:hey@byabari.com">hey@byabari.com</a>
        </p>
      </div>
      <Image src="/abari-about.jpg" width={400} height={400} />
    </>
  );
}
