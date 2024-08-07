import { Instrument_Serif, Spline_Sans_Mono } from "next/font/google";
import Resume from "@/components/Resume";
import Card from "@/components/Card";
import SideProject from "@/components/SideProject";
import Image from "next/image";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Abari Abbassi",
  description:
    "Hey, I'm Abari. I'm a Frontend Engineer with an eye for Design.",
  openGraph: {
    title: "Abari Abbassi",
    description:
      "Hey, I'm Abari. I'm a Frontend Engineer with an eye for Design.",
    url: "https://byabari.com",
    siteName: "Abari",
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

const Link = ({ href, children }) => (
  <a
    className="text-[#3f954f] hover:text-[#30753d] focus:text-[#58c96d] hover:underline underline-offset-4"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center mt-14 sm:mt-28 mb-12">
        <h1 className={instrumentSerif.className + " text-3xl sm:text-4xl"}>
          Hey, I'm <span className="italic leading-tighter">Abari</span>
        </h1>
      </div>
      <h2 className={instrumentSerif.className + " text-4xl sm:text-5xl mb-14"}>
        I'm a <span className="italic leading-tighter">Frontend Engineer</span>
        <br />
        with an eye for <span className="italic leading-tighter">Design</span>
      </h2>
      <p
        className={splineSansMono.className + " text-[#3A3A3A] space-y-5 mb-6"}
      >
        I was born in Amsterdam, gew up between Morocco and Amsterdam, studied
        Computer Science in Paris, and did an exchange semester in Japan. My web
        framework of choice is React. Among the companies I've worked for are{" "}
        <Link href="https://practice.do/">Practice</Link> and{" "}
        <Link href="https://hubs.com/">Hubs</Link>.
      </p>
      <Image
        className="mb-16 sm:mx-0"
        src="/abari-about.jpg"
        width={400}
        height={400}
        priority
      />
      <Resume />
      <h2
        className={
          instrumentSerif.className + " text-3xl sm:text-4xl mt-24 mb-6"
        }
      >
        Some of my previous{" "}
        <span className="italic leading-tighter">Side Projects</span>
      </h2>
      <div className="flex gap-3 mb-20">
        <SideProject
          logoImageSrc="/linkfolders-logo.jpg"
          title="Linkfolders"
          href="https://linkfolders.com"
          imageSrc="/linkfolders.jpg"
          description="An online bookmark manager. It was the first ever SaaS product I have built from scratch."
        />
        <SideProject
          logoImageSrc="/signerhq-logo.jpg"
          title="Signer HQ"
          href="https://signerhq.com"
          imageSrc="/signerhq.jpg"
          description="An e-signature SaaS product that relies on SEO to acquire new customers."
        />
        <SideProject
          logoImageSrc="/hotelfull-logo.jpg"
          title="Hotelfull"
          href="https://hotelfull.com/"
          imageSrc="/hotelfull.jpg"
          description="A web development agency that builds direct booking websites for hotels and vacation rentals."
        />
      </div>
      <h2 className={instrumentSerif.className + " text-3xl sm:text-4xl mb-7"}>
        I also post stuff on{" "}
        <span className="italic leading-tighter">Instagram</span>
      </h2>
      <div className="flex flex-wrap gap-2 mb-7">
        <Image src="/instagram-1.jpg" width={180} height={400} />
        <Image src="/instagram-2.jpg" width={180} height={400} />
        <Image src="/instagram-3.jpg" width={180} height={400} />
      </div>
      <p
        className={splineSansMono.className + " text-[#3A3A3A] space-y-5 mb-5"}
      >
        You can find me at{" "}
        <Link href="https://www.instagram.com/tangierbyabari/">
          @tangierbyabari
        </Link>
        .
      </p>
    </div>
  );
}
