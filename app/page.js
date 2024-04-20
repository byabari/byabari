import Resume from "@/components/Resume";
import Card from "@/components/Card";

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
      <div className="flex flex-col justify-center mt-28">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5">Hi, I'm Abari</h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          I'm a product-minded Frontend Engineer
        </h2>
        <p className="mb-8">
          I enjoy building web apps from design to production. My web framework
          of choice is React. Some of my personal projects are:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card title="Signer" href="signerhq.com"></Card>
          <Card title="Hotelfull" href="hotelfull.com"></Card>
          <Card title="Linkfolders" href="linkfolders.com"></Card>
        </div>
        <div className="space-y-5 mt-24 mb-12">
          <p>
            I was born in Amsterdam, gew up between Morocco and Amsterdam,
            studied Computer Science in Paris, and did an exchange semester in
            Japan.
          </p>
          <p>
            I've worked with several sturtups. Among them is the Amsterdam based
            scale-up, Hubs. Hubs is an on-demand manufacturing marketplace. I
            joined Hubs at the peak of their rapid growth stage. During my time
            there, the company was acquired for $280 million and was rebranded
            from 3D Hubs to Hubs.
          </p>
          <p>
            Following that, I joined Practice. Practice is a CRM-like product
            for coaches and consultants. I joined Practice right after their
            seed round, led by a16z, and helped build some of the core parts of
            the product.
          </p>
        </div>
      </div>
      <Resume />
    </>
  );
}
