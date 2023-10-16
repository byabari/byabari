import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-24 mb-8">About</h1>
      <div className="space-y-5 mb-12">
        <p>
          Hi, my name is Bari. I was born in Amsterdam and moved to Morocco at
          the age of 10. I studied Computer Science in Paris and did an exchange
          semester in Japan. During my time at university, I worked at a
          different startup every summer.
        </p>
        <p>
          After my final semester in Japan, I joined Hubs, an Amsterdam-based
          scale-up, during its rapid growth phase. Hubs is an on-demand
          manufacturing marketplace with manufacturing partners around the
          world. I mainly worked on solving the problem of shipping delays.
          During my time there, the company was acquired for $280 million and
          rebranded from 3D Hubs to Hubs.
        </p>
        <p>
          Following that, I moved from Amsterdam to Tangier, Morocco, and joined
          the fully remote startup, Practice, after their seed round led by
          a16z. Practice is an all-in-one SaaS product for client-based
          businesses, such as coaches and consultants. As a full-stack
          developer, I worked on several core features, including the home
          dashboard, payments, onboarding flows, email notifications, etc.
        </p>
        <p>
          Apart from my computer work, I'm also passionate about photography.
          You can check out my work on Instagram (@bariabbassi). Some of my
          previous clients include Nokia, VanMoof, and El Fenn Hotel.
        </p>
        <p>
          My lifestyle also includes regular biking and swimming. One of the
          driving factors behind my move to Tangier was the opportunity to
          pursue these hobbies year-round. Back in my teenage years, I competed
          in numerous cycling races and achieved a notable 7th place at the
          Moroccan cycling championships. These days, I continue to take part in
          the occasional triathlon or cycling race every few months.
        </p>
        <p>
          You can contact me at:{" "}
          <a href="mailto:bari@abbas.si">bari@abbas.si</a>
        </p>
      </div>
      <Image src="/bari_abbassi.jpg" width={400} height={400} />
    </>
  );
}
