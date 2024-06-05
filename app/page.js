import { Instrument_Serif, Spline_Sans_Mono } from "next/font/google";
import Resume from "@/components/Resume";
import Card from "@/components/Card";
import Image from "next/image";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Abari",
  description:
    "Hi there, I'm Abari Abbassi. I'm a Frontend Engineer with an eye for Design.",
  openGraph: {
    title: "Abari",
    description:
      "Hi there, I'm Abari Abbassi. I'm a Frontend Engineer with an eye for Design.",
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
        alt: "Abari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function HomePage() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center mt-12 sm:mt-24 mb-12">
        {/* <Image
          className="rounded-full inline ml-0.5 mr-3"
          width={90}
          height={4}
          src="/abari.jpg"
        /> */}
        <h1 className={instrumentSerif.className + " text-4xl sm:text-5xl"}>
          Hey, I'm <span className="italic leading-tighter">Abari</span>
        </h1>
      </div>
      <h2 className={instrumentSerif.className + " text-4xl sm:text-5xl mb-14"}>
        I'm a <span className="italic leading-tighter">Frontend Engineer</span>
        <br />
        with an eye for <span className="italic leading-tighter">Design</span>
      </h2>
      <div
        className={splineSansMono.className + " text-[#cccccc] space-y-5 mb-6"}
      >
        <p>
          I was born in Amsterdam, gew up between Morocco and Amsterdam, studied
          Computer Science in Paris, and did an exchange semester in Japan. My
          web framework of choice is React. Among the companies I've worked for
          are Practice and Hubs.
        </p>
        {/* I'm currently based in Tangier, Morocco and work with companies from
        around the world. */}
        {/* <p>
          Practice is a CRM-like product for coaches and consultants. I joined
          Practice right after their seed round, led by a16z, and helped build
          some of the core parts of the product.
        </p>
        <p>
          Hubs is an on-demand manufacturing marketplace. I joined Hubs at the
          peak of their rapid growth stage. During my time there, the company
          was acquired for $280 million and was rebranded from 3D Hubs to Hubs.
        </p> */}
      </div>
      <Image
        className="mb-14 mx-auto sm:mx-0"
        src="/abari.jpg"
        width={400}
        height={400}
      />
      <Resume />
      <h2
        className={
          instrumentSerif.className + " text-4xl sm:text-5xl mt-32 mb-8"
        }
      >
        My latest side project is{" "}
        <span className="italic leading-tighter">Hotelfull</span>
        <br />
        where I build websites{" "}
        <span className="italic leading-tighter">Hotels</span>
      </h2>
      <p
        className={splineSansMono.className + " text-[#cccccc] space-y-5 mb-6"}
      >
        I've always been interested in the travel and hospitality space. My
        first job in the industry was at El Fenn Hotel in Marrakech at the age
        of 18. At 22, I created my first Airbnb listing. The idea for Hotelfull
        came naturally, being around people from the industry. Other side
        projects I've worked on previously were{" "}
        <a
          className="text-white hover:underline underline-offset-8"
          href="https://signerhq.com/"
          target="_blank"
        >
          Signer
        </a>{" "}
        and{" "}
        <a
          className="text-white hover:underline underline-offset-8"
          href="https://linkfolders.com/"
          target="_blank"
        >
          Linkfolders
        </a>
        .
      </p>
      {/* <h2
        className={
          instrumentSerif.className + " text-4xl sm:text-5xl mt-24 mb-8"
        }
      >
        My latest side project is{" "}
        <span className="italic leading-tighter">Hotelfull</span>
        <br />
        where I build{" "}
        <span className="italic leading-tighter">Direct Booking</span>
        <br />
        websites for <span className="italic leading-tighter">Hotels</span>
      </h2> */}
      <h2
        className={
          instrumentSerif.className + " text-4xl sm:text-5xl mt-24 mb-8"
        }
      >
        I also post stuff on{" "}
        <span className="italic leading-tighter">Instagram</span>
        {/* <br />
        about <span className="italic leading-tighter">Tangier</span> */}
      </h2>
      <div className="w-full flex justify-center sm:justify-start flex-wrap gap-2 mb-9">
        <Image src="/instagram-1.jpg" width={200} height={400} />
        <Image src="/instagram-2.jpg" width={200} height={400} />
        <Image src="/instagram-3.jpg" width={200} height={400} />
      </div>
      <p
        className={splineSansMono.className + " text-[#cccccc] space-y-5 mb-6"}
      >
        You can find me at{" "}
        <a
          className="text-white hover:underline underline-offset-8"
          href="https://www.instagram.com/tangierbyabari"
          target="_blank"
        >
          @tangierbyabari
        </a>
        .
      </p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card title="Hotelfull" href="hotelfull.com"></Card>
              <Card title="Signer" href="signerhq.com"></Card>
              <Card title="Linkfolders" href="linkfolders.com"></Card>
            </div> */}
      {/* <Image src="/abari-about.jpg" width={400} height={400} /> */}
      {/* <h2
          className={instrumentSerif.className + " text-4xl sm:text-5xl mb-4"}
        >
          I'm also a bit of an <br />
          <span className="italic leading-tight">Instagram</span> influencer.
        </h2> */}
    </div>
  );
}
