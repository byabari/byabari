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
        <div>
          Hi, my name is Abari Abbassi. I was born in Amsterdam. I gew up
          between Morocco and Amsterdam, studied Computer Science in Paris, and
          did an exchange semester in Japan.
        </div>
        <div>
          I have worked with several sturtups. Among them is Hubs. Hubs is an
          on-demand manufacturing marketplace. I joined Hubs at the peak of
          their rapid growth stage. I mainly worked on solving the problem of
          shipping delays. During my time there, the company was acquired for
          $280 million and was rebranded from 3D Hubs to Hubs.
        </div>
        <div>
          Following that, I joined Practice. Practice is an CRM-like product for
          coaches and consultants. I joined Practice right after their seed
          round, led by a16z, and helped build some of the core parts of the
          product.
        </div>
        <div>
          Apart from my computer work, I also have a passion for photography.
          You can check out some of my work on Instagram (
          <Link
            className="inline underline"
            href="https://instagram.com/abari.cc"
            target="_blank"
          >
            @abari.cc
          </Link>
          ).
        </div>
        <div>
          You can contact me at: <a href="mailto:hi@abari.cc">hi@abari.cc</a>
        </div>
      </div>
      <Image src="/abari-about.jpg" width={400} height={400} />
    </>
  );
}
